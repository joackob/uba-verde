import { Typography } from "@mui/material";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <Typography>Home</Typography>
      <Link href="/about">About</Link>
    </div>
  );
}
