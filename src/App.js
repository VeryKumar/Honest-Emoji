import React from "react";
import {
  withChatkit,
  ChatkitProvider,
  TokenProvider
} from "@pusher/chatkit-client-react";

import "./App.css";
import Chat from "./Chat";
import UserList from "./UserList";
import Login from "./Login";
import chatkitLogo from "./chatkit-logo.svg";

const instanceLocator = "v1:us1:aa2b3fbb-81a5-438c-95ae-7de73ab855e9";

const tokenProvider = new TokenProvider({
  url:
    "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/aa2b3fbb-81a5-438c-95ae-7de73ab855e9/token"
});

// const TestComponent = withChatkit(props => {
//   let loading = props.chatkit.isLoading; // True when the SDK is connected to Chatkit
//   let currentUserObj = props.chatkit.currentUser; // Reference to the CurrentUser object
//   let chatManager2 = props.chatkit.chatManager; // Reference to the ChatManager object
// });

const UserListWithUserObject = withChatkit(props => {
  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get("userId");
  const otherUserId = urlParams.get("otherUserId");
  return (
    <UserList
      currentUser={props.chatkit.currentUser}
      userId={userId}
      otherUserId={otherUserId}
    />
  );
});

function App(props) {
  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get("userId");
  const otherUserId = urlParams.get("otherUserId");

  return (
    <div className="App">
      {userId && otherUserId ? (
        <>
          <div className="App__chatwindow">
            <ChatkitProvider
              instanceLocator={instanceLocator}
              tokenProvider={tokenProvider}
              userId={userId}
            >
              <UserListWithUserObject />
              <Chat otherUserId={otherUserId} />
            </ChatkitProvider>
          </div>
        </>
      ) : (
        <Login />
      )}
      <div className="App__backdrop">
        <img
          className="App__backdrop__logo"
          src={"https://i.ibb.co/jv4Yhyw/Asset-3-4x.png"}
          alt="Chatkit logo"
        />
      </div>
    </div>
  );
}

export default App;
