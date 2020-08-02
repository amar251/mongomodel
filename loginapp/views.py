from django.shortcuts import render,redirect
import collections
from django.contrib import messages
from django.http import HttpResponse
# Create your views here.
from django.template import RequestContext
import joblib
from .models import MyModel
import pandas as pd
dict = collections.defaultdict(lambda : 'Key Not found')
dict1 = collections.defaultdict(lambda : 'Key Not found')
classifier_model=joblib.load('./model/net.joblib')
train_mode=joblib.load('./model/train_mode.joblib')
def string_parser(s):
    nums = [float(n) for n in s.split(',')]
    return nums
def dd_time(s):
    d=string_parser(s)
    s1 = list((d[i + 1] - d[i]) / 1000 for i in range(len(d) - 1))
    return s1
def hold_period(hold):
    d = string_parser(hold)
    return d
def release_time(keyup):
    d = string_parser(keyup)
    return d
def press_time(keyup,hold):
    d=list(set(release_time(keyup))-set(hold_period(hold)))
    return d

def input_array(keyup,hold):
    s=[]
    h=hold_period(hold)
    p=release_time(keyup)
    r=release_time(keyup)
    for i in range(len(release_time(keyup))-1):
        s.extend([h[i],p[i+1]-p[i],p[i+1]-r[i]])
    s.append(h[len(h)-1])
    return s


features=['H.period', 'DD.period.t', 'UD.period.t', 'H.t', 'DD.t.i', 'UD.t.i', 'H.i', 'DD.i.e', 'UD.i.e', 'H.e', 'DD.e.five', 'UD.e.five',
 'H.five', 'DD.five.Shift.r', 'UD.five.Shift.r', 'H.Shift.r', 'DD.Shift.r.o', 'UD.Shift.r.o', 'H.o', 'DD.o.a', 'UD.o.a', 'H.a', 'DD.a.n', 'UD.a.n',
 'H.n', 'DD.n.l', 'UD.n.l', 'H.l', 'DD.l.Return', 'UD.l.Return', 'H.Return']


def input_dict(keyup,hold):

    if len(input_array(keyup,hold))>=len(features):
         result = {features[i]: input_array(keyup,hold)[i] for i in range(len(features))}
         return result
    else:
        result1 = {features[i]: input_array(keyup, hold)[i] for i in range(len(input_array(keyup,hold)))}
        result2={features[i]: train_mode[features[i]] for i in range(len(input_array(keyup,hold)),len(features))}
        result={**result1, **result2}
        return result







def preprocessing(test1):
    # JSON to pandas DataFrame
    test1 = pd.DataFrame(test1, index=[0])
    return test1



def index(request):
    context={'a':'hello'}
    return render(request,'loginapp/index.html',context)


def login(request):
    if request.method=='POST':
        press_time_array = request.POST.get('press_time_array')
        up_time = request.POST.get('up_time')
        email = request.POST.get('email')
        test_data = preprocessing(input_dict(up_time, press_time_array))
        login_prediction = classifier_model.predict(test_data)[0]

        print(dict[email])
        if(dict[email]!='Key Not found' and dict1[email]!='Key Not found'):
            if (dict[email]==login_prediction):
                context = {'prediction': dict[email]}
                messages.info(request, 'Your are now logged in!')
                return render(request,'loginapp/login.html',context)
            else:
                messages.info(request, 'Incorrect username or password entered!')
                return render(request, 'loginapp/login.html')
        else:
            messages.info(request, 'Your have not been registered!')
            return render(request, 'loginapp/login.html')
            #return render_to_response('loginapp/login.html', message='Your have not been registered!')
    else:
        return render(request, 'loginapp/login.html')


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
        test_data = preprocessing(input_dict(up_time, press_time_array))
        prediction = classifier_model.predict(test_data)[0]
        dict[email]=prediction
        dict1[email] = prediction
        context = {'prediction': prediction}
        print(prediction)
        print(dict)
        return render(request,'loginapp/login.html',context)

