import { PropTypes } from "prop-types";

export default function Playlist(props) {
  return (
    <div className="playlist flex direction">
      <div className="play-button flex align justify">
        <img
          width="20"
          height="20"
          src="https://img.icons8.com/ios-glyphs/30/play--v1.png"
          alt="play--v1"
        />
      </div>
      <img src={`${props.imageSrc}`} />
      <h2 className="playlist-heading">{props.heading}</h2>
      <p className="playlist-underline">{props.underline}</p>
    </div>
  );
}

Playlist.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  underline: PropTypes.string.isRequired,
};
