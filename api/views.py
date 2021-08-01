from django.views.decorators.http import require_http_methods
from django.shortcuts import render, redirect, HttpResponse
from django.views.decorators.csrf import csrf_exempt
import json
from rest_framework.renderers import JSONRenderer
from django.http import JsonResponse
from .models import Todo
from .serilizers import TodoSer

# Create your views here.
def index(request):
    return render(request,"index.html")

@csrf_exempt
def contact(request):    
    try:
        print(request.headers.get('fromreact'))
    except Exception:
        return redirect('/')
    if request.method == "POST":
        data = json.loads(request.body)
        todo = Todo(title=data['title'], desc=data['desc'])
        todo.save()
        # sending response
        allTodosfound = list(Todo.objects.all())
        allTodos = [TodoSer(todo).data for todo in allTodosfound]
        data = JSONRenderer().render(allTodos)
        return HttpResponse(data, content_type="application/json")
    return JsonResponse({"status":"success"})

def getcontact(request, id):
    try:
        print(request.headers.get('fromreact'))
    except Exception:
        return redirect('/')    
    try:
        contact = Todo.objects.get(id=id)
        contact = TodoSer(contact)
        return JsonResponse(contact.data)
    except Exception:
        return JsonResponse({'message':"404 not found"})

def allTodos(request):
    try:
        print(request.headers.get('fromreact'))
    except Exception:
        return redirect('/')
    allTodosfound = list(Todo.objects.all())
    allTodos = [TodoSer(todo).data for todo in allTodosfound]
    data = JSONRenderer().render(allTodos)
    return HttpResponse(data, content_type="application/json")

def delete(request, id):
    try:
        print(request.headers.get('fromreact'))
    except Exception:
        return redirect('/')
    Todo.objects.get(id=id).delete()
    allTodosfound = list(Todo.objects.all())
    allTodos = [TodoSer(todo).data for todo in allTodosfound]
    data = JSONRenderer().render(allTodos)
    return HttpResponse(data, content_type="application/json")

@csrf_exempt
@require_http_methods(["POST"])
def edittodo(request, id):
    if request.method == "POST":
        data = json.loads(request.body)
        todo = Todo.objects.get(id=id)
        todo.title = data['title']
        todo.desc = data['desc']
        todo.save()
        return JsonResponse({"message":"success"})
    return JsonResponse({"message":"this"})