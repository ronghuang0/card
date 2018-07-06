/* eslint-disable */
import React from 'react';
import { Motion, spring } from 'react-motion';
import PropTypes from 'prop-types';

export default class Card extends React.Component {
  static propTypes = {
    index: PropTypes.number,
    y: PropTypes.number,
    current: PropTypes.number,
    n: PropTypes.number,
    direction: PropTypes.string,
  }
  transitionCard = () => {
    const { index, y, current, n, direction } = this.props;
    if(n === 2 && current === 1) {
      if(i===0) {

      } else if(i===1) {

      }
    } else if(n === 2 && current === 0) {
      if(i===0) {

      } else if(i===1) {

      }
    }
    // return styles
  }
  // you can't return a compo since we dont want it to rerender. we must
  // return the styles. maybe change the function in the component.
  render() {
    if () {

    } else if( ) {

    }
    return (
      this.transitionCard()
      // <Motion style={style}>
      //   {({y}) =>
      //     <div
      //       className={viewPortStyle.card}
      //       style={{
      //         transform: `translate3d(0, ${y}px, 0)`
      //       }}
      //       >
      //         {1}
      //       </div>
      //   }
      // </Motion>
    );
  }
}
