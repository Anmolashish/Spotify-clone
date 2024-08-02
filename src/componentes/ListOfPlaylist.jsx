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
      <div className="main-heading bold">{props.heading}</div>
      <div className="playlists flex">
        <Playlist
          imageSrc="https://i.scdn.co/image/ab67616d00001e026404721c1943d5069f0805f3"
          underline="Mithoon , Ankit Tiwari , Jeet Gannguli"
          heading="Aashiqui 1"
        />
        <Playlist
          imageSrc="https://i.scdn.co/image/ab67616d00001e026404721c1943d5069f0805f3"
          underline="Mithoon , Ankit Tiwari , Jeet Gannguli"
          heading="Aashiqui 2"
        />
        <Playlist
          imageSrc="https://i.scdn.co/image/ab67616d00001e026404721c1943d5069f0805f3"
          underline="Mithoon , Ankit Tiwari , Jeet Gannguli"
          heading="Aashiqui 3"
        />

        <Playlist
          imageSrc="https://i.scdn.co/image/ab67616d00001e026404721c1943d5069f0805f3"
          underline="Mithoon , Ankit Tiwari , Jeet Gannguli"
          heading="Aashiqui 3"
        />

        <Playlist
          imageSrc="https://i.scdn.co/image/ab67616d00001e026404721c1943d5069f0805f3"
          underline="Mithoon , Ankit Tiwari , Jeet Gannguli"
          heading="Aashiqui 3"
        />
        <Playlist
          imageSrc="https://i.scdn.co/image/ab67616d00001e026404721c1943d5069f0805f3"
          underline="Mithoon , Ankit Tiwari , Jeet Gannguli"
          heading="Aashiqui 3"
        />
      </div>
    </div>
  );
}

ListOfPlaylist.propTypes = {
  heading: Proptypes.string.isRequired,
};
