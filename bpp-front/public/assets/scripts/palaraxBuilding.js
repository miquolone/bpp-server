window.addEventListener( "load", (event) => {
  console.log( '[+] palarax init' );
  document.querySelector( '#overWallCover' )?.classList.add( 'hide' );
  document.querySelector( '#overWallCover img' )?.classList.add( 'hide1s' );

  const footer = document.querySelector( 'footer' );
  [ ...new Array( Math.floor( Math.PI * 10 ) ) ].map( _ => {
    const star = document.createElement( 'img' );
    star.src = "/assets/svg/star001w.svg";
    star.classList.add( 'star' );
    footer.append( star );
  } );

  console.log( '[+] palarax init2' );
  let rand30 = Math.random() * 30;
  document.querySelectorAll( '.star' ).forEach( node => {
    new simpleParallax( node, {
      delay: rand30,
      orientation: [ 'down', 'up' ][ Math.round( Math.random( 1 ) ) ],
      scale: Math.random() * 520,
      overflow: true
    } );
  } );
} );
