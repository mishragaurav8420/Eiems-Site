from http import HTTPStatus

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from rest_framework import status

class signUpApi:

    def user_signin(request):
        username = request.data.get('username')
        password = request.data.get('password')

        if not username or not password:
            return Response({"error": "Please provide both username and password"},
                            status=status.HTTP_400_BAD_REQUEST)

        user = authenticate(username=username, password=password)

        if user is not None:
            token, created = Token.objects.get_or_create(user=user)
            return Response({"token": token.key}, status=status.HTTP_200_OK)
        else:
            return Response({"error": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)

    def user_signup(request):
        username = request.data.get('username')
        password = request.data.get('password')
        email = request.data.get('email')
        if not username or not password or not email:
            return Response({"error":"Please provide user name ,email and password",status=status.HTTP_400_BAD_REQUEST})
        if User.object.filter(username=username).exist():
            return Response({'error':'User name already exist',status=status.HTTP_400_BAD_REQUEST})
        if User.object.filter(email = email).exist():
            return Response({'error':"Email already exist",status=status.HTTP_400_BAD_REQUEST})
        user = User.objects.create_user(username=username, password=password, email=email)
        token, created = Token.objects.get_or_create(user=user)
        return Response({"message": "User created successfully", "token": token.key},
                        status=status.HTTP_201_CREATED)


