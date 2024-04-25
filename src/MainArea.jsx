
import PropTypes from 'prop-types';

import HomePage from './HomePage';
import About from './About';
import CardPage from './CardPage';

import History from './History';
import TestWatermelon from './TestWatermelon';
import OpeningHours from './OpeningHours';
import StoreDetails from './StoreDetails';

function MainArea({ page }) {
  let content;
  switch (page) {
      case 'Home':
          content = <HomePage />;
          break;
      case 'About Us':
          content = <About />;
          break;
      case 'History':
          content = <History />;
          break;
      case 'Food Information':
          content = <CardPage />;
          break;
      case 'test-watermelon':
          content = <TestWatermelon />;
          break;
      case 'Opening Hours':
          content = <OpeningHours />;
          break;
      case 'Store Details':
          content = <StoreDetails />;
          break;
      default:
          content = <HomePage />;
  }

  return <main>{content}</main>;
}

MainArea.propTypes = {
  page: PropTypes.string.isRequired, 
};
export default MainArea;
