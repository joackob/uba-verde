import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { Box, Container, Typography } from "@mui/material";


// Definir la ruta de los archivos MDX
const postsDirectory = path.join(process.cwd(), "content");

export const getStaticPaths = async () => {
  const filenames = fs.readdirSync(postsDirectory);

  // Usar el nombre del archivo (sin la extensión .mdx) como slug
  const paths = filenames.map((filename) => {
    return {
      params: { slug: filename.replace(/\.mdx$/, "") },
    };
  });

  return {
    paths,
    fallback: false, // Si es false, muestra 404 para slugs que no existen
  };
};

export const getStaticProps = async ({ params }: { params: { slug: string } }) => {
    // Construir la ruta al archivo basándonos en el slug (nombre del archivo)
    const fullPath = path.join(postsDirectory, `${params.slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
  
    // Extraer el contenido MDX y los metadatos
    const { content, data } = matter(fileContents);
    const mdxSource = await serialize(content);
  
    return {
      props: {
        frontMatter: data,
        mdxSource,
      },
    };
  };

  const PostPage = ({ frontMatter, mdxSource }: { frontMatter: any; mdxSource: any }) => {
    return (
        <Box sx={{paddingX: 16 }}>
        
        <Typography
        sx={{
          color: "#313237",
          fontFamily: "Roboto",
          fontWeight: "bold",
          fontSize: 32,
          lineHeight: 40,
          textAlign: "left",
          padding: 1,
        }}
      >
        {frontMatter.encabezado}
      </Typography>
          <Typography
          sx={{
            color: "#313237",
            fontFamily: "Roboto",
            fontWeight: "regular",
            fontSize: 16,
            lineHeight: 24,
            textAlign: "left",
            padding: 1,
          }}>{frontMatter.descripcion}</Typography>
        
        <Typography sx={{
          color: "#313237",
          fontFamily: "Roboto",
          fontWeight: "bold",
          fontSize: 24,
          lineHeight: 32,
          textAlign: "left",
          padding: 1,
        }}>{frontMatter.tituloSec}</Typography>
        <Typography sx={{
            color: "#313237",
            fontFamily: "Roboto",
            fontWeight: "regular",
            fontSize: 16,
            lineHeight: 24,
            textAlign: "left",
            padding: 1,
          }}>{frontMatter.parrafo}</Typography>
        
        <div>
          <MDXRemote {...mdxSource} />
        </div>
      </Box>
    );
  };
  
  export default PostPage;