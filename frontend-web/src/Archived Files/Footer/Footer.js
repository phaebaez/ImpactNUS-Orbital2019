import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

class Footer extends Component {
  state = { activeItem: 'About' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
    //     <Segment inverted vertical style={{ padding: '5em 0em' }}>
    //   <Container>
    //     <Grid divided inverted stackable>
    //       <Grid.Row>
    //         <Grid.Column width={3}>
    //           <Header inverted as='h4' content='About' />
    //           <List link inverted>
    //             <List.Item as='a'>Sitemap</List.Item>
    //             <List.Item as='a'>Contact Us</List.Item>
    //             <List.Item as='a'>Religious Ceremonies</List.Item>
    //             <List.Item as='a'>Gazebo Plans</List.Item>
    //           </List>
    //         </Grid.Column>
    //         <Grid.Column width={3}>
    //           <Header inverted as='h4' content='Services' />
    //           <List link inverted>
    //             <List.Item as='a'>Banana Pre-Order</List.Item>
    //             <List.Item as='a'>DNA FAQ</List.Item>
    //             <List.Item as='a'>How To Access</List.Item>
    //             <List.Item as='a'>Favorite X-Men</List.Item>
    //           </List>
    //         </Grid.Column>
    //         <Grid.Column width={7}>
    //           <Header as='h4' inverted>
    //             Footer Header
    //           </Header>
    //           <p>
    //             Extra space for a call to action inside the footer that could help re-engage users.
    //           </p>
    //         </Grid.Column>
    //       </Grid.Row>
    //     </Grid>
    //   </Container>
    // </Segment>
      <Menu borderless position='left'>
        <Menu.Item name='About' active={activeItem === 'About'} onClick={this.handleItemClick}>
            <Link to="/about">
                <span className="link dib dim mr3 mr4-ns">About</span>
            </Link> 
        </Menu.Item>
        <Menu.Item name='How it Works' active={activeItem === 'How it Works'} onClick={this.handleItemClick}>
            <Link to="/howitworks">
                <span className="link dib dim mr3 mr4-ns">How It Works</span>
            </Link> 
        </Menu.Item>
        <Menu.Item name='GitHub' active={activeItem === 'GitHub'} onClick={this.handleItemClick}>
            <Link to="/github">
                <span className="link dib dim mr3 mr4-ns">GitHub</span>
            </Link>
        </Menu.Item>
        <Menu.Item name='FAQ' active={activeItem === 'FAQ'} onClick={this.handleItemClick}>
            <Link to="/faq">
                <span className="link dib dim mr3 mr4-ns">FAQ</span>
            </Link>
        </Menu.Item>
        <Menu.Item name='Contact Us' active={activeItem === 'Contact Us'} onClick={this.handleItemClick}>
            <Link to="/contactus">
                <span className="link dib dim mr3 mr4-ns">Contact Us</span>
            </Link>
        </Menu.Item>
      </Menu>
    )
  }
}

export default Footer;