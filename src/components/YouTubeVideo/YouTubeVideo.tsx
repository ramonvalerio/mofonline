import React from 'react';
import { Paper } from '@mui/material';

interface YouTubeVideoProps {
  videoId: string;
  width?: number;
  height?: number;
}

const YouTubeVideo: React.FC<YouTubeVideoProps> = ({
  videoId,
  width = 640,
  height = 480,
}) => {
  const videoSrc = `https://www.youtube.com/embed/${videoId}`;

  return (
    <Paper elevation={2}>
      <iframe
        width={width}
        height={height}
        src={videoSrc}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube Video"
      ></iframe>
    </Paper>
  );
};

export default YouTubeVideo