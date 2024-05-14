import React from 'react';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#f0f0f0', padding: '20px', marginTop: 'auto', textAlign: 'center' }}>
      <p>&copy; {new Date().getFullYear()} copyright</p>
      <p>
        Powered by{' '}
        <a href="https://github.com/yourusername/your-repo" target="_blank" rel="noopener noreferrer">
          7amZa
        </a>
      </p>
    </footer>
  );
}

export default Footer;
