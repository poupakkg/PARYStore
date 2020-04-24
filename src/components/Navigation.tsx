import React from 'react';
import { Button, Sticky } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
//import Product from './Product';
//import ListingProducts from './ListingProducts';

const NavButtons = () => (

  <Sticky>
    <Button.Group size='huge' fluid color='violet'>
      <Button>PARYStore</Button>
      <Button  
      as={Link}
      to={`/ListingProducts`}
      content="GoToHomPage">Home
      </Button>

      <Button>Contact</Button>

      <Button
      as={Link}
      to={`/Product`}
      content="GoToProduct">Hello
      </Button>

      <Button>Logout</Button>

    </Button.Group>
  </Sticky>
    
  )

  export default NavButtons