'use client'; //Esto es necesario cuando el componente usa funcionalidades que deben ejecutarse en el cliente.
import { Box, Stack, Button } from "@mui/material";
import Link from "next/link";
import React from "react";
import Botones from "./iconos/Botones";


const Navegador = () => {
    return (
        <Box
            component="footer"
            position="absolute"
            bottom={16}
            left="50%"
            
            right={0}
            bgcolor={"#91A661"}
            display="flex"
            justifyContent="center"
            
            sx={{
                transform:"translateX(-50%)",
                borderRadius: "32px", maxWidth: "420px",boxShadow:"0px 4px 4px 0px #757575"
            }}
            paddingBottom={2}
            paddingTop={2}
        >
            <Stack
                direction="row"


                spacing={2}
                

            >
                <Botones />

            </Stack>
        </Box>
    );
};

export default Navegador;
