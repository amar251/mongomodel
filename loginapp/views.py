from django.shortcuts import render,redirect
from django.http import HttpResponse
# Create your views here.
from django.template import RequestContext

from .models import MyModel


def index(request):
    return render(request,'loginapp/index.html')


def login(request):
    return render(request,'loginapp/login.html')


def create_user(request):
    if request.method=='POST':
        name=request.POST.get('name')
        email = request.POST.get('email')
        password = request.POST.get('password')
        down_letter_array = request.POST.get('down_letter_array')
        press_time_array = request.POST.get('press_time_array')
        down_time = request.POST.get('down_time')
        up_time = request.POST.get('up_time')
        up_letter_array = request.POST.get('up_letter_array')


        ref=MyModel.objects.create(
            name=name,
            email=email,
            password=password,
            down_letter_array=down_letter_array,
            press_time_array = press_time_array,
            down_time = down_time,
            up_time = up_time,
            up_letter_array = up_letter_array

        )
        ref.save()
        return HttpResponse('')

