import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: '#000', color: '#fff', padding: '1rem' }}>
      {/* Routes */}
      <div>
        <a href="/">Home</a>
        <a href="/">Terms and Conditions</a>
        <a href="/">Privacy Policy</a>
        <a href="/">Collection Statement</a>
        <a href="/">Help</a>
        <a href="/">Manage Account</a>
      </div>
      {/* Copyright */}
      <div>
        <p>Copyright 2016 DEMO Streaming. All Rights Reserved.</p>
      </div>
      {/* External Links */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '1rem',
        }}
      >
        {/* Social Media */}
        <div style={{ display: 'flex', gap: '1rem' }}>
          {/* Facebook */}
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <img
              src="/public/assets/social/facebook-white.svg"
              alt="Facebook"
              style={{ height: '24px' }}
            />
          </a>
          {/* Twitter */}
          <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
            <img
              src="/public/assets/social/twitter-white.svg"
              alt="Twitter"
              style={{ height: '24px' }}
            />
          </a>
          {/* Instagram */}
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <img
              src="/public/assets/social/instagram-white.svg"
              alt="Instagram"
              style={{ height: '24px' }}
            />
          </a>
        </div>

        {/* App Stores */}
        <div style={{ display: 'flex', gap: '1rem' }}>
          {/* Apple */}
          <a href="https://apps.apple.com/" target="_blank" rel="noreferrer">
            <img src="/public/assets/store/app-store.svg" alt="" />
          </a>
          {/* Google */}
          <a href="https://play.google.com/" target="_blank" rel="noreferrer">
            <img src="/public/assets/store/play-store.svg" alt="" />
          </a>
          {/* Microsoft */}
          <a
            href="https://www.microsoft.com/store"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/public/assets/store/windows-store.svg" alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
