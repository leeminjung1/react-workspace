import React from 'react';

// Footer 컴포넌트
function Footer() {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={companyInfoStyle}>
          <h4 style={titleStyle}>My Company</h4>
          <p style={textStyle}>© 2024 My Company. All rights reserved.</p>
          <p style={textStyle}>1234 Address St, City, Country</p>
        </div>
        <div style={linksStyle}>
          <ul style={ulStyle}>
            <li style={liStyle}><a href="#" style={linkStyle}>Privacy Policy</a></li>
            <li style={liStyle}><a href="#" style={linkStyle}>Terms of Service</a></li>
            <li style={liStyle}><a href="#" style={linkStyle}>Contact Us</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

// 스타일링
const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '20px 0',
  position: 'relative',
  bottom: 0,
  width: '100%',
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 20px',
};

const companyInfoStyle = {
  flex: 1,
};

const titleStyle = {
  fontSize: '18px',
  marginBottom: '10px',
};

const textStyle = {
  margin: '5px 0',
};

const linksStyle = {
  flex: 1,
  textAlign: 'right',
};

const ulStyle = {
  listStyleType: 'none',
  margin: 0,
  padding: 0,
  display: 'flex',
  justifyContent: 'flex-end',
};

const liStyle = {
  marginLeft: '20px',
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
};

export default Footer;