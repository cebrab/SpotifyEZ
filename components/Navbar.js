/** @jsxImportSource @emotion/react */

import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { FaSearch } from 'react-icons/fa';
import { slide as Menu } from 'react-burger-menu';
import { useRouter } from 'next/router'

import colors from '../styles/colors';
import breakpoints from '../styles/breakpoints';
import Cookies from 'universal-cookie'

//Search bar for the Navbar
function SearchBar() {
    const router = useRouter()
    const [ searchString, setSearchString] = useState('');

    //Styles for the search bar
    const searchBarStyles = css`
        display: inline-block;
        border: 2px solid darkgray;
        height: 50px;
        margin: 15px;
        width: 50%;
        background-color: white;
        color: darkgray;

        form {
            height: 100%;
        }

        //Styles for the search text box
        form input {
            float: left;
            height: inherit;
            background-color: transparent;
            border: 0;
            font-size: 20px;
            outline: 0;
            width: calc(100% - 90px); //subtract the width of the button
            margin-left: 20px;
        }

        //Styles for the search icon button
        form button {
            border-radius: 50%;
            height: inherit;
            background-color: transparent;
            width: 50px;
            border: 0;
            outline: 0;
            font-size: 20px;
            float: right;
        }

        button:hover {
            cursor: pointer;
            color: ${colors.darkGreen};
        }

        @media (max-width: ${breakpoints.lg}px) and (min-width: ${breakpoints.sm}px) {
            width: 78%;
        }
    `;

<<<<<<< HEAD
    return (
        <div css={searchBarStyles} >
            <form onSubmit={(e) => {
                //TODO: Hook this up to send query string parameters to Search page
                router.push({
                  pathname: '/search',
                  query: searchString
                })
                setSearchString('');
                e.preventDefault();
            }}>
                <input
                    value={searchString}
                    placeholder='Search for a song or artist...'
                    onChange={(e) => setSearchString(e.target.value)}
                />
                <button type="submit">
                    <FaSearch />
                </button>
            </form>
        </div>
    )
=======
  return (
    <div css={searchBarStyles} >
      <form onSubmit={(e) => {
        //TODO: Hook this up to send query string parameters to Search page
        alert("Searched for: " + searchString);
        setSearchString('');
        e.preventDefault();
      }}>
        <input
          value={searchString}
          placeholder='Search for a song or artist...'
          onChange={(e) => setSearchString(e.target.value)}
        />
        <button type="submit">
          <FaSearch />
        </button>
      </form>
    </div>
  )
>>>>>>> f44d9082e6b36890b7cd9087ba4267b727aaa535
}
function Navbar() {
  const [showHamnav, setShowHamnav] = useState(false);

  //Styles for the entire navbar
  const navbarStyles = css`
        width: 100%;
        height: 80px;
        top: 0;
        left: 0;
        position: fixed;
        background-color: ${colors.black};
        border-style: solid;
        border-width: 1px;
        border-color: grey;
        border-radius: 4px;
    `;

  //Parent styles for all links on the Navbar
  const navItemStyles = css`
        padding-top: 25px;
        height: calc(100% - 25px); //subtract the padding;
        width: 8%;
        border-radius: 2px;
        font-weight: bold;
        font-size: 20px;
        text-align: center;
        color: floralwhite;
        text-decoration: none;
        float: left;

        :hover {
            cursor: pointer;
            color:  ${colors.darkGreen};
            background-color: ${colors.hoverBlack};
        }
    `;

  //Styles for the site title on the Navbar
  const siteTitleStyles = css`
        ${navItemStyles}

        width: 15%;
        padding-top: 10px;
        height: calc(100% - 10px);  //subtract the padding;

        font-size: 40px;
        color: ${colors.darkGreen};
    `;

  //Styles for the logout button
  const logOutButtonStyles = css`
        ${navItemStyles};
        float: right;
        padding: 30px 10px 0 0;
        font-size: 16px;
        width: 10%;
        height: calc(100% - 30px); //subtract the padding
    `;

  const burgerMenuItemStyles = css`
        :hover {
            background-color: ${colors.hoverBlack};
        }
    `;
  var burgerMenuStyles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      right: '36px',
      top: '25px'
    },
    bmBurgerBars: {
      background: 'white',
    },
    bmCrossButton: {
      height: '40px',
      width: '40px',
    },
    bmCross: {
      background: '#bdc3c7',
      height: '30px',
      right: '10px'
    },
    bmMenuWrap: {
      position: 'fixed',
      top: 0,
      bottom: 0
    },
    bmMenu: {
      background: `${colors.black}`,
      padding: '80px 0',
      fontSize: '1.15em'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      overflow: 'none',
      height: '20%'
    },
    bmItem: {
      display: 'inline-block',
      width: '100%',
      textDecoration: 'none',
      textAlign: 'center',
      color: 'white',
      padding: '10px 0px',
      fontSize: '25px',
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)',
      top: 0,
      left: 0
    }
  }
  const cookies = new Cookies
  const updateMedia = () => {
    setShowHamnav(window.innerWidth <= breakpoints.lg);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  useEffect(() => {
    setShowHamnav(window.innerWidth <= breakpoints.lg);
  }, []);

  return (
    <>
      {showHamnav ?
        <>
          <div css={navbarStyles}>
            <SearchBar />
          </div>
          <Menu right styles={burgerMenuStyles}>
            <a href="/" css={burgerMenuItemStyles}>Home</a>
            <a href="about" css={burgerMenuItemStyles}>About</a>
            <a href="/" css={burgerMenuItemStyles}>Log Out</a>
          </Menu>
        </> :
        <div css={navbarStyles}>
          <a css={siteTitleStyles} href="/">SpotifyEZ</a>
          <a css={navItemStyles} href="/">Home</a>
          <a css={navItemStyles} href="about">About</a>
          <SearchBar />
          <a onClick={() => {
            cookies.remove('ACESS_TOKEN')
            cookies.remove('IS_AUTHED')
          }} css={logOutButtonStyles} href="/">Log Out</a>
        </div>
      }
    </>
  );
}

export default Navbar;
