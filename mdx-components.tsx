import { Box, Typography } from "@mui/material";
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
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return { ...customComponents, ...components };
}
