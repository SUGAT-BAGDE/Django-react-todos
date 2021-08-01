from django.urls import path
from .views import *

urlpatterns = [
    path('', index, name="index"),
    path('addtodo', contact, name="contact"),
    path('gettodo/<int:id>', getcontact, name="getcontact"),
    path('edittodo/<int:id>', edittodo, name="edittodo"),
    path('deletetodo/<int:id>', delete, name="deletetodo"),
    path('allTodos', allTodos, name="alltodos"),
]