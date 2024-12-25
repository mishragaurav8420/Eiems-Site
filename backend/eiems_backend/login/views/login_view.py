from rest_framework.decorators import api_view

from ..service.login_service import signUpApi


@api_view(['POST'])
def user_login(request):
    return signUpApi.user_signin_service(request)

@api_view(['POST'])
def user_signup(request):
    return signUpApi.user_signup_service(request)