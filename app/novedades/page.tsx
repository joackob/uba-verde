import React from 'react'
import { Card, CardMedia, CardContent, Typography, Stack, CardActionArea, Box, } from '@mui/material'

const page = () => {
    return (
        <><div>Novedades</div><Card sx={{ marginTop: '10px', position: 'relative', maxWidth: 400, borderRadius: '8px' }}>
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
                <Typography variant="h6"> barrendero</Typography>
            </CardContent>
        </Card>
        <Typography fontSize={"h4"} sx={{marginTop:"10px"}}>
            Ultimas Noticias
        </Typography>
            <Stack direction={'column'} >
                <Card sx={{ display: 'flex', maxWidth: 360, marginTop:"20px"}}>
                    <CardMedia
                        component="img"
                        sx={{ width: 120, height: 120, objectFit: 'cover' }}
                        image={"https://buenosaires.gob.ar/sites/default/files/inline-images/WhatsApp%20Image%202024-06-18%20at%2016.26.04.jpeg"}
                        alt={"barrendero"}
                    />
                    <Box sx={{ flexDirection: 'column',}}>
                        <CardContent>
                            <Typography variant="h6" component="div">
                                dsadnsjadnjasnd
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                dsadsadasd
                            </Typography>
                        </CardContent>
                    </Box>
                </Card>
                <Card sx={{ display: 'flex', maxWidth: 360, marginTop:"20px"}}>
                    <CardMedia
                        component="img"
                        sx={{ width: 120, height: 120, objectFit: 'cover' }}
                        image={"https://buenosaires.gob.ar/sites/default/files/inline-images/WhatsApp%20Image%202024-06-18%20at%2016.26.04.jpeg"}
                        alt={"barrendero"}
                    />
                    <Box sx={{ flexDirection: 'column',}}>
                        <CardContent>
                            <Typography variant="h6" >
                                dsadnsjadnjasnd
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                dsadsadasd
                            </Typography>
                        </CardContent>
                    </Box>
                </Card>
                <Card sx={{ display: 'flex', maxWidth: 360, marginTop:"20px"}}>
                    <CardMedia
                        component="img"
                        sx={{ width: 120, height: 120, objectFit: 'cover' }}
                        image={"https://buenosaires.gob.ar/sites/default/files/inline-images/WhatsApp%20Image%202024-06-18%20at%2016.26.04.jpeg"}
                        alt={"barrendero"}
                    />
                    <Box sx={{ flexDirection: 'column',}}>
                        <CardContent>
                            <Typography variant="h6" component="div">
                                dsadnsjadnjasnd
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                dsadsadasd
                            </Typography>
                        </CardContent>
                    </Box>
                </Card>
            </Stack>

        </>


    )
}

export default page
