/** @jsxImportSource @emotion/react */

import styled from '@emotion/styled';
import { css } from '@emotion/react';
import colors from '../styles/colors';
import Link from 'next/link';
import { FaPlus } from 'react-icons/fa';
import usePlaylists from '../hooks/usePlaylists';

const StyledSidebar = styled.div`
    position: absolute;
    height: calc(100% - 100px); //factor in the top and bottom
    width: 80px;
    position: fixed;
    z-index: 1;
    top: 81px;
    left: 0px;
    padding: 10px 0;
    border-style: solid;
    border-width: 1px;
    border-color: grey;
    border-radius: 4px;
    background-color: ${colors.darkGreen};
    color: white;

    overflow-y:scroll;

`;

const PlaylistsList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
`;

function Sidebar() {
    const { playlists } = usePlaylists()

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
        position: absolute;
    `;

    return (
        <StyledSidebar>
            <PlaylistsList>
              { playlists && playlists.map(playlist => (
                    <Link href={`/playlists/${playlist.id}`} key={playlist.id}>
                        <img
                            src={playlist.images[0].url}
                            css={sidebarIconStyles}
                            title={playlist.name}
                            alt={playlist.name}
                        />
                    </Link>
                ))}
                <Link href="/SpotifyTinderPage">
                    <span css={newPlaylistButtonStyles}>
                        <FaPlus  />
                    </span>
                </Link>
            </PlaylistsList>

        </StyledSidebar>
    );
}

export default Sidebar;
