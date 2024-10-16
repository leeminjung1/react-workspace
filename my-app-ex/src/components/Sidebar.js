import React from "react";

function Sidebar(){
    return (
        <div style={sidebarStyle}>
          <h2 style={titleStyle}>Categories</h2>
          <ul style={ulStyle}>
            <li style={liStyle}>
              <a href="#" style={linkStyle}>Category 1</a>
            </li>
            <li style={liStyle}>
              <a href="#" style={linkStyle}>Category 2</a>
            </li>
            <li style={liStyle}>
              <a href="#" style={linkStyle}>Category 3</a>
            </li>
            <li style={liStyle}>
              <a href="#" style={linkStyle}>Category 4</a>
            </li>
          </ul>
        </div>
      );
}


const sidebarStyle = {
    width: '250px',
    height: '100vh',
    backgroundColor: '#f4f4f4',
    padding: '20px',
    boxSizing: 'border-box',
    position: 'fixed',
    top: '40px', // 헤더 아래에 위치하도록 조정
    left: 0,
  };
  
  const titleStyle = {
    marginBottom: '20px',
    fontSize: '22px',
    fontWeight: 'bold',
  };
  
  const ulStyle = {
    listStyleType: 'none',
    padding: 0,
  };
  
  const liStyle = {
    marginBottom: '15px',
  };
  
  const linkStyle = {
    textDecoration: 'none',
    color: '#333',
    fontSize: '18px',
  };
  
export default Sidebar;