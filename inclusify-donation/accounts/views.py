from rest_framework.response import Response
from django.shortcuts import redirect
from django.conf import settings
import os 
import sys
sys.path.append(os.getcwd())
from .serializer import AccountSerializers
from .models import Account
from rest_framework.views import APIView
from rest_framework.exceptions import AuthenticationFailed
User=settings.AUTH_USER_MODEL
import datetime,jwt
from django.contrib.auth import logout
from django.contrib.auth import login as django_login 
from django.contrib.sites.shortcuts import get_current_site
from django.template.loader import render_to_string
from django.utils.http import urlsafe_base64_encode,urlsafe_base64_decode
from django.utils.encoding import force_bytes
from django.contrib.auth.tokens import default_token_generator
from django.core.mail import EmailMessage
from django.contrib.auth.decorators import login_required
from django.core.exceptions import ObjectDoesNotExist
# Create your views here.
    

class RegisterView(APIView):
    def post(self,request):
        serializer=AccountSerializers(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        
        # User Activation
        current_site=get_current_site(request)
        mail_subject='Please activate your account'
        message=render_to_string('account_verification_email.html',
                                {'user':user.username,
                                'domain':current_site,
                                'uid':urlsafe_base64_encode(force_bytes(user.pk)),
                                'token':default_token_generator.make_token(user),})
        to_email=user.email
        
        send_email=EmailMessage(mail_subject,message,to=[to_email])
        send_email.send()
        return redirect('/accounts/login/?command=verification&email='+user.email)


   

class LoginView(APIView):
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')

        try:
            user = Account.objects.get(email=email)
        except Account.DoesNotExist:
            raise AuthenticationFailed("User Not Found")

        if not user.check_password(password):
            raise AuthenticationFailed("Incorrect password!")

        # Use Django's login method to log in the user
        django_login(request, user)

        # Generate JWT token (as you did before)
        payload = {
            'id': user.id,
            'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=60),
            'iat': datetime.datetime.utcnow()
        }
        token = jwt.encode(payload, 'secret', algorithm='HS256')

        response = Response()
        response.set_cookie(key='jwt', value=token, httponly=True)
        return response



def volunteer_registration(APIView):
    def post(self,request):
        first_name=request.data.get('first_name')
        last_name=request.data.get('last_name')
        email=request.data.get('email')
        phone_number=request.data.get('phone_number')

        return Response("Submitted")

    


@login_required(login_url='accounts:login')
def user_logout(request):
   logout(request)
   return redirect('accounts:login')

def activate(request,uidb64,token):
   try:
      uid=urlsafe_base64_decode(uidb64).decode()
      user=Account._default_manager.get(pk=uid)
   except(TypeError,ValueError,OverflowError,Account.DoesNotExist):
      user=None
   if user is not None and default_token_generator.check_token(user,token):
      user.is_active=True
      user.save()
      return redirect('accounts:login')
   else:
      return redirect('accounts:sign-up')


class Forget_Password(APIView):
    def post(self, request):
        email = request.data.get('email')
        print(email)
        try:
            user=Account.objects.get(email__exact=email)

            #reset password mail
            current_site=get_current_site(request)
            mail_subject='Reset Your Password'
            message=render_to_string('mail_templates/reset_password.html',
                                    {'user':user,
                                        'domain':current_site,
                                        'uid':urlsafe_base64_encode(force_bytes(user.pk)),
                                        'token':default_token_generator.make_token(user),})
            to_email=email
            send_email=EmailMessage(mail_subject,message,to=[to_email])
            send_email.send()
            return redirect('accounts:login')

        except ObjectDoesNotExist:
            return redirect("accounts:forget_password")
        

def reset_password_validate(request,uidb64,token):
   try:
      uid=urlsafe_base64_decode(uidb64).decode()
      user=Account._default_manager.get(pk=uid)
   except(TypeError,ValueError,OverflowError,Account.DoesNotExist):
      user=None
   if user is not None and default_token_generator.check_token(user,token):
      request.session['uid']=uid
      return redirect('accounts:resetPassword')
   else:
      return redirect('accounts:login')

class ResetPassword(APIView):
    def post(self,request):
        password=request.data.get('password')
        confirm_password=request.data.get('confirm_password')

        if password == confirm_password:
            uid=request.session.get('uid')
            user=Account.objects.get(pk=uid)
            user.set_password(password)
            user.save()
            return redirect('accounts:login')
        else:
            return redirect('accounts:resetPassword')



    