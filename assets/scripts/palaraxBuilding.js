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
} );
