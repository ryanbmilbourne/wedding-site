<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>{% block title %}StephanieAndGreg.us{% endblock %}</title>
  {% block head %}
  {% endblock %}
  <link rel="stylesheet" href="css/bootstrap.min.css">
  <link rel="stylesheet" href="css/bootstrap-responsive.min.css">
  <link rel="stylesheet" href="css/main.css">
</head>
<body>
  <div id="loading" style="z-index:9999;opacity:0.95;width:100%;height:100%;position:absolute;top:0;left:0;background-color:#6FC7B9;"></div>
<div class="container">
    <div class="masthead">
    </div>
    <div class="hero-unit jumbotron text-center font-hidden"><a href="/"><h1>we're getting married</h1></a>
        <h2>Stephanie &amp; Greg</h2><img src="../images/dots.png"><br>
        <h3>How many spoons do two people need, anyways?</h3>
        <h4 class="muted">all we really need is each other...</h4>
        <span class="muted">in lieu of traditional wedding gifts, we ask that you help us celebrate in these ways:</span>
        <div class="row-fluid text-center">
            <div class="span12">
                <div class="row">
                    <div class="span6 offset3">
                        <span class="muted">make a gift in any amount to the happy couple:</span>
                        <br>
                        <div class="input-prepend">
                            <span class="add-on muted">$</span>
                            <input class="span8" type="text" placeholder="100"/>
                        </div>
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="span6 offset3">
                    B.Y.O.T.<br>
                    (bring your own toy)<br>
                    <p class="muted">
                        If you would like to bring a gift we ask that you bring a new, 
                        unwrapped toy to donate to the <a href="http://www.choc.org/">Children&apos;s Hospital of Orange County</a>.
                        CHOC relies on toy donations to lift the spirits of children with life-threatening illnesses.
                    </p>
                    <!--h3>Click for toy wish list.</h3-->
                    <span class="muted">Thank you for your generosity!</span>
                    </div>
                </div>
            </div>
            <div class="span8 offset2"><img src="../images/footer-image.png"></div>
            <div class="span2"></div>
        </div>
        <br><br>
        <div class="muted text-center">A Future Mr. &amp; Mrs. Cochard Creation &copy; 2013 all rights reserved</div>
    </div>
</div>
<script data-main="js/app.js" src="components/requirejs/require.js"></script>
</body>
</html>
