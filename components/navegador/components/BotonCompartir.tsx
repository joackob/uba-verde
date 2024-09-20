"use client";
import ShareIcon from "@mui/icons-material/Share";

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
    <button
      onClick={handleShareClick}
      style={{
        padding: 0,
        border: "none",
        height: "24px",
        width: "24px",
        backgroundColor: "transparent",
      }}
    >
      <ShareIcon sx={{ color: "white" }} />
    </button>
  );
};

export default BotonCompartir;
