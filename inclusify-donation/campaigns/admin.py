from django.contrib import admin
from .models import Program,ProgramDetail,Volunteer,Donation,DonationDetail

# Register your models here.
class ProgramAdmin(admin.ModelAdmin):
    list_display=('name','expected_amount')

admin.site.register(Program,ProgramAdmin)
admin.site.register(ProgramDetail)
admin.site.register(Volunteer)
admin.site.register(Donation)
admin.site.register(DonationDetail)


