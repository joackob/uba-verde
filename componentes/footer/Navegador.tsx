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
                transform: "translateX(-50%)",
                borderRadius: "32px",
                maxWidth: {
                    xs: "70%",
                    sm: "420px", 
                },
                width: "100%",
                boxShadow: "0px 4px 4px 0px #757575",
                paddingBottom: 2,  
                paddingTop: 2,     
                
            }}
            paddingBottom={1}
            paddingTop={1}
        >
            <Stack
                
                
                spacing={1}
                direction="row"
                sx={{
                    justifyContent: "center", 
                    width: "100%",
                    '& button': {
                        fontSize: {
                            xs: '10px', 
                            sm: '12px', 
                            md: '14px', 
                           lg: '16px', 
                        },
                        padding: {
                            xs: '4px 8px',
                            sm: '6px 12px',
                            md: '8px 16px',
                        },
                        minWidth: {
                            xs: 'auto', 
                        },
                    },
                }}


            >
                <Botones />

            </Stack>
        </Box>
    );
};

export default Navegador;
