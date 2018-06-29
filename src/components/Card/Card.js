/* eslint-disable */
import React from 'react';
import { Motion, spring } from 'react-motion';
import cardStyle from './Card.css';

const springConfig = { stiffness: 300, damping: 50 };
const yMin = .05*window.innerHeight;
const yMax = window.innerHeight-150 - .1*window.innerHeight;
const yUpThreshold = window.innerHeight*.75;
const yDownThreshold = window.innerHeight*.25;
//y is downward translation
export default class Card extends React.Component {
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
    const delta = prevPageY - pageY;
    let y = this.state.y;
    // console.log('pageY', pageY);
    // console.log('prevPagePageY', prevPageY);
    // console.log('delta', delta);
    if(delta > 0 && y > yMin) {
      y = y-delta;
      if (y < yMin) {
        y = yMin;
      }
    } else if(delta < 0 && y < yMax) {
      y = y-delta;
      if (y > yMax) {
        y = yMax;
      }
    }
    // console.log('y', y);
    this.setState({ pageY: pageY, y });
  };

  handleTouchEnd = () => {
    const { pageY, current } = this.state;
    let y;
    let _current;
    if(pageY < yDownThreshold) {
      y = yMin;
    } else if(pageY > yUpThreshold) {
      y = yMax;
    } else {
      if(current === 0) {
        _current = 1;
      } else {
        _current = 0;
      }
    }
    this.setState({ isPressed: false, y, current: _current});
  };

  toggleExpand = () => {
    this.setState({ expanded: !this.state.expanded })
  }

  render() {
    const {
      isPressed,
      pageY,
      y,
      current,
    } = this.state;
    // const delta = prevPageY - pageY;
    // positive delta means scroll up = smaller y
    // console.log('delta', delta);
      // if(isPressed) {
      //   if(delta > 0 && y > yMin) {
      //     y = y-delta;
      //   } else if(delta < 0 && y < yMax) {
      //     y = y-delta;
      //   }
      // } else {
      //   if(delta > 0) {
      //     if(y < 75) {
      //       y = spring(yMin, springConfig);
      //     } else {
      //       y = spring(yMax, springConfig);
      //     }
      //   } else {
      //     if(y > 25) {
      //       y = spring(yMax, springConfig);
      //     } else {
      //       y = spring(yMin, springConfig);
      //     }
      //   }
      // }

    let style0;
    let style1;
    if(isPressed) {
      style0 = { y };
      style1 = { y };
    } else {
      let _y;
      if(pageY < yDownThreshold) {
        _y = spring(yMin, springConfig);
      } else if(pageY > yUpThreshold) {
        _y = spring(yMax, springConfig);
      } else {
        if( current === 0) {
          _y = spring(yMin, springConfig);
        } else {
          _y = spring(yMax, springConfig);
        }
      }
      style0 = { y: _y };
      style1 = { y: _y };
    }
    return (
      <div className={cardStyle.demoOuter}>
        <div className={cardStyle.demo}>
          <Motion style={style0}>
            {({y}) => {
              const scaleX = (y-yMin)/(yMax-yMin)*.05+.95;
              console.log('scale', scaleX);
              return (
                <div
                  className={cardStyle.demoItem}
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
                className={cardStyle.demoItem1}
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
{/*
<div onClick={this.toggleExpand}> expand </div> */}
