from django.urls import path
from . import views

urlpatterns = [
    path('', views.ins),
    path('load/', views.LoaderListView.as_view(), name='loader-list'),
    path('searchevents/', views.LoaderListView.as_view(), name='searchevents'),
    path('addevent/', views.addevent, name='addevent'),
    path('booking/', views.booking, name='booking'),
]
