import { useEffect } from "react";

export default function Left() {
  useEffect(() => {
    document.querySelector(".close").addEventListener("click", () => {
      document.querySelector(".left").style.left = "-100%";
    });
  }, []);

  return (
    <div className="left border justify direction ">
      <div className="close">
        <img
          className="invert"
          width="20"
          height="20"
          src="https://img.icons8.com/ios-glyphs/30/delete-sign.png"
          alt="delete-sign"
        />
      </div>

      <div className="upper border-radius grey p2 ">
        <img className="invert" src="Images/main-logo.svg" />
        <ul className="options m2 direction">
          <li>
            <img className="invert image-size" src="./Images/home.svg" />
            <a href="#" className="option">
              Home
            </a>
          </li>
          <li>
            <img className="invert image-size" src="./Images/search.svg" />
            <a href="#" className="option">
              Search
            </a>
          </li>
        </ul>
      </div>
      <div className="lower border-radius grey p2">
        <div className="heading flex align">
          <img className="invert image-size" src="./Images/library.svg" />
          <h1 className="heading-text text-size">Your Library</h1>
        </div>

        <div className="settings flex">
          <div>
            <a href="https://www.spotify.com/in-en/legal/" id="">
              Legal
            </a>
          </div>
          <div>
            <a
              href="https://www.spotify.com/in-en/safetyandprivacy/"
              id=""
              data-encore-id="textLink"
            >
              <span data-encore-id="type">Safety &amp; Privacy Center</span>
            </a>
          </div>
          <div>
            <a
              href="https://www.spotify.com/in-en/legal/privacy-policy/"
              id=""
              data-encore-id="textLink"
            >
              <span data-encore-id="type">Privacy Policy</span>
            </a>
          </div>
          <div>
            <a
              href="https://www.spotify.com/in-en/legal/cookies-policy/"
              id=""
              data-encore-id="textLink"
            >
              <span data-encore-id="type">Cookies</span>
            </a>
          </div>
          <div>
            <a
              href="https://www.spotify.com/in-en/legal/privacy-policy/#s3"
              id=""
              data-encore-id="textLink"
            >
              <span data-encore-id="type">About Ads</span>
            </a>
          </div>
          <div>
            <a
              href="https://www.spotify.com/in-en/accessibility/"
              id=""
              data-encore-id="textLink"
            >
              <span data-encore-id="type">Accessibility</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
