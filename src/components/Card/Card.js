/* eslint-disable */
import React from 'react';
import { Motion, spring } from 'react-motion';
import cardStyle from './Card.css';
import range from 'lodash.range';

const springConfig = {stiffness: 300, damping: 50};
const itemsCount = 2;

export default class Demo extends React.Component {
  state = {
    topDeltaY: 0,
    mouseY: 0,
    isPressed: false,
    originalPosOfLastPressed: 0,
    pageY: 0,
    originalPageY: 0,
  };

  componentDidMount() {
    window.addEventListener('touchmove', this.handleTouchMove, { passive: false });
    window.addEventListener('touchend', this.handleTouchEnd);
    window.addEventListener('touchstart', this.touchStartPreventDefault, { passive: false});
  };

  touchStartPreventDefault = (e) => {
    e.preventDefault();
  }

  handleTouchStart = (pos, pressY, e) => {
    const pageY = e.touches[0].pageY;
    this.setState({
      topDeltaY: pageY - pressY,
      mouseY: pressY,
      isPressed: true,
      originalPosOfLastPressed: pos,
      originalPageY: pageY,
    });
  };

  handleTouchMove = (e) => {
    const pageY = e.touches[0].pageY;
    const {isPressed, topDeltaY, originalPosOfLastPressed} = this.state;
    if (isPressed) {
      const mouseY = pageY - topDeltaY;
      this.setState({mouseY: mouseY, pageY: pageY});
    }
  };

  handleTouchEnd = (e) => {
    this.setState({isPressed: false});
  };

  render() {
    const {mouseY, isPressed, originalPosOfLastPressed, originalPageY, pageY} = this.state;
    console.log('mouseY', mouseY);
    console.log('pageY', pageY);

    return (
      <div className={cardStyle.demoOuter}>
        <div className={cardStyle.demo}>
          {range(itemsCount).map(i => {
            let style;
            if (i === 0) {
              style = {
                  scale: spring(1, springConfig),
                  shadow: spring(1, springConfig),
                  y: spring(i * 100, springConfig),
                };
            }
            if (i === 1) {
              if (originalPosOfLastPressed === 1 && isPressed) {
                style = {
                  scale: spring(1.1, springConfig),
                  shadow: spring(16, springConfig),
                  y: mouseY,
                };
              } else {
                if(originalPageY - pageY > 50) {
                  style = {
                      scale: spring(1, springConfig),
                      shadow: spring(1, springConfig),
                      y: spring(0, springConfig),
                    };
                } else {
                  style = {
                    scale: spring(1, springConfig),
                    shadow: spring(1, springConfig),
                    y: spring(i * 100, springConfig),
                  };
                }
              }
            }
            return (
              <Motion style={style} key={i}>
                {({scale, shadow, y}) =>
                  <div
                    onTouchStart={this.handleTouchStart.bind(null, i, y)}
                    className={cardStyle.demoItem}
                    style={{
                      boxShadow: `rgba(0, 0, 0, 0.2) 0px ${shadow}px ${2 * shadow}px 0px`,
                      transform: `translate3d(0, ${y}px, 0) scale(${scale})`,
                      WebkitTransform: `translate3d(0, ${y}px, 0) scale(${scale})`,
                      zIndex: i === originalPosOfLastPressed ? 99 : i,
                    }}>
                    {i + 1}
                  </div>
                }
              </Motion>
            );
          })}
        </div>
      </div>
    );
  };
}
