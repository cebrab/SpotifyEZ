/** @jsxImportSource @emotion/react */

import React, { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

function SpotifyPlayer(props){
  return(
    <>
    {console.log("uri is: " + props.uri)}
    <iframe src={`https://open.spotify.com/embed?uri=${props.uri}`} width="380" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    </>
  )
}
export default SpotifyPlayer;
