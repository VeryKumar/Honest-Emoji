import React from "react";
import "./UserList.css";
import defaultAvatar from "./default-avatar.png";
import ReactPlayer from "react-player";
import Webcam from "react-webcam";

function UserList(props, { userId }) {
  console.log(props);
  return (
    <div className="UserList">
      <script defer src="honest-emoji/face-api.min.js"></script>
      <script defer src="honest-emoji/script.js"></script>
      <div className="UserList__titlebar">
        <img
          src={defaultAvatar}
          className="UserList__titlebar__avatar"
          alt="avatar"
        />
        <span className="UserList__titlebar__logged-in-as">{userId}</span>
      </div>
      <div className="UserList__container">
        <ul className="UserList__container__list">
          <li className="UserList__container__list__item" onClick=>
            <div>
              <img
                src={defaultAvatar}
                className="UserList__container__list__item__avatar"
                alt="avatar"
              />
            </div>
            <div className="UserList__container__list__item__content">
              <p className="UserList__container__list__item__content__name">
                Alice Andrews
              </p>
              <p className="UserList__container__list__item__content__text">
                You: That would be great!
              </p>
            </div>
            <div className="UserList__container__list__item__time">
              10:01 AM
            </div>
          </li>
          <li className="UserList__container__list__item UserList__container__list__item--selected">
            <div>
              <img
                src={defaultAvatar}
                className="UserList__container__list__item__avatar"
                alt="avatar"
              />
            </div>
            <div className="UserList__container__list__item__content">
              <p className="UserList__container__list__item__content__name">
                Joe Bloggs
              </p>
              <p className="UserList__container__list__item__content__text">
                Joe: Not bad, how was yours?
              </p>
            </div>
            <div className="UserList__container__list__item__time">9:38 AM</div>
          </li>
          <li className="UserList__container__list__item">
            <div>
              <img
                src={defaultAvatar}
                className="UserList__container__list__item__avatar"
                alt="avatar"
              />
            </div>
            <div className="UserList__container__list__item__content">
              <p className="UserList__container__list__item__content__name">
                Jane Smith
              </p>
              <p className="UserList__container__list__item__content__text">
                Jane: Did you get the files I sent yesterday?
              </p>
            </div>
            <div className="UserList__container__list__item__time">
              Yesterday
            </div>
          </li>
        </ul>
      </div>
      PUT VID HERE
      {/* <iframe src="http://127.0.0.1:5501/index.html"></iframe> */}
      {/* <ReactPlayer
        url="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"
        playing
        config={
          // {
          //   file: {
          //     attributes: {
          //       crossOrigin: "true"
          //     }
          //   }
          // }
          {
            file: {
              forceHls: "true"
              // attributes: {
              //   crossOrigin: "false"
              // }
            }
          }
        }
      /> */}
      {/* <Video /> */}
      <Webcam />;
    </div>
  );
}

export default UserList;
