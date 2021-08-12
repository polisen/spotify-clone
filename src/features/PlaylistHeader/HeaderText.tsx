import styled from 'styled-components';
import Text from 'components/Text';

const PlaylistTitle = styled(Text.Playlist)`
    margin-bottom: 0.5em;
`


export const HeaderText = () => {
    return (
        <div>
        <Text>PLAYLIST</Text>
        <PlaylistTitle>Playlist 1</PlaylistTitle>
        </div>

    )
}