import Playlist from "./Playlist";
import Proptypes from "prop-types";

export default function ListOfPlaylist(props) {
  return (
    <div className="main-content relative">
      <div className="expand">
        <a className="see-all " href="">
          Show all
        </a>
      </div>
      <div className="main-heading bold">{props.playlist[0].headline}</div>
      <div className="playlists">
        {props.playlist.map((element) => {
          return (
            <Playlist
              key={element.id}
              id={element.id}
              imageSrc={element.imageSrc}
              underline={element.underline}
              headline={element.headline}
              heading={element.heading}
            />
          );
        })}
      </div>
    </div>
  );
}

ListOfPlaylist.propTypes = {
  playlist: Proptypes.array.isRequired,
};
