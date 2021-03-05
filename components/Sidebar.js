/** @jsxImportSource @emotion/react */

import React, { useState } from 'react';

import styled from '@emotion/styled';
import { css } from '@emotion/react';
import colors from '../styles/colors';
import Link from 'next/link';
import { FaPlus } from 'react-icons/fa';

const StyledSidebar = styled.div`    
    position: absolute;
    height: calc(100% - 80px);
    width: 70px;
    left: 0;
    top: 80px;
    padding-top: 10px;

    background-color: ${colors.darkGreen};
    color: white;

`;

const PlaylistsList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
`;

function Sidebar() {
    //TODO: Store playlists in the redux store, and get them here.
    const [playlistData, setPlaylistData] = useState([
        {
            id: 0,
            name: "Beethoven",
            imageUrl: "../images/sample-playlist.jpg",
        },
        {
            id: 1,
            name: "Beethoven",
            imageUrl: "../images/sample-playlist.jpg",
        }, 
        {
            id: 2,
            name: "Beethoven",
            imageUrl: "../images/sample-playlist.jpg",
        }
    ]);

    const sidebarIconStyles = css`
        object-fit: cover;
        border-radius: 50%;
        height: 50px;
        width: 50px;
        margin-bottom: 10px;

        cursor: pointer;
        transition: all .2s ease-in-out; 

        :hover{
            transform: scale(1.1);
        }
    `;

    const newPlaylistButtonStyles = css`
        ${sidebarIconStyles};
        background-color: white;
        text-decoration: none;
        color: ${colors.darkGreen};

        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
    `;

    return (
        <StyledSidebar>
            <PlaylistsList>
                {playlistData.map(playlist => (
                    <Link href={`playlists/${playlist.id}`} key={playlist.id}>
                        <img 
                            src={playlist.imageUrl}
                            css={sidebarIconStyles}
                            alt={playlist.name}
                        />
                    </Link> 
                ))}
                <Link href="playlists/new">
                    <span css={newPlaylistButtonStyles}>
                        <FaPlus  />
                    </span>
                </Link>
            </PlaylistsList>
            
        </StyledSidebar>
    );
}

export default Sidebar;