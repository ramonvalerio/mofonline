import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import styled from "@emotion/styled";

interface Video {
  id: number;
  title: string;
  src: string;
}

const videos: Video[] = [
    {
      id: 1,
      title: 'Exemplo de Vídeo 1',
      src: 'https://www.youtube.com/embed/qiUiM8vM9LM'
    },
    {
      id: 2,
      title: 'Exemplo de Vídeo 2',
      src: 'https://www.youtube.com/embed/ExemploVideo2'
    },
    {
      id: 3,
      title: 'Exemplo de Vídeo 3',
      src: 'https://www.youtube.com/embed/ExemploVideo3'
    },
    {
      id: 4,
      title: 'Exemplo de Vídeo 4',
      src: 'https://www.youtube.com/embed/ExemploVideo4'
    },
    {
      id: 5,
      title: 'Exemplo de Vídeo 5',
      src: 'https://www.youtube.com/embed/ExemploVideo5'
    },
    {
      id: 6,
      title: 'Exemplo de Vídeo 6',
      src: 'https://www.youtube.com/embed/ExemploVideo6'
    },
    {
      id: 7,
      title: 'Exemplo de Vídeo 7',
      src: 'https://www.youtube.com/embed/ExemploVideo7'
    },
    {
        id: 8,
        title: 'Exemplo de Vídeo 8',
        src: 'https://www.youtube.com/embed/ExemploVideo7'
      },
  ];
  

const VideoFrame = styled('iframe')({
  width: '100%',
  height: '100%',
  border: 0,
});

const VideoCarousel: React.FC = () => {
  return (
    <Box p={2}>
      <Grid container spacing={2} justifyContent="center">
        {videos.map((video) => (
          <Grid key={video.id} item xs={12} sm={6} md={4} lg={3}>
            <Paper elevation={3} sx={{ height: '100%', position: 'relative' }}>
              <VideoFrame
                title={video.title}
                src={video.src}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <Box p={1} sx={{ position: 'absolute', bottom: 0, width: '100%' }}>
                <Typography variant="subtitle1" align="center">
                  {video.title}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default VideoCarousel;
