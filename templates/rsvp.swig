{% extends 'layout.html' %}
{% block title %}{% parent %}{% endblock %}
{% block head %}
  {% parent %}
{% endblock %}
{% block content %}
    <div class="span12">
      <iframe style="width:100%;height:500px;" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://maps.google.com/maps?f=q&source=s_q&hl=en&geocode=&q=Five%2BCrowns%2B3801%2BEast%2BCoast%2BHwy%2C%2BCorona%2Bdel%2BMar%2C%2BCA%2B92625&ie=UTF8&z=12&t=m&iwloc=addr&output=embed"></iframe><br>
      <small><a href="http://maps.google.com/maps?f=q&source=s_q&hl=en&geocode=&q=Five%2BCrowns%2B3801%2BEast%2BCoast%2BHwy%2C%2BCorona%2Bdel%2BMar%2C%2BCA%2B92625&ie=UTF8&z=12&t=m&iwloc=addr">View Larger Map</a></small>
    </div>

    <div class="alert alert-success {{thanksdiv}}">{{thanks}}</div>
    <div class="alert alert-error {{errordiv}}">{{error}}</div>


{% endblock %}
