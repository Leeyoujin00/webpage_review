"""project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
# from project.main import views
# from project.manage import main
from django.contrib import admin
from django.urls import path
from django.urls import include 
import main.views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('main.urls')),
    path('서울/', main.views.seoul, name='서울'),
    path('경기/', main.views.gg, name='경기'),
    path('강원/', main.views.gw, name='강원'),
    path('경북/', main.views.gb, name='경북'),
    path('경남/', main.views.gn, name='경남'),
    path('충북/', main.views.cb, name='충북'),
    path('충남/', main.views.cn, name='충남'),
    path('전북/', main.views.jb, name='전북'),
    path('전남/', main.views.jn, name='전남'),
    path('제주/', main.views.jj, name='제주'),

    path('서울/명소/', main.views.seoul_p, name="서울명소"),
    path('서울/맛집/', main.views.seoul_e, name="서울맛집"),
    path('강원/명소/', main.views.gw_p, name="강원명소"),
    path('강원/맛집/', main.views.gw_e, name="강원맛집"),
    path('경기/명소/', main.views.gg_p, name="경기명소"),
    path('경기/맛집/', main.views.gg_e, name="경기맛집"),
    path('경남/명소/', main.views.gn_p, name="경남명소"),
    path('경남/맛집/', main.views.gn_e, name="경남맛집"),
    path('경북/명소/', main.views.gb_p, name="경북명소"),
    path('경북/맛집/', main.views.gb_e, name="경북맛집"),
    path('전남/명소/', main.views.jn_p, name="전남명소"),
    path('전남/맛집/', main.views.jn_e, name="전남맛집"),
    path('전북/명소/', main.views.jb_p, name="전북명소"),
    path('전북/맛집/', main.views.jb_e, name="전북맛집"),
    path('제주/명소/', main.views.jj_p, name="제주명소"),
    path('제주/맛집/', main.views.jj_e, name="제주맛집"),
    path('충남/명소/', main.views.cn_p, name="충남명소"),
    path('충남/맛집/', main.views.cn_e, name="충남맛집"),
    path('충북/명소/', main.views.cb_p, name="충북명소"),
    path('충북/맛집/', main.views.cb_e, name="충북맛집"),

    path('login/', main.views.login, name="로그인"),
    path('signup/', main.views.signup, name="회원가입"),
]
