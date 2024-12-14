import Taskbar from "./Taskbar";
import "../index.css";
import wallpaper from "../assets/wallpaper.jpg";
import { VscChromeMinimize } from "react-icons/vsc";
import { GrClose } from "react-icons/gr";

import { VscChromeMaximize } from "react-icons/vsc";
import { IoArrowBackSharp } from "react-icons/io5";
import { IoArrowForward } from "react-icons/io5";
import { IoMdRefresh } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { AiOutlineMore } from "react-icons/ai";
import { TfiAngleRight } from "react-icons/tfi";
import Open from "./Open/Open";

const Desktop = () => {
  
  const maximize = () => {
    const explorer = document.getElementsByClassName("file-explorer");
    explorer[0].classList.toggle("maximized");
  };

  window.addEventListener("click", (event) => {
    
  });

  window.addEventListener("contextmenu", (event) => {
    event.preventDefault();

    const clickX = event.clientX;
    const clickY = event.clientY;
    // console.log("right click at ", clickX, clickY);

    const mouseRightMenu = document.getElementsByClassName("mouseclick-right");
    Array.from(mouseRightMenu).forEach((menu) => {
      menu.classList.remove("clicked");
    });
    if (mouseRightMenu.length > 0) {
      const menu = mouseRightMenu[0] as HTMLElement; // Cast to HTMLElement
      menu.classList.toggle("clicked");
      menu.style.left = `${clickX}px`;
      menu.style.top = `${clickY}px`;
    } else {
      console.error("No element with class 'mouseclick-right' found.");
    }
  });

  const reload = () => {
    location.reload();
  };

  return (
    <div>
      <div className="desktop">
        <img src={wallpaper}></img>
        <div className="app-list">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Microsoft_Edge_logo_%282019%29.png"
            alt="asdf"
            onClick={()=>Open('edge')}
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/87/Google_Chrome_icon_%282011%29.png"
            alt="asdf"
            onClick={()=>Open('chrome')}
          />
        </div>

        <div id="file-explorer">
          <div className="window-nav">
            <div className="nav-icons" id="minimize">
              <VscChromeMinimize onClick={()=>Open('file-explorer')} />
            </div>
            <div className="nav-icons" id="maximize">
              <VscChromeMaximize size={"15"} onClick={maximize} />
            </div>
            <div className="nav-icons" id="close">
              <GrClose size={"10"} />
            </div>
          </div>

          <div className="search-nav">
            <div className="search-box">
              <IoArrowBackSharp className="tab-buttons" />
              <IoArrowForward className="tab-buttons" />
              <IoMdRefresh className="tab-buttons" />
              <input
                type="text"
                id="search-input"
                placeholder="Search Google or Type URL"
              />
              <div id="mode">
                <CgProfile />
                <p>Guest</p>
              </div>
              <AiOutlineMore className="tab-buttons" id="dot-menu" />
            </div>
          </div>
        </div>

        <div className="mouseclick-right">
          <ul>
            <li id="rightclick-view">
              <p>View </p> <TfiAngleRight />
            </li>
            <li id="rightclick-sortby">
              <p>Sort by</p>
              <TfiAngleRight />
            </li>
            <li id="rightclick-refresh" onClick={reload}>
              <p>Refresh</p>
            </li>
            <div className="mouseclick-line"></div>
            <li id="rightclick-refresh">
              <p>Paste</p>
            </li>
            <li id="rightclick-refresh">
              <p>Paste shortcut</p>
            </li>
          </ul>

          {/* <p id="rightclick-refresh" onClick={reload}>Refresh</p> */}
        </div>
      </div>

      <Taskbar />
    </div>
  );
};

export default Desktop;
