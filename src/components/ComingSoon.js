import React from 'react';
import Lottie from 'react-lottie';
import comingSoon from '../utils/coming-soon.json';

export default class ComingSoon extends React.Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: comingSoon
    };

    return (
      <div>
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
    );
  }
}
