'use client'; //Esto es necesario cuando el componente usa funcionalidades que deben ejecutarse en el cliente.

import React from 'react';
import Button from "@mui/material/Button/Button";
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShareIcon from '@mui/icons-material/Share';
import ListAltIcon from '@mui/icons-material/ListAlt';
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Box } from '@mui/material';

const Botones = () => {
    const router = useRouter();//permite acceder a la información de la ruta actual y manipular la navegación en una aplicación Next.js

    const handleShareClick = () => {
        // Obtén la URL actual
        const currentUrl = window.location.href;

        // Copia la URL al portapapeles
        navigator.clipboard.writeText(currentUrl).then(() => {
            alert('Enlace copiado al portapapeles');
        }).catch(err => {
            console.error('Error al copiar el enlace: ', err);
        });
    };
    return <>
    
        <Link href={"/about"} passHref >
            <Button variant="contained"  sx={{backgroundColor:"transparent",maxHeight:"24px"  }}>
                <ImportContactsIcon sx={{ color: 'white',  }} />
            </Button>

        </Link>
        <Link href={""}>
            <Button variant="contained"  sx={{ backgroundColor:"transparent",maxHeight:"24px" }}>
            <ListAltIcon sx={{color: "white",}}/>
            </Button>
        </Link>
        <Link href={""}>
            <Button variant="contained"  sx={{ backgroundColor:"transparent", maxHeight:"24px" }}>
                <AccountBoxIcon sx={{ color: 'white', }}  />
            </Button>
        </Link>
        <Link href={""}>
            <Button variant="contained" sx={{ backgroundColor:"transparent",maxHeight:"24px" }}>
                <LocationOnIcon sx={{ color: 'white',  }} />
            </Button>
        </Link>

        <Button
            variant="contained"
            
            sx={{ backgroundColor:"transparent",maxHeight:"24px" }}
            onClick={handleShareClick}
            >
            <ShareIcon sx={{ color: 'white', }} />
        </Button>
            

    </>
}

export default Botones;     