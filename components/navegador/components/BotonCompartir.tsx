"use client";
import ShareIcon from "@mui/icons-material/Share";
import { Tooltip } from "@mui/material";

const BotonCompartir = () => {
  const handleShareClick = () => {
    const currentUrl = window.location.href;
    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        alert("Enlace copiado al portapapeles");
      })
      .catch((err) => {
        console.error("Error al copiar el enlace: ", err);
      });
  };
  return (
    <Tooltip placement="top" title={"Compartir este sitio"}>
      <button
        onClick={handleShareClick}
        style={{
          padding: 0,
          border: "none",
          height: "24px",
          width: "24px",
          backgroundColor: "transparent",
          cursor: "pointer",
        }}
      >
        <ShareIcon sx={{ color: "white" }} />
      </button>
    </Tooltip>
  );
};

export default BotonCompartir;
