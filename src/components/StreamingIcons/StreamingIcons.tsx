import React from 'react';
import {
  FaSpotify,
  FaYoutube,
  FaApple,
  FaAmazon,
  FaDeezer,
} from 'react-icons/fa';

const StreamingIcons = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-around',
      padding: '8px 0',
    }}
  >
    <FaSpotify size={24} />
    <FaYoutube size={24} />
    <FaApple size={24} />
    <FaAmazon size={24} />
    <FaDeezer size={24} />
  </div>
);

export default StreamingIcons;
