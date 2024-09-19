import matter from "gray-matter";
import path from "path";
import fs from "fs";
import z from "zod";

const ResumenParser = z.object({
  titulo: z.string(),
  descripcion: z.string(),
  portada: z.string(),
});

export type Resumen = z.infer<typeof ResumenParser> & { slug: string };

export const obtenerDesde = (dir: string): Resumen[] => {
  const postsDirectory = path.join(process.cwd(), dir);
  const filenames = fs.readdirSync(postsDirectory);
  const metadata = filenames.map((filename) => {
    const fullPath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);
    const parse = ResumenParser.safeParse(data);
    if (!parse.success) {
      throw new Error(parse.error.errors[0].message);
    }
    return { ...parse.data, slug: filename.replace(/\.mdx$/, "") };
  });
  return metadata;
};

export default { obtenerDesde };
