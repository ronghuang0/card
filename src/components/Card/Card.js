/* eslint-disable */
import React from 'react';
import { Motion, spring } from 'react-motion';
import cardStyle from './Card.css';

const springConfig = { stiffness: 300, damping: 50 };
const CARD_DELTA = 100;

export default class Demo extends React.Component {
  state = {
    mouseY: CARD_DELTA,
    isPressed: false,
    pageY: 0,
    originalPageY: 0,
    expanded: false,
    pos: 1,
  };

  componentDidMount() {
    window.addEventListener('touchmove', this.handleTouchMove, { passive: false });
    window.addEventListener('touchend', this.handleTouchEnd);
  }

  handleTouchStart = (y, e) => {
    const { pageY } = e.touches[0];
    const { pos } = this.state;
    this.setState({
      pageY,
      mouseY: CARD_DELTA*pos,
      isPressed: true,
      startPageY: pageY,
    });
  };

  handleTouchMove = (e) => {
    if(!this.state.expanded) {
      e.preventDefault();
    }
    const { pageY } = e.touches[0];
    const { isPressed, startPageY, pos } = this.state;
    if (isPressed) {
      const mouseY = pageY-startPageY+CARD_DELTA*pos;
      this.setState({ mouseY, pageY });
      console.log('mouseY', mouseY);
    }
  };

  handleTouchEnd = () => {
    const { mouseY } = this.state;
    this.setState({ isPressed: false });
    let pos;
    if (mouseY <50) {
      pos = 0;
    } else {
      pos = 1;
    }
    this.setState({ isPressed: false, pos })
  };

  toggleExpand = () => {
    this.setState({ expanded: !this.state.expanded })
  }

  render() {
    const {
      mouseY,
      isPressed,
      originalPageY,
      pageY,
    } = this.state;
    let y;
    if(isPressed) {
      y = mouseY;
    } else {
      if(mouseY < 50) {
        y = spring(0, springConfig);
      } else {
        y = spring(CARD_DELTA, springConfig);
      }
    };
    const style = { y };
    console.log('y', y);

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
                onTouchStart={this.handleTouchStart.bind(null, y)}
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
