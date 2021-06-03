import React, { useRef } from 'react';

function Footer() {
  const date = useRef(new Date().getFullYear());

  return (
    <footer>
      <p>&copy; {date.current} All rights reserved</p>
    </footer>
  );
}

export default Footer;
