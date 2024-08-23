import React from 'react'
import { Card, CardMedia, CardContent, Typography, } from '@mui/material'

const page = () => {
    return (
    <><div>Novedades</div><Card sx={{ marginTop:'10px',position: 'relative', maxWidth: 400, borderRadius:'8px'}}>
            <CardMedia
                component="img"
                height="300"
                image={"https://t2.uc.ltmcdn.com/es/posts/4/2/5/salario_47524_2_orig.jpg"}
                alt="Imagen de la card" />
            <CardContent sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                color: 'white',
                textAlign: 'start',
            }}>
                <Typography variant="h4">{"UBAVERDE"}</Typography>
                <Typography variant = "h6"> barrendero</Typography>
            </CardContent>
        </Card></>

    )
}

export default page
