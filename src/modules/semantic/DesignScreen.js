import React, { Component } from "react";
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

class DesignScreen extends Component {
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
        <Container text padding="200px" background-color="black">
          <Header
            as="h1"
            content="Imagine-a-Company"
            style={{
              fontSize: "4em",
              fontWeight: "normal",
              marginBottom: 0,
              marginTop: "3em"
            }}
          />
          <Header
            as="h2"
            color="yellow"
            content="Do whatever you want when you want to."
            inverted
            style={{
              fontSize: "1.7em",
              fontWeight: "normal",
              marginTop: "1.5em"
            }}
          />
          <Button primary size="huge">
            Get Started
            <Icon name="right arrow" />
          </Button>
        </Container>
        <Divider />
        <Grid>
          <Grid.Column width={10}>
            <div>Grid Column 10</div>
            <Segment>
              <Item.Group>
                <Item>
                  <Item.Image
                    size="tiny"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2000px-React-icon.svg.png"
                  />

                  <Item.Content>
                    <Item.Header as="a">Header</Item.Header>
                    <Item.Meta>Description</Item.Meta>
                    <Item.Description>
                      <Image
                        width="150"
                        height="150"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2000px-React-icon.svg.png"
                      />
                    </Item.Description>
                    <Item.Extra>Additional Details</Item.Extra>
                  </Item.Content>
                </Item>

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
            <div>Grid Column 6</div>
            <Tab panes={panes} />

            <Divider horizontal>Divide</Divider>
            <Menu pointing vertical>
              <Menu.Item
                name="home"
                active={activeItem === "home"}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name="messages"
                active={activeItem === "messages"}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name="friends"
                active={activeItem === "friends"}
                onClick={this.handleItemClick}
              />
            </Menu>
            <Flag name="sg" />
            <Segment.Group>
              <Segment>D Segment</Segment>
              <Segment>E Segment</Segment>
            </Segment.Group>
            <Segment.Group>
              <Segment>F Segment</Segment>
              <Segment>G Segment</Segment>
            </Segment.Group>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default DesignScreen;
