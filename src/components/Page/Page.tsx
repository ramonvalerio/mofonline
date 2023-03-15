import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Top from '../Top/Top';
import Middle from '../Middle/Middle';
import Bottom from '../Bottom/Bottom';
import Jogos from '../Jogos/Jogos';
import Rank from '../Rank/Rank';
import Profile from '../Profile/Profile';
import TournamentBracket from '../TournamentBracket/TournamentBracket';

const Page: React.FC = () => {
  return (
    <div>
      <Top />
      <Routes>
        <Route path="/home" element={<Middle />} />
        <Route path="/jogos" element={<Jogos />} />
        <Route path="/torneio" element={<TournamentBracket />} />
        <Route path="/rank" element={<Rank />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Bottom />
    </div>
  );
};

export default Page;