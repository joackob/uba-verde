import React from 'react';
import { Box } from '@mui/material';

interface ExampleImageProps {
  src?: string; // Hacer que `src` sea opcional
}

const Fotito: React.FC<ExampleImageProps> = ({ src }) => {
  // Valor por defecto para `src` si no se pasa
  const defaultSrc = "@/public/images/ejemplo.png"; // Reemplaza con la ruta a tu imagen por defecto

  return (
    <Box
      component="img"
      src={src ?? defaultSrc} // Usa `defaultSrc` si `src` es `undefined`
      sx={{
        width: '100%', // Ajusta el ancho al contenedor
        borderRadius: '8px', // Añade bordes redondeados
        objectFit: 'cover', // Mantiene la proporción de la imagen y cubre el área
      }}
    />
  );
};

export default Fotito;
