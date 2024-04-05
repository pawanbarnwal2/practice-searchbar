import React, { Component } from "react";
import ImageUpload from "../components/ImageUpload";
import Input from "../components/Input";
import "../components/Input/input.css";
import { Button } from "@mui/material";

type State = {
  name: string;
  email: string;
};
type Props = {};

class LoginPage extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      name: "Hello login",
      email: "",
    };
    this.handleFunction = this.handleFunction.bind(this);
  }

  handleFunction() {
    this.setState({ name: "rohan" });
  }

  render() {
    return (
      <form className="form-container">
        <Input
          type="text"
          element="input"
          label="User Name"
          placeholder="Enter username/ mail"
          inputId={"userName"}
        />

        <Input
          type="text"
          element="input"
          label="Password"
          placeholder="Enter Password"
          inputId={"password"}
        />
        <Input
          type="text"
          element="input"
          label="Email"
          placeholder="Enter Email"
          inputId={"email"}
        />
        <Input
          element="textarea"
          type="textarea"
          placeholder="Write review"
          label="Review"
          inputId="review"
        />

        <div className="container-upload">
          <ImageUpload />
        </div>

        <Input type="submit" element="input"></Input>
      </form>
    );
  }
}

export default LoginPage;
