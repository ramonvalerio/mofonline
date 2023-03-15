import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Card, CardContent, CardMedia, Grid } from '@mui/material';

const SSF2TNostalgia: React.FC = () => {
  const imageURL = './img/img_ssf2t.png'; // Substitua pelo link da imagem apropriada

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Relembrando os bons tempos de Super Street Fighter II Turbo
      </Typography>
      <Typography paragraph>
        No Mofonline, adoramos relembrar os clássicos dos videogames e compartilhar nossas memórias com vocês. Hoje, vamos voltar no tempo e relembrar um dos jogos de luta mais icônicos de todos os tempos: Super Street Fighter II Turbo.
      </Typography>
      <Typography paragraph>
        Lançado em 1994 pela Capcom, Super Street Fighter II Turbo (SSF2T) foi uma atualização do já aclamado Super Street Fighter II. A versão Turbo trouxe melhorias significativas para a jogabilidade, gráficos e som, além de introduzir novos personagens e mecânicas de jogo.
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia component="img" height="200" image={imageURL} alt="Imagem de Super Street Fighter II Turbo" />
            <CardContent>
              <Typography variant="h6">Imagem de Super Street Fighter II Turbo</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Características marcantes do jogo
          </Typography>
          <List>
            {[
              'A adição do "Super Combo Gauge" permitiu aos jogadores executarem golpes poderosos chamados "Super Combos" após encherem a barra.',
              'O icônico personagem secreto Akuma (Gouki no Japão) fez sua estreia em SSF2T, sendo um adversário extremamente difícil de se enfrentar e desbloquear.',
              'A mecânica de jogo "Turbo" permitia ajustar a velocidade das partidas, proporcionando uma experiência de jogo mais rápida e intensa.',
              'SSF2T trouxe aprimoramentos gráficos, como novas animações, cenários atualizados e maior detalhamento dos personagens.',
              'O jogo possuía 17 personagens jogáveis, incluindo os icônicos Ryu, Ken, Chun-Li, Guile, M. Bison e outros.',
            ].map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
      <Typography paragraph>
        SSF2T se tornou um sucesso instantâneo, conquistando uma base de fãs fiel e se estabelecendo como um pilar dos jogos de luta e dos fliperamas. A série Street Fighter continua até hoje, com diversos títulos e spin-offs lançados, mas a nostalgia         em torno de SSF2T permanece intacta.
      </Typography>
      <Typography paragraph>
        Além disso, o jogo foi fundamental na formação da comunidade competitiva de jogos de luta. Torneios de SSF2T ocorreram ao redor do mundo e continuam a acontecer, com jogadores mostrando suas habilidades e dedicação a este clássico atemporal.
      </Typography>
      <Typography variant="h6" gutterBottom>
        Viva a nostalgia!
      </Typography>
      <Typography paragraph>
        No Mofonline, adoramos reviver essas memórias e compartilhar nossas experiências com jogos clássicos como Super Street Fighter II Turbo. Se você também é um fã dessa época dourada dos videogames, junte-se a nós e compartilhe suas próprias lembranças, momentos favoritos e histórias sobre SSF2T. Vamos celebrar juntos os bons tempos dos fliperamas e a era de ouro dos jogos de luta!
      </Typography>
    </Box>
  );
};

export default SSF2TNostalgia;
