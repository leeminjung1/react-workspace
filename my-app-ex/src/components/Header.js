import React from "react";

function Header(){
    return (
        <nav style={navStyle}>
          <ul style={ulStyle}>
            <li style={liStyle}>
              <a href="#" style={linkStyle}>Home</a>
            </li>
            <li style={liStyle}>
              <a href="#" style={linkStyle}>About</a>
            </li>
            <li style={liStyle}>
              <a href="#" style={linkStyle}>Services</a>
            </li>
            <li style={liStyle}>
              <a href="#" style={linkStyle}>Contact</a>
            </li>
          </ul>
        </nav>
      );
}

// 스타일링
const navStyle = {
    background: '#333',
    padding: '10px',
    color: 'white',
    width: '100%',
    position: 'fixed', // 상단 고정
    top: 0,
    zIndex: 1000, // 사이드바 위에 표시되도록 함
  };
  
  const ulStyle = {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'space-around',
  };
  
  const liStyle = {
    marginRight: '20px',
  };
  
  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
  };
  
export default Header;
