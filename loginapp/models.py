from django.db import models


class MyModel(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField()
    password=models.CharField(max_length=200)
    down_letter_array= models.TextField()
    press_time_array= models.TextField()
    down_time= models.TextField()
    up_time= models.TextField()
    up_letter_array= models.TextField()

    def __str__(self):
        return self.email
class key_table(MyModel):
    key=models.IntegerField()

    def __str__(self):
        return str(self.email)
class re_password_key_table(MyModel):
    re_key=models.IntegerField()

    def __str__(self):
        return str(self.email)




