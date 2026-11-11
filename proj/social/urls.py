from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('components-alerts', views.comp_alert, name='comp_alert'),
    path('users-profile',views.usr_profile, name='usr_profile'),
    path('social-accounts/', views.social_accounts, name='social_accounts'),
    path('posts/', views.posts, name='posts'),
    path('schedule/', views.schedule, name='schedule'),
]
