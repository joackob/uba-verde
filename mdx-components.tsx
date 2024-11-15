import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Image, { ImageProps } from "next/image";
import type { MDXComponents } from "mdx/types";

export const customComponents: MDXComponents = {
  h1: ({ children }) => (
    <Typography
      component={"h1"}
      sx={{
        color: "#313237",
        fontFamily: "Roboto",
        fontWeight: 600,
        fontSize: "32px",
        lineHeight: "40px",
        marginBottom: "16px",
      }}
    >
      {children}
    </Typography>
  ),

  h2: ({ children }) => (
    <Typography
      component={"h2"}
      sx={{
        color: "#313237",
        fontFamily: "Roboto",
        fontWeight: 600,
        fontSize: "28px",
        lineHeight: "40px",
        marginBottom: "16px",
      }}
    >
      {children}
    </Typography>
  ),
  img: (props) => (
    <Box
      component={"span"}
      my={"16px"}
      height={"318px"}
      width={"100%"}
      position={"relative"}
      display={"block"}
    >
      <Image
        fill
        priority
        style={{ objectFit: "cover" }}
        {...(props as ImageProps)}
        src={((props as ImageProps).src as string).replace(/^\./, "")}
      />
    </Box>
  ),
  p: ({ children }) => (
    <Typography
      component={"p"}
      sx={{
        color: "#313237",
        fontFamily: "Roboto",
        fontWeight: "400",
        fontSize: "16px",
        lineHeight: "24px",
        marginBottom: "16px",
      }}
    >
      {children}
    </Typography>
  ),
  li: ({ children }) => (
    <Typography
      component={"li"}
      sx={{
        color: "#313237",
        fontFamily: "Roboto",
        fontWeight: "400",
        fontSize: "16px",
        lineHeight: "24px",
        marginBottom: "16px",
      }}
    >
      {children}
    </Typography>
  ),
  table: ({ children }) => (
    <Table style={{ border: "1px", margin: "16px 0px" }}>{children}</Table>
  ),
  thead: ({ children }) => <TableHead>{children}</TableHead>,
  tr: ({ children }) => <TableRow>{children}</TableRow>,
  th: ({ children }) => (
    <TableCell style={{ padding: "1px" }}>{children}</TableCell>
  ),
  tbody: ({ children }) => <TableBody>{children}</TableBody>,
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return { ...customComponents, ...components };
}
