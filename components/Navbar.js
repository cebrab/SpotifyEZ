/** @jsxImportSource @emotion/react */

import { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { FaSearch } from 'react-icons/fa';

import colors from '../styles/colors';
import breakpoints from '../styles/breakpoints';

//Search bar for the Navbar
function SearchBar() {
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
            color:  ${colors.darkGreen};
        }
    `;

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
}
function Navbar() {
    
    //Styles for the entire navbar
    const navbarStyles = css`
        width: 100%;
        height: 80px;
        top: 0;
        left: 0;
        position: fixed;
        background-color: ${colors.gray};
    `;

    //Parent styles for all links on the Navbar
    const navItemStyles = css`
        padding-top: 25px;
        height: calc(100% - 25px); //subtract the padding;
        width: 8%;

        font-weight: bold;
        font-size: 20px;
        text-align: center;
        color: black;
        text-decoration: none;
        float: left;

        :hover {
            cursor: pointer;
            color:  ${colors.darkGreen};
            background-color: ${colors.hoverGray};    
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
        height: calc(100% - 30px) //subtract the padding
    `;

    return(
        <div css={navbarStyles}>
            <a css={siteTitleStyles} href="#">SpotifyEZ</a>
            <a css={navItemStyles} href="#">Home</a>
            <a css={navItemStyles} href="#">About</a>
            <SearchBar />
            <a css={logOutButtonStyles} href="#">Log Out</a>
        </div>
    );
}

export default Navbar;