const DS2Deluxe = {
  artist: "Future",
  album: "DS2 (Deluxe)",
  coverArt:
    "https://firebasestorage.googleapis.com/v0/b/portfolio-spotify-clone.appspot.com/o/Future%20-%20DS2%20(Deluxe%20Edition)%2FCover.jpg?alt=media&token=9a2cb26a-c591-4014-92ff-e24a29d929cb",
  tracks: [
    {
      trackName: "Thought It Was A Drought",
      mediaLink:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-spotify-clone.appspot.com/o/Future%20-%20DS2%20(Deluxe%20Edition)%2F01.%20Thought%20It%20Was%20A%20Drought.mp3?alt=media&token=aa0683a4-daec-45b3-a976-7fb0ccfe66ad",
    },
    {
      trackName: "I Serve The Base",
      mediaLink:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-spotify-clone.appspot.com/o/Future%20-%20DS2%20(Deluxe%20Edition)%2F02.%20I%20Serve%20The%20Base.mp3?alt=media&token=57a528ac-e1ea-4787-a4f6-a5c7127dd48d",
    },
  ],
};

interface Track {
  trackName: string;
  mediaLink: string;
}

interface AlbumInfo {
  artist: string;
  album: string;
  coverArt: string;
  tracks: Track[];
}

const takeFromAlbum = (arr: number[], album: AlbumInfo): Array<object> => {
  let resultArray: any = [];
  arr.forEach((idx) => {
    resultArray.push({
      album: album.album,
      artist: album.artist,
      coverArt: album.coverArt,
      ...album.tracks[idx],
    });
  });
  return resultArray;
};

const getCoverArt = function getPlaylistCoverArtAssortment(arr: any): string[] {
  let uniqueCovers = [
    ...new Set(arr.map(([tracks, album]: any) => album.coverArt)),
  ];
  let randomSelection: any = uniqueCovers
    .sort(() => 0.5 - Math.random())
    .slice(0, uniqueCovers.length > 4 ? 4 : getEven(uniqueCovers.length));
  return randomSelection;
};

const getEven = (num: number): number => {
  if (num === 1) return num;
  if (num % 4 === 0) return num;
  else return 1;
};

let pl1 = [
  [[1, 0], DS2Deluxe],
  [[0, 1], DS2Deluxe],
];
let pl2 = [[[1, 0], DS2Deluxe]];

const playlist1 = {
  tracks: pl1
    .map(([tracks, album]: any) => takeFromAlbum(tracks, album))
    .flat()
    .map((e, i) => {
      return { ...e, index: i };
    }),
  coverArt: getCoverArt(pl1),
  name: "Playlist 1",
};

const playlist2 = {
  tracks: pl2
    .map(([tracks, album]: any) => takeFromAlbum(tracks, album))
    .flat()
    .map((e, i) => {
      return { ...e, index: i };
    }),
  coverArt: getCoverArt(pl2),
  name: "Playlist 2",
};

export default {
  playlist1,
  playlist2,
};
