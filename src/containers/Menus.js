import React, { Component } from "react";
import Section from "../components/Section";

export default class Menus extends Component {
  render() {
    return (
      <div>
        {this.props.sections.map((section, i) => (
          <div className="menus-section" key={i}>
            <div className="index-anchor" id={section.id} />
            <Section
              floated={section.floated}
              title={section.header}
              image={section.image}
            >
              {section.content}
            </Section>
          </div>
        ))}
      </div>
    );
  }
}
