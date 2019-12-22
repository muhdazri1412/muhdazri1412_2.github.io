function reloadConverter(){
var c = document.getElementById('cConverter');
if (c) c.parentNode.removeChild(c);
c = document.createElement('script');
c.id='cConverter';
c.src = 'https://freecurrencyrates.com/en/widget-vertical-editable?iso=USD-EUR-XUL&df=4&p=Converter&v=fits&source=fcr&width=300&width_title=100&firstrowvalue=1&thm=A6C9E2,FCFDFD,4297D7,5C9CCC,FFFFFF,C5DBEC,FCFDFD,2E6E9E,000000&title=Currency%20Converter&tzo=-700';
var div = document.getElementById('gcw_mainConverter');
div.parentNode.insertBefore(c, div);}

$( function color() {
  var state = true;
  $( "#button" ).on( "click", function() {
    if ( state ) {
      $( "#effect" ).animate({
        backgroundColor: "#CBE3FB",
        color: "#000000",
        width: 500
      }, 1000 );
    } else {
      $( "#effect" ).animate({
        backgroundColor: "#fff",
        color: "#000",
        width: 240
      }, 1000 );
    }
    state = !state;
  });
} );

 reloadConverter();
