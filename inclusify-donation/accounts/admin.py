from django.contrib import admin
from .models import Account,UserProfile

# Register your models here.
admin.site.register(Account)
admin.site.register(UserProfile)