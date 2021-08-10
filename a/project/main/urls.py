from django.urls import path, include
from . import views
from main import views



urlpatterns = [
    path('', views.main),
    path('/seoul', views.seoul ),
    # path('/경기', views.gg ),
    # path('main/', include('main_patterns')),
 
    # path('post/<int:pk>/', views.local_detail, name='local_detail'),

]