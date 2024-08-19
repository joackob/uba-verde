import { Box, Typography, TextField} from "@mui/material";
export default function Page() {
    return (
      <Box>
        <Typography sx={{ 
    height: 36,
    color: '#313237',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 28,
    lineHeight: '36px',
  }}> Novedades</Typography>
  <TextField 
  placeholder="Tu placeholder aquí"
  sx={{ 
    '&::placeholder': { 
      color: '#ADB5BD', // Color del placeholder
      opacity: 1, // Asegúrate de que sea completamente visible
    },
    input: {
      color: '#313237', // Color del texto al escribir
      fontFamily: 'Roboto',
      fontWeight: 'bold',
      fontSize: 28,
      lineHeight: '36px',
    }
  }}
/>

      </Box>
    );
  }
  