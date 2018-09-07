import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import {
  Container,
  Header,
  Grid,
  Segment,
  Menu,
  Divider,
  Button,
  Icon,
  Flag,
  Image,
  Item,
  Tab
} from "semantic-ui-react";

const panes = [
  { menuItem: "Contact Us", render: () => <Tab.Pane>Contact Us</Tab.Pane> },
  { menuItem: "Locate Us", render: () => <Tab.Pane>Locate Us</Tab.Pane> },
  { menuItem: "Like Us", render: () => <Tab.Pane>Like Us</Tab.Pane> }
];

class HomeScreen extends Component {
  state = {
    activeItem: "editorial"
  };
  handleItemClick = () => {
    console.log("clicked");
  };
  render() {
    const { activeItem } = this.state;
    return (
      <Container>
        <Header
          as="h1"
          content="B U L B T E C H"
          inverted
          color="blue"
          style={{
            fontSize: "4em",
            fontWeight: "normal",
            marginBottom: 0,
            marginTop: "1em"
          }}
        />

        <Menu>
          <Menu.Menu>
            <Menu.Item onClick={() => this.props.history.push("/js")}>
              <p>Info</p>
            </Menu.Item>
          </Menu.Menu>
          <Menu.Menu position="right">
            <Menu.Item onClick={() => this.props.history.push("/js")}>
              Codes
            </Menu.Item>
          </Menu.Menu>
        </Menu>

        <Grid>
          <Grid.Column width={10}>
            <div>
              <h3>COURSES</h3>
            </div>
            <Segment>
              <Item.Group>
                <Item>
                  <Item.Image
                    size="tiny"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2000px-React-icon.svg.png"
                  />

                  <Item.Content>
                    <Item.Header as="a">GET STARTED WITH REACT JS</Item.Header>
                    <Item.Description>
                      <p>Learn React js to build your own web app</p>
                    </Item.Description>
                    <Item.Extra>Additional Details</Item.Extra>
                  </Item.Content>
                </Item>
                <Divider />
                <Item>
                  <Item.Image
                    size="tiny"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2000px-React-icon.svg.png"
                  />

                  <Item.Content>
                    <Item.Header as="a">GET STARTED WITH REACT JS</Item.Header>
                    <Item.Description>
                      <Image
                        width="150"
                        height="150"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2000px-React-icon.svg.png"
                      />
                      <p>Learn React js to build your own web app</p>
                    </Item.Description>
                    <Item.Extra>Additional Details</Item.Extra>
                  </Item.Content>
                </Item>
                <Divider />
                <Item>
                  <Item.Image
                    size="tiny"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2000px-React-icon.svg.png"
                  />

                  <Item.Content>
                    <Item.Header as="a">Item Header</Item.Header>
                    <Item.Meta>Item Meta Description</Item.Meta>
                    <Item.Description>
                      <Image
                        width="150"
                        height="150"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2000px-React-icon.svg.png"
                      />
                    </Item.Description>
                    <Item.Extra>Item Extra Additional Details</Item.Extra>
                  </Item.Content>
                </Item>
              </Item.Group>
            </Segment>
          </Grid.Column>

          <Grid.Column width={6}>
            <Tab panes={panes} />

            <Divider horizontal>SYLLABUS</Divider>
            <Menu pointing vertical>
              <Menu.Item as={Link} name="profile" to="/state">
                <Icon name="user" />
                State
              </Menu.Item>
              <Menu.Item as={Link} name="profile" to="/state">
                <Icon name="user" />
                State
              </Menu.Item>
              <Menu.Item as={Link} name="profile" to="/state">
                <Icon name="user" />
                State
              </Menu.Item>
              <Menu.Item as={Link} name="profile" to="/state">
                <Icon name="user" />
                State
              </Menu.Item>
              <Menu.Item as={Link} name="profile" to="/state">
                <Icon name="user" />
                State
              </Menu.Item>
            </Menu>
            <Flag name="sg" />
            <Segment.Group>
              <Segment>D Segment</Segment>
              <Segment>E Segment</Segment>
            </Segment.Group>
          </Grid.Column>
        </Grid>

        <div className="ui center aligned grid">
          <p>Copyright 2018 Bulbtech LLC</p>
        </div>
      </Container>
    );
  }
}

export default withRouter(HomeScreen);
