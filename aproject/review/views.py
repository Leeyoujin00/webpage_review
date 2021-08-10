from django.shortcuts import redirect, render
from .models import *
# Create your views here.

def create_ongsimee(request):
    review = Review_of_Ongsimee()
    review.starpoint = request.GET.get('rating')
    review.price = request.GET.get('price')
    review.withwhom = request.GET.get('withwhom')
    review.opinion = request.GET.get('opinion')
    review.cdate = request.GET.get('date')
    review.save()

    return redirect('./강원/맛집/감자옹심이.html')
