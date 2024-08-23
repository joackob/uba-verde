import { Box, Typography, TextField } from "@mui/material";

export default function Search() {
  return (
    <Box>
      <Typography
        sx={{
          height: 36,
          width: '398px',
          color: '#313237',
          fontFamily: 'Roboto',
          fontWeight: 'bold',
          fontSize: 28,
          lineHeight: '36px',
          textAlign: 'left',
          paddingBottom: 1,
        }}
      >
        Novedades
      </Typography>
      <Box
        sx={{
          height: '56px',
          maxWidth: '720px',
          minWidth: '360px',
          backgroundColor: '#FFFFFF', // Se agregó la coma aquí
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingRight: 2,
          paddingLeft: 1,
        }}
      >
  <TextField
  placeholder="Buscar"
  variant="outlined"
  sx={{
    maxWidth: '688px',  // Añadir maxWidth aquí
    minWidth: '328px',  // Añadir minWidth aquí
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'transparent', // Hace que el borde sea invisible
      },
      '&:hover fieldset': {
        borderColor: 'transparent', // Evita cambios en el borde al pasar el mouse
      },
      '&.Mui-focused fieldset': {
        borderColor: 'transparent', // Evita cambios en el borde cuando está enfocado
      },
    },
    input: {
      color: '#313237', // Color del texto al escribir
      fontFamily: 'Roboto',
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '24px',
    },
  }}
/>




        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          style={{ fill: '#ADB5BD', height: '32px',}}
        >
          {/* SVG Path */}
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
        </svg>
      </Box>
    </Box>
  );
}
