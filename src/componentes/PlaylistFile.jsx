import { useState, useEffect } from "react";
import SongsContext from "../context/songs/SongContext";
import { useContext } from "react";

import { useParams } from "react-router-dom";

export default function PlaylistFile() {
  let playlists = useContext(SongsContext);
  const { playlistName, playlistId } = useParams();
  const imgSrc = playlists.playlists[playlistName][playlistId - 1].imageSrc;
  const heading = playlists.playlists[playlistName][playlistId - 1].heading;
  const type = "Album";
  const underline = playlists.playlists[playlistName][playlistId - 1].underline;

  const textWithDots = underline.split(", ").map((item, index) => (
    <span key={index}>
      {item}
      {index !== underline.split(", ").length - 1 ? " • " : ""}
    </span>
  ));

  let temp = playlists.currentSongIndex;

  useEffect(() => {
    const handleRowClick = (event) => {
      const rowElement = event.currentTarget;
      const songName = rowElement.querySelector(".song-name").innerText; // Get song name
      const artistName = rowElement.querySelector(".artist-name").innerText; // Get artist name

      playlists.setCurrentSong(songName);
      playlists.setCurrentArtist(artistName);
      playlists.setCurrentPlaylistNumber(playlistId);
    };

    const rows = document.querySelectorAll(".songs-row");

    rows.forEach((rowElement) => {
      rowElement.addEventListener("click", handleRowClick);

      if (
        rowElement.querySelector(".song-name").innerText ===
          playlists.currentSong &&
        rowElement.querySelector(".artist-name").innerText ===
          playlists.currentArtist &&
        playlists.currentPlaylistNumber === playlistId
      ) {
        rowElement.style.backgroundColor = "#343434d0";
        temp = Number(rowElement.querySelector(".song-number").innerText);
        playlists.setCurrentSongIndex(temp);

        console.log(temp);
        console.log(playlists.currentArtist, playlists.currentSong);
      } else {
        rowElement.style.backgroundColor = "";
      }
    });

    return () => {
      rows.forEach((rowElement) => {
        rowElement.removeEventListener("click", handleRowClick);
      });
    };
  }, [playlists.currentSong, playlists.currentArtist]);

  const [playImage, setPlayImage] = useState(
    "https://img.icons8.com/ios-filled/50/play--v1.png"
  );

  function playButton() {
    if (playImage === "https://img.icons8.com/ios-filled/50/play--v1.png") {
      setPlayImage("https://img.icons8.com/ios-filled/50/pause--v1.png");
    } else {
      setPlayImage("https://img.icons8.com/ios-filled/50/play--v1.png");
    }
  }

  const songs = playlists.playlists[playlistName][playlistId - 1].songs;

  return (
    <>
      <div className="playlist-info">
        <div className="playlist-info-header">
          <div
            className="playlist-info-background"
            style={{ backgroundImage: `url(${imgSrc})` }}
          ></div>
          <div className="playlist-container">
            <img className="playlist-info-image border-radius" src={imgSrc} />
            <div className="playlist-info-text">
              <div className="playlist-info-heading">
                <label>{type}</label>
              </div>
              <div className="playlist-info-heading">
                <h1>{heading}</h1>
              </div>
              <div className="playlist-info-heading">
                <p>{textWithDots}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="play-playlist">
        <div
          className="play-playlist-button flex align justify"
          onClick={playButton}
        >
          <img width="25" height="25" src={playImage} alt="play--v1" />
        </div>
        <div className="like-playlist">
          <div className="heart-container" title="Like">
            <input type="checkbox" className="checkbox" id="Give-It-An-Id" />
            <div className="svg-container">
              <svg
                viewBox="0 0 24 24"
                className="svg-outline"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="white"
                  d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"
                ></path>
              </svg>
              <svg
                viewBox="0 0 24 24"
                className="svg-filled"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
              </svg>
              <svg
                className="svg-celebrate"
                width="100"
                height="100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon points="10,10 20,20"></polygon>
                <polygon points="10,50 20,50"></polygon>
                <polygon points="20,80 30,70"></polygon>
                <polygon points="90,10 80,20"></polygon>
                <polygon points="90,50 80,50"></polygon>
                <polygon points="80,80 70,70"></polygon>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="playlist-songs">
        <table className="songs">
          <thead>
            <tr className="songs-heading-row">
              <th className="songs-number">#</th>
              <th className="songs-title">Title</th>
              <th className="songs-length">
                <img
                  width="16"
                  height="16"
                  className="invert"
                  src="https://img.icons8.com/small/16/000000/clock.png"
                  alt="clock"
                />
              </th>
            </tr>
          </thead>
          <tbody>
            {songs.map((element) => {
              return (
                <tr key={element.id} className="songs-row">
                  <td className="song-number">{element.id}</td>
                  <td className="song-title">
                    <div className="song-name">{element.name}</div>
                    <div className="artist-name">{element.artist}</div>
                  </td>
                  <td className="song-length">{element.length}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
