/* eslint-disable */
import React from 'react';
import { Motion, spring } from 'react-motion';
import cardStyle from './Card.css';

const springConfig = { stiffness: 300, damping: 50 };
const yMin = 0;
const yMax = 100;
//y is downward translation
export default class Demo extends React.Component {
  state = {
    isPressed: false,
    current: 0,
    prevPageY: 0,
    pageY: 0,
    expanded: false,
    y: yMax,
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
      prevPageY,
      // current,
      y,
    } = this.state;
    const delta = prevPageY - pageY;
    // positive delta means scroll up = smaller y
    console.log('delta', delta);
    // if (current === 0) {
      if(isPressed) {
        if(delta > 0 && y > yMin) {
          y = y-delta;
        } else if(delta < 0 && y < yMax) {
          y = y-delta;
        }
      } else {
        if(delta > 0) {
          if(y < 75) {
            y = spring(yMin, springConfig);
          } else {
            y = spring(yMax, springConfig);
          }
        } else {
          if(y > 25) {
            y = spring(yMax, springConfig);
          } else {
            y = spring(yMin, springConfig);
          }
        }
      }
    // }
    // if (current === 1) {
    //
    // }
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
