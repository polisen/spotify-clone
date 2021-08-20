import {nanoid} from '@reduxjs/toolkit';

const DS2Deluxe = {
  artist: "Future",
  album: "DS2 (Deluxe)",
  coverArt: "https://firebasestorage.googleapis.com/v0/b/portfolio-spotify-clone.appspot.com/o/Future%20-%20DS2%20(Deluxe%20Edition)%2FCover.jpg?alt=media&token=9a2cb26a-c591-4014-92ff-e24a29d929cb",
  tracks: [
    {
      trackName: "Thought It Was A Drought",
      mediaLink:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-spotify-clone.appspot.com/o/Future%20-%20DS2%20(Deluxe%20Edition)%2F01.%20Thought%20It%20Was%20A%20Drought.mp3?alt=media&token=aa0683a4-daec-45b3-a976-7fb0ccfe66ad",
    },
  ],
};

interface Track {
    trackName: string,
    mediaLink: string
}

interface AlbumInfo {
    artist: string;
    album: string;
    coverArt: string;
    tracks: Track[]
} 


const takeFromAlbum = (arr: number[], album: AlbumInfo): Array<object> => {
    let resultArray:any   = []
    arr.forEach(idx => {
        resultArray.push({
            album: album.album,
            artist: album.artist,
            coverArt: album.coverArt,
            ...album.tracks[idx]
        })
    })
  return resultArray
};



export const playlist1 = [
  ...takeFromAlbum([0], DS2Deluxe),
]

export const playlist2 = {};
