import { Chip, Stack } from "@mui/material"; // Importa Stack también
import { handleClientScriptLoad } from "next/script";
import React from "react";

const Page = () => {
  return (
    <div style={{ height: "100vh", backgroundColor: "white" }}>
      <Stack direction="row" spacing={3}>
        {" "}
        {}
        <Chip label="Medicina" onClick={handleClientScriptLoad} />
      </Stack>
    </div>
  );
};

export default Page;
