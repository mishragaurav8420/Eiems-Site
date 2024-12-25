from django.urls import path
from .views.login_view import user_signup, user_login

app_name = 'login'

urlpatterns = [
    path('signup/', user_signup),
    path('signin/', user_login),
]
