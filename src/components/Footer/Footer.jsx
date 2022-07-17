import React from 'react';
import './Footer.css';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

function Footer() {
  return <footer className='bg-orange-400 drop-shadow-lg mb-6 text-white w-screen'>&copy; John Maras -- Prime Academy</footer>;
}

export default Footer;
