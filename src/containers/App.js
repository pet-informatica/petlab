import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import Menus from "./Menus";
import Footer from "./Footer";
import Navbar from "../components/Navbar";
import Logo from "../components/Logo";

export default class App extends Component {
  render() {
    const sections = [
      {
        id: "sobre",
        header: "SOBRE",
        floated: "left",
        image:
          "https://res.cloudinary.com/dkbuneg9h/image/upload/v1532479276/PETLab_kfyqbc.svg",
        content: (
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut
            neque eget sapien luctus malesuada in id lacus. Etiam ultricies leo
            nunc, non volutpat erat eleifend ac. Praesent rhoncus vitae lorem
            eget accumsan. Donec eu venenatis urna. Suspendisse imperdiet sed
            tellus at posuere. Proin molestie tempor lectus, ac sagittis erat.
            Nullam pulvinar risus purus, sed iaculis libero pulvinar porttitor.
          </p>
        )
      },
      {
        id: "lika",
        header: "LIKA",
        floated: "right",
        image:
          "https://res.cloudinary.com/dkbuneg9h/image/upload/v1532479276/PETLab_kfyqbc.svg",
        content: (
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut
            neque eget sapien luctus malesuada in id lacus. Etiam ultricies leo
            nunc, non volutpat erat eleifend ac. Praesent rhoncus vitae lorem
            eget accumsan. Donec eu venenatis urna. Suspendisse imperdiet sed
            tellus at posuere. Proin molestie tempor lectus, ac sagittis erat.
            Nullam pulvinar risus purus, sed iaculis libero pulvinar porttitor.
          </p>
        )
      }
    ];

    return (
      <div>
        <div className="index-page">
          <Logo />
          <div className="index-navbar">
            <Container text>
              <Navbar />
            </Container>
          </div>
          <Container text>
            <Menus sections={sections} />
          </Container>
        </div>
        <Footer />
      </div>
    );
  }
}
