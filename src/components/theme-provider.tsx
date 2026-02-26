"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

import os
import sys
from django.conf import settings

# ----------------------------
# DJANGO SETTINGS (INLINE)
# ----------------------------
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

settings.configure(
    DEBUG=True,
    SECRET_KEY='dev-secret-key',
    ROOT_URLCONF=__name__,
    ALLOWED_HOSTS=['*'],
    INSTALLED_APPS=[
        'django.contrib.contenttypes',
        'django.contrib.auth',
        'django.contrib.sessions',
        'django.contrib.messages',
        'django.contrib.staticfiles',
        __name__,  # This file acts as the app
    ],
    MIDDLEWARE=[
        'django.middleware.security.SecurityMiddleware',
        'django.contrib.sessions.middleware.SessionMiddleware',
        'django.middleware.common.CommonMiddleware',
        'django.middleware.csrf.CsrfViewMiddleware',
        'django.contrib.auth.middleware.AuthenticationMiddleware',
        'django.contrib.messages.middleware.MessageMiddleware',
    ],
    TEMPLATES=[
        {
            'BACKEND': 'django.template.backends.django.DjangoTemplates',
            'APP_DIRS': True,
        },
    ],
    DATABASES={
        'default': {
            'ENGINE': 'django.db.backends.sqlite3',
            'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
        }
    },
    TIME_ZONE='UTC',
    USE_TZ=True,
)

import django
django.setup()

# ----------------------------
# MODEL
# ----------------------------
from django.db import models

class Post(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()

    def __str__(self):
        return self.title


# ----------------------------
# VIEW
# ----------------------------
from django.http import HttpResponse
from django.shortcuts import redirect
from django import forms

class PostForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = ['title', 'content']


def index(request):
    if request.method == 'POST':
        form = PostForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('/')
    else:
        form = PostForm()

    posts = Post.objects.all()

    html = "<h1>Simple Blog</h1>"
    html += """
        <form method="post">
            {}
            <button type="submit">Add Post</button>
        </form>
        <hr>
    """.format(form.as_p())

    for post in posts:
        html += f"<h2>{post.title}</h2><p>{post.content}</p><hr>"

    return HttpResponse(html)


# ----------------------------
# URLS
# ----------------------------
from django.urls import path

urlpatterns = [
    path('', index),
]


# ----------------------------
# RUN SERVER
# ----------------------------
from django.core.management import execute_from_command_line

if __name__ == '__main__':
    execute_from_command_line(sys.argv)