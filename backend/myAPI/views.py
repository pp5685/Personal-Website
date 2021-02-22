from django.shortcuts import render
import requests
# Create your views here.
from rest_framework import viewsets
from rest_framework.views import APIView

from .serializers import JobSerializer, CommentSerializer, HobbySerializer, League_RankSerializer
from .models import Job, Comment, Hobby, League_Rank
from rest_framework.response import Response
from .services import get_rank


class JobViewSet(viewsets.ModelViewSet):
    queryset = Job.objects.all().order_by('name')
    serializer_class = JobSerializer


class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all().order_by('name')
    serializer_class = CommentSerializer


class HobbyViewSet(viewsets.ModelViewSet):
    queryset = Hobby.objects.all().order_by('name')
    serializer_class = HobbySerializer


# how do i map it? and can i just enter names first then let it do all the queries?
class League_RankViewSet(viewsets.ModelViewSet):
    for i in (0, League_Rank.objects.all().__len__):
        get_rank(League_Rank.objects.all()[i].summoner_name)
    queryset = League_Rank.objects.all().order_by('name')
    serializer_class = HobbySerializer
