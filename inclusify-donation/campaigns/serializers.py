from rest_framework import serializers
from .models import Program, Donation, Volunteer,ProgramDetail,DonationDetail

class ProgramSerializer(serializers.ModelSerializer):
    class Meta:
        model = Program
        fields = '__all__'

class DonationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Donation
        fields = '__all__'

class VolunteerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Volunteer
        fields = '__all__'


class DonationDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = DonationDetail
        fields = '__all__'


class ProgramDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProgramDetail
        fields = '__all__'
