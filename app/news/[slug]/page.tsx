import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Box, Typography } from "@mui/material";
import Fotito from "@/components/fotito";

// Definir la ruta de los archivos MDX
const postsDirectory = path.join(process.cwd(), "content");

// Función para generar rutas dinámicas
export async function generateStaticParams() {
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    return {
      slug,
    };
  });
}

// Función para obtener los datos del MDX basado en el slug
async function getPostData(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  
  // Extraer el contenido MDX y los metadatos
  const { content, data } = matter(fileContents);
  
  return { content, data };
}

const PostPage = async ({ params }: { params: { slug: string } }) => {
  const { content, data } = await getPostData(params.slug);

  return (
    <Box 
    sx={{display:"flex", justifyContent: "center", flexDirection: "column"}}>
      <Typography
        sx={{
          color: "#313237",
          fontFamily: "Roboto",
          fontWeight: "bold",
          fontSize: "32pt",
         
          textAlign: "left",
          padding: 1,
        }}
      >
        {data.encabezado}
      </Typography>
      <Typography
        sx={{
          color: "#313237",
          fontFamily: "Roboto",
          fontWeight: "regular",
          fontSize: "18pt",
          
          textAlign: "left",
          padding: 1,
        }}
      >
        {data.descripcion}
      </Typography>
      <Fotito src="@/public/images/ejemplo.png"/>
      <Typography
        sx={{
          color: "#313237",
          fontFamily: "Roboto",
          fontWeight: "bold",
          fontSize: "24pt",
          
          textAlign: "left",
          padding: 1,
        }}
      >
        {data.tituloSec}
      </Typography>
      <Box
  sx={{
    color: "#313237",
    fontFamily: "Roboto",
    fontWeight: 400, // Regular o Medium para body/large
    fontSize: "16pt", // Aproximadamente 18px, según las pautas de M3
    lineHeight: 1.5, // Altura de línea recomendada para mejorar la legibilidad
    textAlign: "left",
    padding: 1, // Mantén el padding si es necesario para el diseño
  }}
>
<MDXRemote source={content} />
</Box>
      
    </Box>
  );
};

export default PostPage;
