import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import Demo from '../../../src/assests/om3.jpg'
import Demo1 from '../../../src/assests/om4.jpg'
import Demo2 from '../../../src/assests/om2.jpg'

const items = [
  {
    src: Demo,
    
  },
  {
    src: Demo1,
   
  },
  {
    src: Demo2,
    
  }
];

const HomeIndex = () => <UncontrolledCarousel items={items} />;

export default HomeIndex;