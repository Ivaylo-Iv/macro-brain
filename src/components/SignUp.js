import React from "react";
import "../style/signIn.css";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: "",
    };
  }

  onNameChange = (e) => {
    this.setState({ name: e.target.value });
  };

  onEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };

  onPasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  onSubmitSignUp = async (e) => {
    e.preventDefault();
    console.log(this.state);
    const request = await fetch("http://192.168.1.183:3000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      }),
    });
    const data = await (await request).json();
    if (data) {
      this.props.loadUser(data);
      this.props.onRouteChange("home");
    }
  };

  render() {
    const { onRouteChange } = this.props;
    return (
      <div className="wrapper-s">
        <main className="pa4  black-80">
          <form className="measure center">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Sign Up</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f3" htmlFor="name">
                  Name
                </label>
                <input
                  className="text-name-i pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="name"
                  id="name"
                  onChange={this.onNameChange}
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f3" htmlFor="email-address">
                  Email
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={this.onEmailChange}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f3" htmlFor="password">
                  Password
                </label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.onPasswordChange}
                />
              </div>
            </fieldset>
            <div className="flex-options">
              <div className="">
                <input
                  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                  type="submit"
                  value="Sign up"
                  onClick={this.onSubmitSignUp}
                />
              </div>
              <div className="alternative-text lh-copy mt3">
                <input
                  style={{
                    border: "none",
                    background: "transparent",
                    color: "white",
                  }}
                  type="submit"
                  value="Sign in"
                  className="f6 link dim black db"
                  onClick={() => onRouteChange("signin")}
                />
              </div>
            </div>
          </form>
        </main>
      </div>
    );
  }
}

export default SignUp;
