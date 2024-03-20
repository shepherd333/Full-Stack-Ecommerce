// Footer.js
import React from 'react';

const Footer = () => {
  const styles = {
    footer: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '20px',
      backgroundColor: '#333',
      color: '#fff',
      flexDirection: 'column',
    },
    section: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '20px',
    },
    sectionTitle: {
      fontSize: '18px',
      marginBottom: '10px',
    },
    link: {
      color: '#fff',
      textDecoration: 'none',
      marginBottom: '5px',
    },
    copyright: {
      fontSize: '14px',
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.section}>
        <div>
          <div style={styles.sectionTitle}>Help</div>
          <a style={styles.link} href="/contact">Contact Us</a>
          <a style={styles.link} href="/faq">FAQ</a>
        </div>
        <div>
          <div style={styles.sectionTitle}>About</div>
          <a style={styles.link} href="/about">Our Story</a>
          <a style={styles.link} href="/careers">Careers</a>
        </div>
        <div>
          <div style={styles.sectionTitle}>Legal</div>
          <a style={styles.link} href="/privacy">Privacy Policy</a>
          <a style={styles.link} href="/terms">Terms of Use</a>
        </div>
      </div>
      <div style={styles.copyright}>
        &copy; {new Date().getFullYear()} My Store
      </div>
    </footer>
  );
};

export default Footer;