{% extends 'layout.html' %}
{% block title %}{% parent %}{% endblock %}
{% block head %}
  {% parent %}
  <!--link rel="stylesheet" href="css/custom.css"-->
{% endblock %}
{% block content %}

        <!--h2>Contact</h2>
        <strong>Five Crowns</strong> | <a href="https://maps.google.com/maps?ie=UTF8&amp;cid=15646201110297392647&amp;q=Five+Crowns&amp;iwloc=A&amp;gl=US&amp;hl=en">3801 East Coast Hwy,
    Corona del Mar, CA 92625</a-->
    <form class="form-horizontal" action="/send" method="post">
      <div class="control-group">
        <label class="control-label" for="inputName">Name:</label>
        <div class="controls">
          <input type="text" name="name" id="inputName" placeholder="Name"/>
        </div>
      </div>
      <div class="control-group">
        <label class="control-label" for="inputEmail">E-mail:</label>
        <div class="controls">
          <input type="text" name="email" id="inputEmail" placeholder="Email" />
        </div>
      </div>
      <div class="control-group">
        <label class="control-label" for="inputNote">Note:</label>
        <div class="controls">
          <textarea name="note" id="inputNote" rows="6"></textarea>
        </div>
      </div>
      <div class="control-group">
        <div class="controls">
          <input class="btn" type="submit" value="Send" />
        </div>
      </div>
    </form>

    <div class="alert alert-success {{thanksdiv}}">{{thanks}}</div>
    <div class="alert alert-error {{errordiv}}">{{error}}</div>


{% endblock %}
