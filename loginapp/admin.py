from django.contrib import admin
from .models import MyModel,key_table,re_password_key_table

# Register your models here.
admin.site.register(MyModel);
admin.site.register(key_table);
admin.site.register(re_password_key_table);


