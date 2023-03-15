import React from 'react';
import { Typography } from '@mui/material';
import exampleImage from '../../assets/images/img_ssf2t.png';

const Jogos: React.FC = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Jogos
      </Typography>
      {/* Conteúdo do componente Jogos */}
      <img src={exampleImage} alt="Descrição da imagem" /> {/* Adicione a imagem aqui */}
    </div>
  );
};

export default Jogos;