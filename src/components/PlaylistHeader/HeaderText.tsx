import styled from 'styled-components';


const PlaylistTag = styled.p`
    font-family: montserrat;
    font-weight: bold;
    color: white;
    margin: 0;
`

const PlaylistName= styled.p`
    font-family: montserrat;
    font-weight: bold;
    font-size: 76px;
    color: white;
    margin-top: 0;
    margin-bottom: .5em;
`




export const HeaderText = () => {
    return (
        <div>
        <PlaylistTag>PLAYLIST</PlaylistTag>
        <PlaylistName>Playlist 1</PlaylistName>
        </div>

    )
}