import SongsContext from "./SongContext";
import { useState } from "react";

export default function SongData(props) {
  const songs = [
    {
      id: 1,
      name: "Tum Hi Ho 1",
      artist: "Mithoon, Arijit Singh",
      length: "4:21",
    },
    {
      id: 2,
      name: "Tum Hi Ho 2",
      artist: "Mithoon, Arijit Singh",
      length: "4:21",
    },
    {
      id: 3,
      name: "Tum Hi Ho 3",
      artist: "Mithoon, Arijit Singh",
      length: "4:21",
    },
    {
      id: 4,
      name: "Tum Hi Ho 4",
      artist: "Mithoon, Arijit Singh",
      length: "4:21",
    },
    {
      id: 5,
      name: "Tum Hi Ho 5",
      artist: "Mithoon, Arijit Singh",
      length: "4:21",
    },
    {
      id: 6,
      name: "Tum Hi Ho 6",
      artist: "Mithoon, Arijit Singh",
      length: "4:21",
    },
    {
      id: 7,
      name: "Tum Hi Ho 7",
      artist: "Mithoon, Arijit Singh",
      length: "4:21",
    },
  ];

  const playlists = {
    "Spotify-Playlists": [
      {
        id: 1,
        headline: "Spotify Playlists",
        heading: "Love hotel",
        imageSrc:
          "https://i.scdn.co/image/ab67616d00001e021e63de6489803c2b39e7f8e5",
        underline: "leftovermax",
        songs: songs,
      },
      {
        id: 2,
        headline: "Spotify Playlists",
        heading: "Aashiqui 2",
        imageSrc:
          "https://i.scdn.co/image/ab67616d00001e026404721c1943d5069f0805f3",
        underline: "Mithoon , Ankit Tiwari , Jeet Gannguli",
        songs: songs,
      },
      {
        id: 3,
        headline: "Spotify Playlists",
        heading: "Ek tha Raja",
        imageSrc:
          "https://i.scdn.co/image/ab67616d00001e029bb2d30b01ac2cada8a8ad03",
        underline: "Badshah",
        songs: songs,
      },
      {
        id: 4,
        headline: "Spotify Playlists",
        heading: "ANIMAL",
        imageSrc:
          "https://i.scdn.co/image/ab67616d00001e025f3ede47954a93aa03efe5f9",
        underline: "Magan Bhardwaj, Vishal Mishra, Janni",
        songs: songs,
      },
      {
        id: 5,
        headline: "Spotify Playlists",
        heading: "Moosetape",
        imageSrc:
          "https://i.scdn.co/image/ab67616d00001e021d1cc2e40d533d7bcebf5dae",
        underline: "Sidhu Moose Wala",
        songs: songs,
      },

      {
        id: 6,
        headline: "Spotify Playlists",
        heading: "Making Memories",
        imageSrc:
          "https://i.scdn.co/image/ab67616d00001e02bb25239324c4e16ae01fda36",
        underline: "Karan Aujla , Ikky ",
        songs: [
          {
            id: 1,
            name: "Tum Hi Ho 1",
            artist: "Mithoon, Arijit Singh",
            length: "4:21",
          },
          {
            id: 2,
            name: "Tum Hi Ho 2",
            artist: "Mithoon, Arijit Singh",
            length: "4:21",
          },
          {
            id: 3,
            name: "Tum Hi Ho 3",
            artist: "Mithoon, Arijit Singh",
            length: "4:21",
          },
          {
            id: 4,
            name: "Tum Hi Ho 4",
            artist: "Mithoon, Arijit Singh",
            length: "4:21",
          },
          {
            id: 5,
            name: "Tum Hi Ho 5",
            artist: "Mithoon, Arijit Singh",
            length: "4:21",
          },
          {
            id: 6,
            name: "Tum Hi Ho 6",
            artist: "Mithoon, Arijit Singh",
            length: "4:21",
          },
          {
            id: 7,
            name: "Tum Hi Ho 7",
            artist: "Mithoon, Arijit Singh",
            length: "4:21",
          },
        ],
      },
    ],
    "Popular-Albums": [
      {
        id: 1,
        headline: "Popular Albums",
        heading: "Arijit Singh Radio",
        imageSrc:
          "https://seeded-session-images.scdn.co/v2/img/540/r/artist/4YRxDV8wJFPHPTeXepOstw/en-GB",
        underline: "With Neha Kakkar, Pritam, KK and more",
        songs: songs,
      },
      {
        id: 2,
        headline: "Popular Albums",
        heading: "Diljit Dosanjh Radio",
        imageSrc:
          "https://seeded-session-images.scdn.co/v2/img/540/r/artist/2FKWNmZWDBZR4dE5KX4plR/en-GB",
        underline: "With Garry Sandhu, Ranjit Bawa and more",
        songs: songs,
      },
      {
        id: 3,
        headline: "Popular Albums",
        heading: "KK Radio",
        imageSrc:
          "https://seeded-session-images.scdn.co/v2/img/540/r/artist/4fEkbug6kZzzJ8eYX6Kbbp/en-GB",
        underline: "With Mohit Chauhan, Ankit Tiwari, Javed Ali and more",
        songs: songs,
      },
      {
        id: 4,
        headline: "Popular Albums",
        heading: "Udit Narayan Radio",
        imageSrc:
          "	https://seeded-session-images.scdn.co/v2/img/540/r/artist/70B80Lwx2sxti0M1Ng9e8K/en-GB",
        underline: "With Kumar Sanu, Alka Yagnik and more",
        songs: songs,
      },
      {
        id: 5,
        headline: "Popular Albums",
        heading: "A.R. Rahman Radio",
        imageSrc:
          "	https://seeded-session-images.scdn.co/v2/img/540/r/artist/1mYsTxnqsietFxj1OgoGbG/en-GB",
        underline: "With  Anirudh Ravichander and more",
        songs: songs,
      },

      {
        id: 6,
        headline: "Popular Albums",
        heading: "Atif Aslam Radio",
        imageSrc:
          "https://seeded-session-images.scdn.co/v2/img/540/r/artist/2oSONSC9zQ4UonDKnLqksx/en-GB",
        underline: "With Ali Zafar, Asim Azhar and more",
        songs: songs,
      },
    ],
    "Popular-Radio": [
      {
        id: 1,
        headline: "Popular Radio",
        heading: "Top - Global",
        imageSrc:
          "https://charts-images.scdn.co/assets/locale_en/regional/weekly/region_global_default.jpg",
        underline: "Your weekly update of the most played tracks...",
        songs: songs,
      },
      {
        id: 2,
        headline: "Popular Radio",
        heading: "Top - USA",
        imageSrc:
          "https://charts-images.scdn.co/assets/locale_en/regional/weekly/region_us_default.jpg",
        underline: "Your weekly update of the most played tracks...",
        songs: songs,
      },
      {
        id: 3,
        headline: "Popular Radio",
        heading: "Top 50 - Global",
        imageSrc:
          "https://charts-images.scdn.co/assets/locale_en/regional/daily/region_global_default.jpg",
        underline: "Your weekly update of the most played tracks...",
        songs: songs,
      },
      {
        id: 4,
        headline: "Popular Radio",
        heading: "Top 50 - USA",
        imageSrc:
          "https://charts-images.scdn.co/assets/locale_en/regional/daily/region_us_default.jpg",
        underline: "Your weekly update of the most played tracks...",
        songs: songs,
      },
      {
        id: 5,
        headline: "Popular Radio",
        heading: "Viral - Global",
        imageSrc:
          "https://charts-images.scdn.co/assets/locale_en/viral/daily/region_global_default.jpg",
        underline: "Your weekly update of the most played tracks...",
        songs: songs,
      },

      {
        id: 6,
        headline: "Popular Radio",
        heading: "Viral - USA",
        imageSrc:
          "https://charts-images.scdn.co/assets/locale_en/viral/daily/region_us_default.jpg",
        underline: "Your weekly update of the most played tracks...",
        songs: songs,
      },
    ],
    "Featured-Charts": [
      {
        id: 1,
        headline: "Featured Charts",
        heading: "Throwback Thursday",
        imageSrc:
          "	https://i.scdn.co/image/ab67706f00000002a8254148fe8ded229379dc33",
        underline: "#SpotifyTBT this week will take you higher....",
        songs: songs,
      },
      {
        id: 2,
        headline: "Featured Charts",
        heading: "All Out 2020s",
        imageSrc:
          "https://i.scdn.co/image/ab67706f00000002b43eac9f01f8b865662b5c29",
        underline: "The biggest songs of the 2020s...",
        songs: songs,
      },
      {
        id: 3,
        headline: "Featured Charts",
        heading: "All Out 2010s",
        imageSrc:
          "https://i.scdn.co/image/ab67706f00000002afd7da10855c6f8c091a77b3",
        underline: "The biggest songs of the 2010s....",
        songs: songs,
      },
      {
        id: 4,
        headline: "Featured Charts",
        heading: "All Out 2000s",
        imageSrc:
          "https://i.scdn.co/image/ab67706f00000002c900fae23e2a3cf42b0e1556",
        underline: "The biggest songs of the 2000s... ",
        songs: songs,
      },
      {
        id: 5,
        headline: "Featured Charts",
        heading: "All Out 90s",
        imageSrc:
          "https://i.scdn.co/image/ab67706f00000002a5ba8ff3dfb154f4afcdb057",
        underline: "The biggest songs of the 1990s...",
        songs: songs,
      },

      {
        id: 6,
        headline: "Featured Charts",
        heading: "All Out 80s",
        imageSrc:
          "https://i.scdn.co/image/ab67706f00000002d6710ea346fec48e89d77dba",
        underline: "The biggest songs of the 1980s...",
        songs: songs,
      },
    ],
    "Trending-Episode": [
      {
        id: 1,
        headline: "Trending Episode",
        heading: "Welcome back, RJ Balaji",
        imageSrc:
          "https://i.scdn.co/image/ab67656300005f1f9f5d8dab58a909ef23fee583",
        underline: "Jun 2021, 15 min",
        songs: songs,
      },
      {
        id: 2,
        headline: "Trending Episode",
        heading: "#73: Hotel Of Horrors ",
        imageSrc:
          "https://i.scdn.co/image/ab67656300005f1f099a357ed0a2a39424f2903d",
        underline: "Jun 2021, 93 min",
        songs: songs,
      },
      {
        id: 3,
        headline: "Trending Episode",
        heading: "Anubis : God of Death",
        imageSrc:
          "https://i.scdn.co/image/ab67656300005f1f9d2abc777125c182cf99b60f",
        underline: "Jun 2021, 16 min",
        songs: songs,
      },
      {
        id: 4,
        headline: "Trending Episode",
        heading: "Mahabharata Episode 1",
        imageSrc:
          "https://i.scdn.co/image/ab67656300005f1f36dbb0b2d65004488fcc322f",
        underline: "Apr 2014, 24 min",
        songs: songs,
      },
      {
        id: 5,
        headline: "Trending Episode",
        heading: "Relaxing Rain Sounds ",
        imageSrc:
          "https://i1.sndcdn.com/artworks-m6qi670yVgjgz2VY-Rdir9Q-t500x500.jpg",
        underline: "Aug 2019, 122 min",
        songs: songs,
      },

      {
        id: 6,
        headline: "Trending Episode",
        heading: "Ye Na Thi Hamari Qismat",
        imageSrc:
          "https://i.scdn.co/image/ab67656300005f1f6807eaee16197dac1dd840e8",
        underline: "Aug 2020, 3 min",
        songs: songs,
      },
    ],
  };

  const playSong = (songNumber) => {
    console.log("Playing song", songNumber);
  };

  const pauseSong = () => {
    console.log("Song paused");
  };

  const [currentSongIndex, setCurrentSongIndex] = useState(1);
  const [currentPlaylistSet, setCurrentPlaylistSet] =
    useState("Spotify-Playlists");
  const [currentPlaylistNumber, setCurrentPlaylistNumber] = useState("1");
  const [currentSong, setCurrentSong] = useState("Tum Hi Ho 1");
  const [currentArtist, setCurrentArtist] = useState("Mithoon, Arijit Singh");

  const handlePrevSong = () => {
    setCurrentSongIndex((prevIndex) => {
      const newIndex = prevIndex === 1 ? 7 : prevIndex - 1;
      setCurrentSong(
        playlists[currentPlaylistSet][currentPlaylistNumber - 1].songs[
          newIndex - 1
        ].name
      );
      setCurrentArtist(
        playlists[currentPlaylistSet][currentPlaylistNumber - 1].songs[
          newIndex - 1
        ].artist
      );
      console.log(newIndex);
      return newIndex;
    });
  };

  const handleNextSong = () => {
    setCurrentSongIndex((prevIndex) => {
      const newIndex = prevIndex === 7 ? 1 : prevIndex + 1;
      setCurrentSong(
        playlists[currentPlaylistSet][currentPlaylistNumber - 1].songs[
          newIndex - 1
        ].name
      );
      setCurrentArtist(
        playlists[currentPlaylistSet][currentPlaylistNumber - 1].songs[
          newIndex - 1
        ].artist
      );
      console.log(newIndex);
      return newIndex;
    });
  };

  return (
    <SongsContext.Provider
      value={{
        playlists,
        playSong,
        pauseSong,
        currentSongIndex,
        setCurrentSongIndex,
        currentPlaylistSet,
        currentPlaylistNumber,
        setCurrentPlaylistNumber,
        setCurrentPlaylistSet,
        handleNextSong,
        handlePrevSong,
        currentSong,
        setCurrentSong,
        currentArtist,
        setCurrentArtist,
      }}
    >
      {props.children}
    </SongsContext.Provider>
  );
}
