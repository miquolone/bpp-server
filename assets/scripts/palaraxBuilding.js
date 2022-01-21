globalThis.addEventListener( "load", (event) => {
  let list = document.querySelectorAll( '.star' );
  list.forEach( node => {
    new simpleParallax( node, {
      delay: Math.random() * 3,
      orientation: 'down',
      scale: Math.random() * 50,
      overflow: true
    } );
  } );
  document.querySelectorAll( [ '.wallUpper', '.wallUnder' ] ).forEach( wall => {
    setTimeout( () => {
      wall.classList.add( 'hide' );
    }, Math.LOG10E * Math.random() * 30 * 80 );
  } );
} );
