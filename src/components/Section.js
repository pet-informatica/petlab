import React, { Component } from "react";
import {
  Container,
  Header,
  Icon,
  Segment,
  Image,
  Grid
} from "semantic-ui-react";
import "../css/section.css";

export default class Section extends Component {
  render() {
    const center = this.props.floated === "center";
    const left =
      this.props.floated === "left"
        ? this.renderImageColumn()
        : this.renderTextColumn();
    const right =
      this.props.floated === "left"
        ? this.renderTextColumn()
        : this.renderImageColumn();
    console.log('penis')
    return (
      <Container text className="section-container">
        <Header
          textAlign="center"
          as="h2"
          color="orange"
        >
          {this.props.title}
          {this.props.icon != null && (
            <Icon name={this.props.icon} color="grey" />
          )}
        </Header>
        <Segment>
          <br/>
          <Grid stackable columns={center ? 1:2}>
            <Grid.Row>
              {left}
              {center ? null:right}
            </Grid.Row>
          </Grid>
          <br/>
        </Segment>
      </Container>
    );
  }

  renderTextColumn = () => {
    const center = this.props.floated === "center";
    return <Grid.Column textAlign="justified" width={center ? 16:12}>{this.props.children}</Grid.Column>;
  };

  renderImageColumn = () => {
    return (
      <Grid.Column width={4} textAlign="center">
        <Image centered size="small" src={this.props.image} />
      </Grid.Column>
    );
  };
}
