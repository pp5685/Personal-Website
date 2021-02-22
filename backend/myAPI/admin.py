from django.contrib import admin

# Register your models here.
from .models import Job, Comment, Hobby

admin.site.register(Job)
admin.site.register(Comment)
admin.site.register(Hobby)
