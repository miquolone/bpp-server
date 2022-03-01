import { render, screen } from '@testing-library/react';

import App from './App';

window.particleInit = jest.fn();

test( 'intersectionObserver has called', () => {

  const observe = jest.fn();
  window.IntersectionObserver = jest.fn( () => ( {
    observe
  } ) );

  render( <App/> );
  expect( observe ).toHaveBeenCalled();
} );
