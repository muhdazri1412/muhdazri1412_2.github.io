$( function move() {
  $( "#accordion" ).accordion();
} );

$( function() {
  $( "#button" ).on( "click", function() {
    $( ".newClass" ).switchClass( "newClass", "anotherNewClass", 1000 );
    $( ".anotherNewClass" ).switchClass( "anotherNewClass", "newClass", 1000 );
  });
} );
