from django.shortcuts import render
import requests
# Create your views here.
from rest_framework import viewsets
from rest_framework.views import APIView

from .serializers import JobSerializer, CommentSerializer, HobbySerializer, League_RankSerializer
from .models import Job, Comment, Hobby, League_Rank
from django.http import JsonResponse
from .services import get_rank
from django.http import Http404


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
class League_RankList(APIView):
    # queryset = League_Rank.objects.all().order_by('id')

    def get(self, request, format=None):
        players = get_rank("mapotofu42")
        # players = League_Rank.objects.all()
        serializer = League_RankSerializer(
            players, context={'request': request}, many=False)
        return JsonResponse(serializer.data)


# class League_RankDetail(APIView):
#     def get_object(self, pk):
#         try:
#             return League_Rank.objects.get(pk=pk)
#         except League_Rank.DoesNotExist:
#             raise Http404

#     def get(self, request, pk, format=None):
#         # player = get_rank("mapotofu42")
#         player = self.get_object(pk)
#         serializer = League_RankSerializer(player)
#         return Response(serializer.data)
