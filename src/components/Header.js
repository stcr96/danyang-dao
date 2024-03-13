import React from 'react';
// import { ethers } from 'ethers'; 
import { useSDK, MetaMaskButton } from '@metamask/sdk-react-ui';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../assets/css/header.css';

function Header() {
  const { ready } = useSDK();

  if (!ready) {
    return <div>Loading...</div>
  }

  return (
    <header>
      <Navbar className='nav-container'>
        <Navbar.Brand as={Link} to="/">
          {/* 원하면 로고 넣을 수 있다. */}
          Danyang
        </Navbar.Brand>
        <Nav className="nav-menu">
          <Nav.Link as={Link} to="/danyang-dao">알아보기</Nav.Link>
          <Nav.Link as={Link} to="/nfts">다민되기</Nav.Link>
          <Nav.Link as={Link} to="https://open.kakao.com/o/gSjl1meg">참여하기</Nav.Link>
        </Nav>
        <MetaMaskButton theme={'light'} color='white'></MetaMaskButton>
      </Navbar>
    </header>
  );
}

export default Header;