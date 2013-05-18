WebFontConfig = {
google: { families: [ 'Caudex::latin', 'Josefin+Sans::latin', 'Quando::latin', 'Molengo::latin', 'Metrophobic::latin', 'Marvel::latin', 'Pontano+Sans::latin', 'Quattrocento::latin', 'Quattrocento+Sans::latin', 'Fjord+One::latin' ] }
};
(function() {
var wf = document.createElement('script');
wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
  '://ajax.googleapis.com/ajax/libs/webfont/1.4.2/webfont.js';
wf.type = 'text/javascript';
wf.async = 'true';
var s = document.getElementsByTagName('script')[0];
s.parentNode.insertBefore(wf, s);
})();