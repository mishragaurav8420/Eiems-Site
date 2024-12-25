from eiems_backend.login.service.login_service import signUpApi


def login_view(request):
    return signUpApi.user_signin(request)

def signup_view(request):
    return signUpApi.user_signup(request)