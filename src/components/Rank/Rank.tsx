import React from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar, Box, Chip } from '@mui/material';

const Rank: React.FC = () => {
  const createData = (username: string, points: number, matches: number, wins: number, losses: number) => {
    return { username, points, matches, wins, losses };
  };

  const rows = [
    createData('Kwayd', 230, 50, 35, 15),
    createData('Mofo', 210, 55, 30, 25),
    createData('Fat', 190, 60, 25, 35),
    createData('Neo', 170, 65, 20, 45),
    createData('Pombo', 150, 70, 15, 55),
    createData('FuckFuck', 190, 60, 25, 35),
    createData('Vovó do Pó', 170, 65, 20, 45),
    createData('Velha', 150, 70, 15, 55),
  ];

  return (
    <div>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
        Rank
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Usuário</TableCell>
              <TableCell align="right">Pontos</TableCell>
              <TableCell align="right">Partidas</TableCell>
              <TableCell align="right">Vitórias</TableCell>
              <TableCell align="right">Derrotas</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.username}>
                <TableCell component="th" scope="row">
                  <Box display="flex" alignItems="center">
                    <Avatar src={`https://i.pravatar.cc/150?u=${row.username}`} alt={row.username} />
                    <Typography variant="body1" marginLeft={1}>
                      {row.username}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="right">
                  <Chip label={row.points} />
                </TableCell>
                <TableCell align="right">
                  <Chip label={row.matches} />
                </TableCell>
                <TableCell align="right">
                  <Chip label={row.wins} />
                </TableCell>
                <TableCell align="right">
                  <Chip label={row.losses} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Rank;