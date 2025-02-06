import React from 'react';
import { Box } from '@mui/material';
import {
  FaSpotify,
  FaYoutube,
  FaApple,
  FaAmazon,
  FaDeezer,
} from 'react-icons/fa';

const StreamingIcons = () => (
  <Box display="flex" justifyContent="space-around">
    <FaSpotify size={24} />
    <FaYoutube size={24} />
    <FaApple size={24} />
    <FaAmazon size={24} />
    <FaDeezer size={24} />
  </Box>
);

export default StreamingIcons;
