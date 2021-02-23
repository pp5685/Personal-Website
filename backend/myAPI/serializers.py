from rest_framework import serializers

from .models import Job, Comment, Hobby, League_Rank


class JobSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Job
        fields = '__all__'


class CommentSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'


class HobbySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Hobby
        fields = '__all__'


class League_RankSerializer(serializers.ModelSerializer):
    class Meta:
        model = League_Rank
        fields = '__all__'
