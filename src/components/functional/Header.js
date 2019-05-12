import React from 'react';

const headerStyle = {
  background: 'blue',
  color: 'white',
  padding: '5px',
  textAlign: 'center'
}

function Header() {
  return (
    <header style={headerStyle}>
      <h1>My To Do List</h1>
    </header>
  ) 
}







export default Header;