import React from 'react';
import Lottie from 'react-lottie';
import comingSoon from '../assets/coming-soon.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: comingSoon
};
const ComingSoon = () => {
  return (
    <div>
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
}

export default ComingSoon
