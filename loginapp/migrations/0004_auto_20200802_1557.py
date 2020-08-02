# Generated by Django 3.0.8 on 2020-08-02 10:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('loginapp', '0003_loginmodel'),
    ]

    operations = [
        migrations.CreateModel(
            name='mlModel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(max_length=254)),
                ('token', models.IntegerField()),
            ],
        ),
        migrations.RemoveField(
            model_name='loginmodel',
            name='token',
        ),
    ]
