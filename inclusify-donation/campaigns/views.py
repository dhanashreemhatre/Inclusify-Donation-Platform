from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Program, Donation, Volunteer, ProgramDetail, DonationDetail
from .serializers import ProgramSerializer, DonationSerializer, VolunteerSerializer, ProgramDetailSerializer, DonationDetailSerializer


@api_view(['GET'])
def program_list_api(request):
    programs = Program.objects.all()
    program_data = []

    for program in programs:
        try:
            program_detail = ProgramDetail.objects.get(program=program)
            serializer = ProgramDetailSerializer(program_detail)
            program_data.append({
                'program': ProgramSerializer(program).data,
                'program_detail': serializer.data,
            })
        except ProgramDetail.DoesNotExist:
            # Handle the case where ProgramDetail does not exist for a program
            program_data.append({
                'program': ProgramSerializer(program).data,
                'program_detail': None,
            })

    return Response(program_data)

@api_view(['POST'])
def donation_create_api(request, program_id):
    program = Program.objects.get(pk=program_id)
    serializer = DonationSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save(program=program)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def volunteer_register_api(request, program_id):
    try:
        program = Program.objects.get(pk=program_id)
    except Program.DoesNotExist:
        return Response({'error': 'Program not found'}, status=status.HTTP_404_NOT_FOUND)

    serializer = VolunteerSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save(program=program)
        response_data = {
            'volunteer_info': serializer.data,
            'program_name': program.name,
        }
        return Response(response_data, status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def program_detail_api(request, program_id):
    try:
        program = Program.objects.get(pk=program_id)
        program_detail = ProgramDetail.objects.get(program=program)
        program_serializer = ProgramSerializer(program)
        program_detail_serializer = ProgramDetailSerializer(program_detail)
        response_data = {
            'program': program_serializer.data,
            'program_detail': program_detail_serializer.data,
        }
        return Response(response_data)
    except Program.DoesNotExist or ProgramDetail.DoesNotExist:
        return Response({'error': 'Program not found'}, status=status.HTTP_404_NOT_FOUND)

@api_view(['GET'])
def donation_detail_api(request, donation_id):
    donation = Donation.objects.get(pk=donation_id)
    donation_detail = DonationDetail.objects.get(donation=donation)
    serializer = DonationDetailSerializer(donation_detail)
    return Response(serializer.data)