import ListOfPlaylist from "./ListOfPlaylist";
import SongsContext from "../context/songs/SongContext";
import { useContext } from "react";

export default function FrontPage() {
  let playlists = useContext(SongsContext);

  return (
    <div className="set-of-playlist">
      <ListOfPlaylist playlist={playlists.playlists["Spotify-Playlists"]} />
      <ListOfPlaylist playlist={playlists.playlists["Popular-Albums"]} />
      <ListOfPlaylist playlist={playlists.playlists["Popular-Radio"]} />
      <ListOfPlaylist playlist={playlists.playlists["Featured-Charts"]} />
      <ListOfPlaylist playlist={playlists.playlists["Trending-Episode"]} />
    </div>
  );
}
