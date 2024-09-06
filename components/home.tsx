
import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

const UbaVerdeGrid = () => {
  return (
   
   <Grid    container spacing={0} style={{ height: '100vh', width: '100vw'}}>
      {/* Primera fila*/ }
      <Grid item xs={3} style={{ backgroundColor: '#ffffff' }} />
      <Grid item xs={4} style={{ backgroundColor: '#dcde9f' }} />
      <Grid item xs={4} style={{ backgroundColor: '#446129' }} />
      <Grid item xs={1} style={{ backgroundColor: '#91a661' }} />

      {/* Segunda fila */}
      <Grid item xs={3} style={{ backgroundColor: '#dcde9f' }} />
      <Grid item xs={4} style={{ backgroundColor: '#446129' }} />
      <Grid item xs={4} style={{ backgroundColor: '#91a661' }} />
      <Grid item xs={1} style={{ backgroundColor: '#D9D4A6' }} />

      {/* Tercera fila */}
      <Grid item xs={3} style={{ backgroundColor: '#446129' }} />
      <Grid item xs={4} style={{ backgroundColor: '#91a661' }} />
      <Grid item xs={4} style={{ backgroundColor: '#ffffff' }} />
      <Grid item xs={1} style={{ backgroundColor: '#ffffff' }} />

      {/* Cuarta fila */}
      <Box style={{ height: `10px`,backgroundColor: '#FFFFFF', padding: '20px' }} alignItems={`center`}>
        <Typography variant="h3" align="center" style={{ color: '#333333', fontWeight: `1000` }}>
          .UBA<span style={{ color: '#8AAA3F', fontWeight: `400 ` }}>VERDE</span>
        </Typography>
        <Typography variant="h6" align="center" style={{ color: '#666666' }}>
          Gestión y educación ambiental en la UBA
        </Typography>
      </Box>

      {/* Quinta fila */}
      <Grid item xs={3} style={{ backgroundColor: '#ffffff' }} />
      <Grid item xs={4} style={{ backgroundColor: '#A8B575' }} />
      <Grid item xs={4} style={{ backgroundColor: '#446129' }} />
      <Grid item xs={1} style={{ backgroundColor: '#dcde9f' }} />

      {/* Sexta fila */}
      <Grid item xs={3} style={{ backgroundColor: '#91a661' }} />
      <Grid item xs={4} style={{ backgroundColor: '#446129' }} />
      <Grid item xs={4} style={{ backgroundColor: '#dcde9f' }} />
      <Grid item xs={1} style={{ backgroundColor: '#A8B575' }} />

      {/* Septima fila*/ }
      <Grid item xs={3} style={{ backgroundColor: '#446129' }} />
      <Grid item xs={4} style={{ backgroundColor: '#dcde9f' }} />
      <Grid item xs={4} style={{ backgroundColor: '#ffffff' }} />
      <Grid item xs={1} style={{ backgroundColor: '#ffffff' }} />

    </Grid>
  );
};

export default UbaVerdeGrid;
