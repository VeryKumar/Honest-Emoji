import React, { Component } from "react";
const tokenURL =
  "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/aa2b3fbb-81a5-438c-95ae-7de73ab855e9/token";

export class Signup extends Component {
  state = {
    username: ""
  };

  handleChange = event => {
    this.setState({
      username: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.username.includes(" ") || this.state.username.length > 60) {
      alert(
        "Invalid Username. Username must not contain spaces and be less than 60 characters in length"
      );
    } else {
      fetch(tokenURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          grant_type: "client_credentials",
          user_id: this.state.username
        })
      })
        .then(res => res.json())
        .then(response => {
          console.log(response);
          //   if (response.errors){
          //     alert(response.errors)
          //   } else {
          //     this.props.setUser(response.user)
          //     localStorage.token = response.token
          //   }
        });
    }
  };

  render() {
    return (
      <div className="signup">
        <form className="auth-form" onSubmit={this.handleSubmit}>
          <input
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
            placeholder="Username"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Signup;
