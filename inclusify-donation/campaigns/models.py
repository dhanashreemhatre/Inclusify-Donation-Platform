# donations/models.py
from django.db import models

class Program(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    expected_amount=models.DecimalField(max_digits=10, decimal_places=2)
    date = models.DateTimeField()

    def __str__(self):
        return self.name

class ProgramDetail(models.Model):
    program = models.OneToOneField(Program, on_delete=models.CASCADE)
    budget_breakdown = models.TextField()
    image=models.ImageField(upload_to="program-details")
    def __str__(self):
        return self.program.name


class Donation(models.Model):
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    program = models.ForeignKey(Program, on_delete=models.CASCADE)
    donor_name = models.CharField(max_length=255)
    email=models.EmailField(default="")
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.donor_name} - {self.program.name}'

class Volunteer(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    phone_number=models.CharField(max_length=20)
    program = models.ForeignKey(Program, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.name} - {self.program.name}'


class DonationDetail(models.Model):
    donation = models.OneToOneField(Donation, on_delete=models.CASCADE)
    usage_description = models.TextField()

    def __str__(self):
        return self.donation


