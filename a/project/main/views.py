from django.shortcuts import render
# from .models import Post
# 왜있몰
# from django.utils import timezone
# Create your views here.

def main(request):
    return render(request, 'index.html')

def seoul(request):
    return render(request, './서울/서울.html')

def gg(request):
    return render(request, './경기/경기.html')

def gw(request):
    return render(request, './강원/강원.html')

def gb(request):
    return render(request, './경북/경북.html')

def gn(request):
    return render(request, './경남/경남.html')

def cb(request):
    return render(request, './충북/충북.html')

def cn(request):
    return render(request, './충남/충남.html')

def jb(request):
    return render(request, './전북/전북.html')

def jn(request):
    return render(request, './전남/전남.html')

def jj(request):
    return render(request, './제주/제주.html')



def seoul_p(request):
    return render(request, './서울/서울 명소.html')

def seoul_e(request):
    return render(request, './서울/서울 맛집.html')

def gw_p(request):
    return render(request, './강원/강원 명소.html')

def gw_e(request):
    return render(request, './강원/강원 맛집.html')

def gg_p(request):
    return render(request, './경기/경기 명소.html')

def gg_e(request):
    return render(request, './경기/경기 맛집.html')

def gn_p(request):
    return render(request, './경남/경남 명소.html')

def gn_e(request):
    return render(request, './경남/경남 맛집.html')

def gb_p(request):
    return render(request, './경북/경북 명소.html')

def gb_e(request):
    return render(request, './경북/경북 맛집.html')

def jn_p(request):
    return render(request, './전남/전남 명소.html')

def jn_e(request):
    return render(request, './전남/전남 맛집.html')

def jb_p(request):
    return render(request, './전북/전북 명소.html')

def jb_e(request):
    return render(request, './전북/전북 맛집.html')

def jj_p(request):
    return render(request, './제주/제주 명소.html')

def jj_e(request):
    return render(request, './제주/제주 맛집.html')

def cn_p(request):
    return render(request, './충남/충남 명소.html')

def cn_e(request):
    return render(request, './충남/충남 맛집.html')

def cb_p(request):
    return render(request, './충북/충북 명소.html')

def cb_e(request):
    return render(request, './충북/충북 맛집.html')

def login(request):
    return render(request, './로그인, 회원가입/로그인.html')

def signup(request):
    return render(request, './로그인, 회원가입/회원가입.html')