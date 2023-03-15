import { Container, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import StarIcon from '@mui/icons-material/Star';
import YouTubeVideo from '../YouTubeVideo/YouTubeVideo';
import VideoCarousel from '../VideoCarousel/VideoCarousel';
import SSF2TNostalgia from '../SSF2TNostalgia/SSF2TNostalgia';

const Middle = () => {
  return (
    <Container>
      <header className="App-header">
        <div>
          <SSF2TNostalgia></SSF2TNostalgia>
          {/*<Button variant="contained" color="primary" startIcon={<StarIcon />}>
            Meu Botão
          </Button>
           <YouTubeVideo videoId="uiOLN5nGTbg" />
          <YouTubeVideo videoId="UoedDs_Hkd8" /> */}
          <VideoCarousel />
        </div>
      </header>
    </Container>
  );
};

export default Middle;