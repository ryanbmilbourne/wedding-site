<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>{% block title %}HayleyandRyan.weddings{% endblock %}</title>
  {% block head %}
  {% endblock %}
  <link rel="stylesheet" href="css/bootstrap.min.css">
  <link rel="stylesheet" href="css/bootstrap-responsive.min.css">
  <link rel="stylesheet" href="css/main.css">
</head>
<body>
  <div class="container">
    <div class="hero-unit jumbotron text-center font-hidden"><h4>we're getting married, er...managed</h4>
      <div class="row-fluid text-center">
        <div class="span12">
          <form class="form-horizontal" id="manage" action="/manager" method="post">
            <h5>Registry Items</h5>
              <table id="registry-manager" class="table table-striped">
                <tr>
                  <th>Item</th><th>Description</th><th>Price</th><th>Image</th><th>Upload new/replacement image</th><th>Delete</th>
                </tr>
                {% for item in items %}
                  <tr class="editable" data-id="{{item._id}}">
                    <td>{{ item.name }}</td>
                    <td>{{ item.desc }}</td>
                    <td>${{ item.price }}</td>
                    <td class="img">{% if item.img.src %}<img src="{{ item.img.src }}" style="width:100px;" title="{{ item.img.title }}"><br><input type="button" class="btn btn-warning" data-id="{{item._id}}" name="delete-image" value="Delete Image" />{% else %}No Image{% endif %}</td>
                    <td><div class="fileDrop" data-id="{{item._id}}"></div></td>
                    <td><input type="button" class="btn" name="Delete" data-id="{{item._id}}" value="Delete" /></td>
                  </tr>
                {% endfor %}
              </table>
              <input class="btn" type="button" value="New" />
              <input class="btn" type="submit" value="Save" />
              <hr>
              <h5>Photo Manager</h5>
              <table id="photo-manager" class="table table-striped">
                <tr>
                  <th>Image</th><th>Category</th><th>Title</th><th>Subtitle</th><th>Path</th><th>Public Path</th><th>Display Order</th><th>Included</th>
                </tr>
                {% for img in imgs %}
                <tr class="editable" data-id="{{ img._id }}">
                  <td><img src="{{img.thmbsrc}}"></td>
                  <td>{{img.category}}</td>
                  <td>{{img.title}}</td>
                  <td>{{img.subtitle}}</td>
                  <td>{{img.location}}</td>
                  <td>{{img.src}}</td>
                  <td>{{img.order}}</td>
                  <td><input type="checkbox"{% if img.shown %} checked="checked"{% endif %} /></td>
                </tr>
                {% endfor %}
              </table>
              <div id="newimg">upload new image: <span class="fileDrop" data-id="{{item._id}}"></span></div>
            </form>
            <div class="alert alert-success {{thanksdiv}}">{{thanks}}</div>
            <div class="alert alert-error {{errordiv}}">{{error}}</div>
            <br><br>
          </div>
        </div>
      </div>
    </div>
    <script data-main="js/app-manager.js" src="components/requirejs/require.js"></script>
</body>
</html>
