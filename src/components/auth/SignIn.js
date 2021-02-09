import React from "react";

export default class SignIn extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
    };
  }

  handleChange = (e) => {
    this.setState({ username: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    console.log('submit');
  };

  render() {
    return (
      <form className="signin-container" onSubmit={(e) => this.handleSubmit(e)}>
        <input
          type="text"
          placeholder="Choose username"
          ref={(input) => (this.username = input)}
          value={this.state.username}
          onChange={(e) => this.handleChange(e)}
        />
        <button type="submit">Sign In</button>
      </form>
    );
  }
}
