import React from 'react';
import { Typography, TextField, Button, Box, Avatar, Grid } from '@mui/material';

const Profile: React.FC = () => {
  const fakeData = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    birthday: '1990-01-01',
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Profile
      </Typography>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <Grid container justifyContent="center" alignItems="center">
          <Grid item>
            <Avatar src="https://i.pravatar.cc/100" alt="user-avatar" style={{ width: 100, height: 100 }} />
            <input type="file" id="upload-photo" hidden onChange={(e) => console.log('handle file upload', e.target.files)} />
            <label htmlFor="upload-photo">
              <Button variant="contained" component="span" size="small">
                Alterar Foto
              </Button>
            </label>
          </Grid>
          <Grid item>
            <div>
              <TextField label="Nome" variant="outlined" defaultValue={fakeData.name} />
              <TextField label="E-mail" variant="outlined" defaultValue={fakeData.email} />
              <TextField label="Data de Nascimento" variant="outlined" type="date" defaultValue={fakeData.birthday} />
            </div>
            <Button variant="contained" color="primary">
              Salvar
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Profile;