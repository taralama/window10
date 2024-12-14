import "../index.css";

import { IoLogoWindows } from "react-icons/io";
import { VscSearch } from "react-icons/vsc";
import { BiSolidMessageDetail } from "react-icons/bi";
import { IoBatteryFullSharp } from "react-icons/io5";
import { IoPower } from "react-icons/io5";
import { VscSettingsGear } from "react-icons/vsc";
import { AiOutlinePicture } from "react-icons/ai";
import { IoDocumentOutline } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";

import { useEffect, useState } from "react";
import Open from "./Open/Open";

const Taskbar = () => {
  const [date, setDate] = useState({ hour: 0, minute: 0 });

  const start = () => {
    const startOpen = document.getElementsByClassName("startMenu");
    const displayall = document.getElementsByClassName("power");
    startOpen[0].classList.toggle("open");
    for (const list of displayall) {
      list.classList.toggle("open");
    }
    // console.log(displayall);
  };
 



  useEffect(() => {
    setTimeout(() => {
      const getDate = new Date();

      setDate({ hour: getDate.getHours(), minute: getDate.getMinutes() });
      // console.log(date)
    }, 6000);
  }, [date]);

  const apps = [
    {
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/7/7e/Microsoft_Edge_logo_%282019%29.png",
      id: "edge",
      className: "apps-icons",
    },
    {
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/8/87/Google_Chrome_icon_%282011%29.png",
      id: "chrome",
      className: "apps-icons",
    },
    {
      imgUrl:
        "https://winaero.com/blog/wp-content/uploads/2018/12/file-explorer-folder-libraries-icon-18298.png",
      id: "fileExplorer",
      className: "apps-icons",
    },
  ];

  return (
    <>
      <div className="task-container">
        <div className="icon-list">
          <IoLogoWindows
            className="taskbar-icon"
            id="window-logo"
            size={"20"}
            onClick={start}
          />
          <VscSearch className="taskbar-icon" id="window-search" size={"20"} />

          {/* taskbar app container */}
          <div className="taskbar-apps-container">
           {
            apps.map((app,index)=> <img key={index} src={app.imgUrl} id={app.id} className={app.className}/>)
           }
          </div>
          <div className="right">
            <p>
              {date?.hour}:{date?.minute} PM
            </p>
            <IoBatteryFullSharp size={"20"} className="battery" />
            <BiSolidMessageDetail
              size={"20"}
              className="notification"
              onClick={()=>   Open('notificationMenu')}
            />
          </div>
        </div>

        <div className="startMenu">
          <div className="powers">
            <IoMenu size={"20"} className="power" id="hamburgerMenu" />
            <IoPower size={"20"} className="power" id="power" />
            <VscSettingsGear size={"20"} className="power" id="setting" />
            <AiOutlinePicture size={"20"} className="power" id="picture" />
            <IoDocumentOutline size={"20"} className="power" id="document" />
          </div>
          <div className="list"></div>
          <div className="productivity"></div>
        </div>

        <div className="notificationMenu"></div>
      </div>
    </>
  );
};

export default Taskbar;
