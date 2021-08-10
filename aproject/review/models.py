from django.db import models

# Create your models here.

class Review_of_Ongsimee(models.Model):
    nickname = models.CharField(max_length=50, default="")
    starpoint = models.CharField(verbose_name="별점",max_length=10, default="",null=True,blank=True)
    price = models.IntegerField(default="",null=True,blank=True)
    withwhom = models.CharField(max_length=10, default="",null=True,blank=True)
    opinion = models.TextField(null=True,blank=True)
    cdate = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return [self.nickname ,self.starpoint, self.opinion]


