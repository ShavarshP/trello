import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export let name = "shah";

export class Classform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "********",
    };
  }

  changeHandler = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  changeHandlerPassword = (event) => {
    this.setState({
      password: this.state.password,
    });
  };
  login = (name) => {
    console.log("maladec");
    this.props.login(name);
  };

  render() {
    let join;
    if (this.state.name !== "") {
      join = (
        <NavLink to="trello">
          <button className="btn yellow darken-4" style={{ marginRight: 10 }}>
            <div onClick={() => this.login(this.state.name)}>join</div>
          </button>
        </NavLink>
      );
    } else {
      join = (
        <button className="btn yellow darken-4" style={{ marginRight: 10 }}>
          <div>join</div>
        </button>
      );
    }

    return (
      <div>
        <div className="col s6 offset-s3">
          <h1>select group</h1>
          <div className="card blue darken-1">
            <div className="card-content white-text">
              <span className="card-title">Select Group</span>
              <div>
                <div className="input-field">
                  <input
                    placeholder="Name"
                    id="mal"
                    type="text"
                    name="name"
                    className="yellow-input"
                    value={this.state.name}
                    onChange={this.changeHandler}
                  />
                  <label htmlFor="email">Name</label>
                </div>

                <div className="input-field">
                  <input
                    placeholder="Address"
                    id="pass"
                    type="text"
                    name="Entertheaddress"
                    className="yellow-input"
                    value={this.state.password}
                    onChange={this.changeHandlerPassword}
                  />
                  <label htmlFor="email">Enter the address</label>
                </div>
              </div>
            </div>
            <div className="card-action">
              <div> {join}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const Logi = (props) => {
  return (
    <div className="fatherHiddn">
      <div className="fatherHiddn2"></div>
      <Classform login={props.login} />
    </div>
  );
};

export default Logi;
