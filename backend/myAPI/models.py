from django.db import models

# Create your models here.


class Job(models.Model):
    name = models.CharField(null=False, max_length=255)
    date = models.DateField(auto_now=False)
    description = models.CharField(null=False, max_length=255)

    def __str__(self):
        return self.job_name


class Comment(models.Model):
    commentor = models.CharField(null=False, max_length=255)
    email = models.EmailField()
    message = models.CharField(null=False, max_length=255)

    def __str__(self):
        return self.commentor


class Hobby(models.Model):
    name = models.CharField(null=False, max_length=255)

    def __str__(self):
        return self.name


class League_Rank(models.Model):
    summoner_name = models.CharField(max_length=100)
    summoner_id = models.CharField(max_length=255)
    tier = models.CharField(max_length=20)
    rank = models.CharField(max_length=2)
    wins = models.IntegerField()
    losses = models.IntegerField()
    league_points = models.IntegerField()
