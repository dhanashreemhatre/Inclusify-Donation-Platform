from django.urls import path
from . import views

app_name="campaigns"

urlpatterns = [
    path('api/programs/', views.program_list_api, name='program_list_api'),
    path('api/donate/<int:program_id>/', views.donation_create_api, name='donate_api'),
    path('api/volunteer/<int:program_id>/', views.volunteer_register_api, name='volunteer_api'),
    path('api/program-detail/<int:program_id>/', views.program_detail_api, name='program_detail_api'),
    path('api/donation-detail/<int:donation_id>/', views.donation_detail_api, name='donation_detail_api'),

]
