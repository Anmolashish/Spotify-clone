// import ListOfPlaylist from "./ListOfPlaylist";
import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import SongsContext from "../context/songs/SongContext";
import { useContext } from "react";

export default function Right() {
  const [click1, setClick1] = useState("false");
  const [click2, setClick2] = useState("false");
  const [color1, setColor1] = useState("white");
  const [color2, setColor2] = useState("white");
  const [playImage, setPlayImage] = useState(
    "https://img.icons8.com/ios-filled/50/play--v1.png"
  );
  const song = useContext(SongsContext);

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Navigate to the previous route
  };

  const handleNext = () => {
    navigate(1); // Navigate to the next route
  };

  function changeToGreen() {
    if (click1) {
      setColor2("#3be276");
      setClick1(false);
    } else {
      setColor2("white");
      setClick1(true);
    }
  }

  function changeToGreen1() {
    if (click2) {
      setColor1("#3be276");
      setClick2(false);
    } else {
      setColor1("white");
      setClick2(true);
    }
  }

  function playButton() {
    if (playImage === "https://img.icons8.com/ios-filled/50/play--v1.png") {
      setPlayImage("https://img.icons8.com/ios-filled/50/pause--v1.png");
      song.playSong(song.currentSongIndex);
    } else {
      setPlayImage("https://img.icons8.com/ios-filled/50/play--v1.png");
      song.pauseSong();
    }
  }

  useEffect(() => {
    document.querySelector(".hamburger").addEventListener("click", () => {
      document.querySelector(".left").style.left = "0";
    });
  });

  function prevSong() {
    song.handlePrevSong();
  }

  function nextSong() {
    song.handleNextSong();
  }

  return (
    <div className="right flex justify direction p1">
      <div className="main-div grey border-radius">
        <div className="main-div-header border-radius-top flex align space-between">
          <div className="arrow align m2-1 ">
            <img
              width="26 m2-1"
              className="invert"
              height="26"
              src="https://img.icons8.com/material-outlined/24/back--v1.png"
              alt="back--v1"
              onClick={handleBack}
            />

            <img
              className="invert m2-1"
              width="26"
              height="26"
              src="https://img.icons8.com/material-rounded/24/forward.png"
              alt="forward"
              onClick={handleNext}
            />
          </div>
          <div className="hamburger">
            <img
              className="invert"
              width="30"
              height="30"
              src="https://img.icons8.com/ios-filled/50/menu--v1.png"
              alt="menu--v1"
            />
          </div>
          <div className="buttons flex align">
            <div className="signup bold flex align">Sign Up</div>
            <div className="login border-radius flex align m2-1">Log In</div>
          </div>
        </div>

        <div className="songs-data">
          <Outlet />
        </div>
        <div className="play-seek flex align">
          <div className="seekbar">
            <div className="seekbar-track"></div>
          </div>
          <div className="shuffle flex align">
            <div className="flex justify align">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="25"
                height="25"
                x="0"
                y="0"
                viewBox="0 0 512 512"
                className="m2-1"
                onClick={changeToGreen1}
              >
                <g>
                  <path
                    d="m506.24 371.7-96-80c-4.768-4-11.424-4.8-17.024-2.208A16.02 16.02 0 0 0 384 303.988v48h-26.784c-22.208 0-42.496-11.264-54.272-30.08l-103.616-165.76c-23.52-37.664-64.096-60.16-108.544-60.16H0v64h90.784c22.208 0 42.496 11.264 54.272 30.08l103.616 165.76c23.552 37.664 64.128 60.16 108.544 60.16H384v48a16.02 16.02 0 0 0 9.216 14.496 16.232 16.232 0 0 0 6.784 1.504c3.68 0 7.328-1.248 10.24-3.712l96-80c3.68-3.04 5.76-7.552 5.76-12.288 0-4.736-2.08-9.248-5.76-12.288z"
                    fill={color1}
                    opacity="1"
                    data-original="#000000"
                  ></path>
                  <path
                    d="m506.24 115.7-96-80c-4.768-3.968-11.424-4.8-17.024-2.176C387.584 36.116 384 41.78 384 47.988v48h-26.784c-44.448 0-85.024 22.496-108.544 60.16l-5.792 9.28 37.728 60.384 22.336-35.744c11.776-18.816 32.064-30.08 54.272-30.08H384v48c0 6.208 3.584 11.872 9.216 14.496a16.232 16.232 0 0 0 6.784 1.504c3.68 0 7.328-1.28 10.24-3.712l96-80c3.68-3.04 5.76-7.552 5.76-12.288 0-4.736-2.08-9.248-5.76-12.288zM167.392 286.164l-22.304 35.744c-11.776 18.816-32.096 30.08-54.304 30.08H0v64h90.784c44.416 0 84.992-22.496 108.544-60.16l5.792-9.28-37.728-60.384z"
                    fill={color1}
                    opacity="1"
                    data-original="#000000"
                  ></path>
                </g>
              </svg>
            </div>
          </div>
          <div className="song-change flex justify align">
            <div className="flex justify align" onClick={prevSong}>
              <img
                width="25"
                height="25"
                className="invert"
                src="./Images/previous.png"
                alt="previous"
              />
            </div>
            <div
              className="play-pause-button flex justify align"
              onClick={playButton}
            >
              <img width="25" height="25" src={playImage} alt="play--v1" />
            </div>
            <div className="flex justify align" onClick={nextSong}>
              <img
                width="25"
                height="25"
                className="invert"
                src="./Images/next-button.png"
                alt="previous"
              />
            </div>
          </div>
          <div className="shuffle flex align">
            <div className="flex justify align">
              <svg
                id="mySvg"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="25"
                height="25"
                className="m2-1"
                viewBox="0 0 28 28"
                onClick={changeToGreen}
              >
                <path
                  fill={color2}
                  d="M26 16v2c0 2.2-1.8 4-4 4H8v3c0 .6-.4 1-1 1-.3 0-.5-.1-.7-.3l-4-4c-.4-.4-.4-1 0-1.4l4-4c.4-.4 1-.4 1.4 0 .2.2.3.4.3.7v3h14c1.1 0 2-.9 2-2v-2c0-.6.4-1 1-1s1 .4 1 1zM3 13c.6 0 1-.4 1-1v-2c0-1.1.9-2 2-2h14v3c0 .6.4 1 1 1 .3 0 .5-.1.7-.3l4-4c.4-.4.4-1 0-1.4l-4-4c-.4-.4-1-.4-1.4 0-.2.2-.3.4-.3.7v3H6c-2.2 0-4 1.8-4 4v2c0 .6.4 1 1 1z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
