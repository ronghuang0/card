/* eslint-disable */
import React from 'react';
import { Motion, spring } from 'react-motion';
import cardStyle from './Card.css';

const springConfig = { stiffness: 300, damping: 50 };
const yMin = 0;
const yMax = 100;
//y is downward translation
export default class Card2 extends React.Component {
  state = {
    isPressed: false,
    startPageY: 0,
    pageY: 0,
    expanded: false,
  };

  componentDidMount() {
    window.addEventListener('touchmove', this.handleTouchMove, { passive: false });
    window.addEventListener('touchstart', this.handleTouchStart, { passive: false });
    window.addEventListener('touchend', this.handleTouchEnd);
  }

  handleTouchStart = (e) => {
    const { pageY } = e.touches[0];
    this.setState({
      isPressed: true,
      prevPageY: pageY,
      pageY,
    });
  };

  handleTouchMove = (e) => {
    if(!this.state.expanded) {
      e.preventDefault();
    }
    const { pageY } = e.touches[0];
    this.setState({ pageY });
  };

  handleTouchEnd = () => {
    this.setState({ isPressed: false });
  };

  toggleExpand = () => {
    this.setState({ expanded: !this.state.expanded })
  }

  render() {
    const {
      isPressed,
      pageY,
      startPageY,
    } = this.state;
    const delta = startPageY - pageY;
    // positive delta means scroll up = smaller y
    console.log('delta', delta);
    
    const style = { y };

    return (
      <div className={cardStyle.demoOuter}>
        <div className={cardStyle.demo}>
          <div className={cardStyle.demoItem}>
            {0}
          </div>
          <Motion style={style}>
            {({y}) =>
              <div
                className={cardStyle.demoItem}
                style={{
                  transform: `translate3d(0, ${y}px, 0)`
                }}
              >
                {1}
              </div>
            }
          </Motion>
        </div>
        <div onClick={this.toggleExpand}> expand </div>
      </div>
    );
  };
}
