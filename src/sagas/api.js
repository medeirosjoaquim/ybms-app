export const fetchArtistInfo = async () => {
  try {
    const response = await fetch("https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Lil%27%20Wayne&api_key=01d456e1358745db58bfa298b7a0e51e&format=json", {
      headers: {
        "Content-Type": "application/json",
    },
    }
    );
    const data = await response.json();

    return data.artist;
  } catch (e) {
    console.log(e);
  }
};


export const fetchDiscography = async () => {
  try {
    const response = await fetch("https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=Lil%27%20Wayne&api_key=01d456e1358745db58bfa298b7a0e51e&format=json", {
      headers: {
        "Content-Type": "application/json",
    },
    }
    );
    const discoData = await response.json();
    return discoData;
  } catch (e) {
    console.log(e);
  }
};

export const fetchSongsByAlbum = async () => {
  const albumTrackList = [];
  const albums = await fetchDiscography();
  let albumtracks;
  for (let album of albums.topalbums.album) {
      const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=01d456e1358745db58bfa298b7a0e51e &artist=Lil%27%20Wayne&album=${album.name}&format=json`,
      {headers: {"Content-Type": "application/json"}}
    );
    albumtracks = await response.json().then(albumTrackList.push(albumtracks));
  }
  return albumTrackList;
};
