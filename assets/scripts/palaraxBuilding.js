globalThis.addEventListener( "load", function () {
  console.log( 222 );
} );

globalThis.addEventListener( "load", (event) => {
  document.querySelector( '#overWallCover' ).classList.add( 'hide5s' );
  document.querySelector( '#overWallCover img' ).classList.add( 'hide5s' );

  const footer = document.querySelector( 'footer' );
  [ ...new Array( Math.floor( Math.PI * 10 ) ) ].map( _ => {
    const star = document.createElement( 'img' );
    star.src = "/svg/star001w.svg";
    star.classList.add( 'star' );
    footer.append( star );
  } );

  let rand30 = Math.random() * 30;
  document.querySelectorAll( '.star' ).forEach( node => {
    new simpleParallax( node, {
      delay: rand30,
      orientation: [ 'down', 'up' ][ Math.round( Math.random( 1 ) ) ],
      scale: Math.random() * 520,
      overflow: true
    } );
  } );
  document.querySelectorAll( [ '.wallUpper', '.wallUnder' ] ).forEach( wall => {
    setTimeout( () => {
      wall.classList.add( 'hide' );
    }, Math.LOG10E * Math.random() * 30 * 10 );
  } );
} );
