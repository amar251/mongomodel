# Generated by Django 3.0.8 on 2020-07-30 22:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('loginapp', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='mymodel',
            name='down_letter_array',
            field=models.TextField(),
        ),
        migrations.AlterField(
            model_name='mymodel',
            name='down_time',
            field=models.TextField(),
        ),
        migrations.AlterField(
            model_name='mymodel',
            name='press_time_array',
            field=models.TextField(),
        ),
        migrations.AlterField(
            model_name='mymodel',
            name='up_letter_array',
            field=models.TextField(),
        ),
        migrations.AlterField(
            model_name='mymodel',
            name='up_time',
            field=models.TextField(),
        ),
    ]
