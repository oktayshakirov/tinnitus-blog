import React from 'react';
import { Box } from '@mui/material';
import {
  FaSpotify,
  FaYoutube,
  FaApple,
  FaAmazon,
  FaDeezer,
} from 'react-icons/fa';
import Icon from '@components/Icon';

const StreamingIcons = () => (
  <Box display="flex" justifyContent="space-around">
    <Icon icon={FaSpotify} size={24} />
    <Icon icon={FaYoutube} size={24} />
    <Icon icon={FaApple} size={24} />
    <Icon icon={FaAmazon} size={24} />
    <Icon icon={FaDeezer} size={24} />
  </Box>
);

export default StreamingIcons;
