import HomeIcon from "./images/home-icon.svg";
import Search from "./images/search-icon.svg";
import WatchList from "./images/watchlist-icon.svg";
import Original from "./images/original-icon.svg";
import Movies from "./images/movie-icon.svg";
import Series from "./images/series-icon.svg";
import NavLinks from "./NavLinks";
function NavMenu() {
  return (
    <>
      <NavLinks icon={HomeIcon} href="/home" alt="HOME" displayName="HOME" />
      <NavLinks icon={Search} href="/home" alt="SEARCH" displayName="SEARCH" />
      <NavLinks
        icon={WatchList}
        href="/home"
        alt="WATCHLIST"
        displayName="WATCHLIST"
      />
      <NavLinks
        icon={Original}
        href="/home"
        alt="ORIGINAL"
        displayName="ORIGINAL"
      />

      <NavLinks icon={Movies} href="/home" alt="MOVIES" displayName="MOVIES" />
      <NavLinks icon={Series} href="/home" alt="SERIES" displayName="SERIES" />
    </>
  );
}
export default NavMenu;
