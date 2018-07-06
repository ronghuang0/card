/* eslint-disable */
import React from 'react';
import { Motion, spring } from 'react-motion';
import viewPortStyle from './ViewPort.css';

const springConfig = { stiffness: 300, damping: 50 };
const yMin = .05*window.innerHeight;
const yMax = window.innerHeight-150 - .1*window.innerHeight;
const threshold = (yMax+yMin)/2;
// const yUpThreshold = window.innerHeight*.75;
// const yDownThreshold = window.innerHeight*.25;
//y is downward translation
export default class ViewPort extends React.Component {
  state = {
    isPressed: false,
    pageY: yMax,
    y: yMax,
    current: 0,
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
      pageY,
    });
  };

  handleTouchMove = (e) => {
    if(!this.state.expanded) {
      e.preventDefault();
    }
    const { pageY } = e.touches[0];
    const prevPageY = this.state.pageY;
    const delta = pageY - prevPageY;
    // positive delta is dragging down
    let y = this.state.y;
    y = y + delta;
    if (y < yMin) {
      y = yMin;
    }
    if (y > yMax) {
      y = yMax;
    }
    let direction;
    if (delta > 0) {
      direction = 'down';
    } else {
      direction = 'up';
    }
    this.setState({ pageY: pageY, y, direction });
  };

  handleTouchEnd = () => {
    const { pageY, y } = this.state;
    let current;
    let _y;
    if(y > threshold) {
      current = 0;
      _y = yMax;
    } else {
      current = 1;
      _y = yMin;
    }
    // we set y here. in render it will see that it is no longer pressed so
    // it will transition to y rather than go directly.
    this.setState({ isPressed: false, y: _y, current });
  };

  render() {
    const {
      isPressed,
      pageY,
      y,
      current,
    } = this.state;

    let style0;
    let style1;

    if(isPressed) {
      style0 = { y };
      style1 = { y };
    } else {
      if(y < threshold) {
        style0 = { y: spring(yMin, springConfig) };
        style1 = { y: spring(yMin, springConfig) };
      } else {
        style0 = { y: spring(yMax, springConfig) };
        style1 = { y: spring(yMax, springConfig) };
      }
    }
    return (
      <div className={viewPortStyle.demoOuter}>
        <div className={viewPortStyle.demo}>
          <Motion style={style0}>
            {({y}) => {
              const scaleX = (y-yMin)/(yMax-yMin)*.05+.95;
              return (
                <div
                  className={viewPortStyle.card0}
                  style={{
                    transform: `scaleX(${scaleX})`
                  }}
                  >
                    {0}
                  </div>
              )
            }}
          </Motion>
          <Motion style={style1}>
            {({y}) =>
              <div
                className={viewPortStyle.card1}
                style={{
                  transform: `translate3d(0, ${y}px, 0)`
                }}
                >
                  {1}
                </div>
            }
          </Motion>
        </div>
      </div>
    );
  };
}
