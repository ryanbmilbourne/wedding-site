{% extends 'layout.html' %}
{% block title %}{% parent %}{% endblock %}
{% block head %}
  {% parent %}
{% endblock %}
{% block content %}
<div class="carousel slide" id="myCarousel" data-interval="8000"><!-- hello swig world -->
    <div class="hover-container">
      <div class="carousel-inner">{% for img in photos %}
        <div class="item{% if loop.first %} active{% endif %}"><img src="{{ img.src }}"></div>{% endfor %}
      </div>
      <a class="carousel-control left" href="#myCarousel" data-slide="prev"><i class="icon-chevron-left icon-2"></i></a>
      <a class="carousel-control right" href="#myCarousel" data-slide="next"><i class="icon-chevron-right icon-2"></i></a>
    </div>
    <div style="display:inline-block"><i class="icon-chevron-left icon-1"></i></div>
    <ol class="carousel-indicators" style="display:inline-block">{% for img in photos %}
      <li data-target="#myCarousel" data-slide-to={{ loop.index -1 }} {% if loop.first %}class="active"{% endif %}><img src="{{ img.src }}" style="width:100px;"></li>{% endfor %}
    </ol>
    <div style="display:inline-block"><i class="icon-chevron-right icon-1"></i></div>
    <!-- div class="carousel-caption"><h4>{{ img.title }}</h4>{{ img.subtitle }}</div -->
    </div>
{% endblock %}
