# Generated by Django 3.2.6 on 2021-08-09 10:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('review', '0004_alter_review_of_ongsimee_withwhom'),
    ]

    operations = [
        migrations.AlterField(
            model_name='review_of_ongsimee',
            name='opinion',
            field=models.TextField(blank=True, null=True),
        ),
    ]
