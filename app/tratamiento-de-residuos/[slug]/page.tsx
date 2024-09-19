import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { customComponents } from "@/mdx-components";

// Definir la ruta de los archivos MDX
const postsDirectory = path.join(process.cwd(), "content");

// Función para generar rutas dinámicas
export function generateStaticParams() {
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    return {
      slug,
    };
  });
}

// Función para obtener los datos del MDX basado en el slug
function getPostData(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Extraer el contenido MDX y los metadatos
  const { content, data } = matter(fileContents);

  return { content, data };
}

const PostPage = async ({ params }: { params: { slug: string } }) => {
  const { content, data } = getPostData(params.slug);

  return <MDXRemote source={content} components={customComponents} />;
};

export default PostPage;
