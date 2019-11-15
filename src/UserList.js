import React from "react";
import "./UserList.css";
import defaultAvatar from "./default-avatar.png";
import ReactPlayer from "react-player";
import Webcam from "react-webcam";

class UserList extends React.Component {
  // console.log(MyChatComponent.props.chatkit.currentUser);

  //this.props.currentUser.rooms[0].name

  // componentDidMount() {
  //   //this should be able to return stuff, but it doesn't
  // }

  selectUser = event => {
    console.log(event.target.dataset.id);

    let name = event.target.dataset.name
      .split("& ")[0]
      .split(" ")[0]
      .toLowerCase();

    let el = document.querySelectorAll("LI");
    window.location = `http://localhost:3000/?userId=varun&otherUserId=${name}`;
    // iterate through the nodeList
    el.forEach(li => {
      if (event.target.dataset.id === li.id) {
        li.classList.toggle("UserList__container__list__item--selected");
      }
    });
    // in each iteration, compare the id of the element to the event.target.id
  };

  render() {
    console.log(this.props.currentUser && this.props.currentUser.rooms);

    return (
      <div className="UserList">
        <script defer src="honest-emoji/face-api.min.js"></script>
        <script defer src="honest-emoji/script.js"></script>
        <div className="UserList__titlebar">
          <img
            src={'https://i.pinimg.com/originals/49/a7/72/49a7722d61e9e38a7d2f45836a5139e9.jpg'}
            className="UserList__titlebar__avatar"
            alt="avatar"
          />
          <span className="UserList__titlebar__logged-in-as">
            {this.props.userId}
          </span>
        </div>
        <div className="UserList__container">
          <ul className="UserList__container__list">
            {this.props.currentUser && this.props.currentUser.rooms
              ? this.props.currentUser.rooms.map((room, idx) => (
                  <div key={idx} onClick={event => this.selectUser(event)}>
                    <li
                      id={idx}
                      data-id={idx}
                      data-name={room.name.split("& ").pop()}
                      className={`UserList__container__list__item`}
                    >
                      <div>
                        <img
                          data-id={idx}
                          data-name={room.name.split("& ").pop()}
                          src={'https://i.pinimg.com/originals/49/a7/72/49a7722d61e9e38a7d2f45836a5139e9.jpg'}
                          className={`UserList__container__list__item__avatar`}
                          alt="avatar"
                        />
                      </div>
                      <div
                        data-id={idx}
                        data-name={room.name.split("& ").pop()}
                        className={`UserList__container__list__item__content`}
                      >
                        <p
                          data-id={idx}
                          data-name={room.name.split("& ").pop()}
                          className={`UserList__container__list__item__content__name`}
                        >
                          {room.name.split("& ").pop() //name of other person
                          }
                        </p>
                        <p
                          data-id={idx}
                          data-name={room.name.split("& ").pop()}
                          className={`UserList__container__list__item__content__text`}
                        >
                          {/* Joe: Not bad, how was yours? */}
                        </p>
                      </div>
                      <div
                        data-id={idx}
                        data-name={room.name.split("& ").pop()}
                        className={`UserList__container__list__item__time`}
                      >
                        9:38 AM
                      </div>
                    </li>
                  </div>
                ))
              : null}
          </ul>
        </div>
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
        <Webcam className='video'/>
      </div>
    );
  }
}

export default UserList;
