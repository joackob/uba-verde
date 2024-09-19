"use client";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ShareIcon from "@mui/icons-material/Share";
import HomeIcon from "@mui/icons-material/Home";
import Link from "next/link";
import NewspaperIcon from "@mui/icons-material/Newspaper";

const enlaces = [
  {
    nombre: "Tratameinto de residuos",
    url: "/tratamiento-de-residuos",
    icono: HomeIcon,
  },
  {
    nombre: "Novedades",
    url: "/novedades",
    icono: NewspaperIcon,
  },
  {
    nombre: "Promotores",
    url: "/map",
    icono: LocationOnIcon,
  },
  {
    nombre: "Contacto",
    url: "/contact",
    icono: AccountBoxIcon,
  },
];

const Botones = () => {
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
    <>
      {enlaces.map((enlace) => (
        <Link key={enlace.url} href={enlace.url}>
          {<enlace.icono sx={{ color: "white" }} />}
        </Link>
      ))}

      <Link href={""} onClick={handleShareClick}>
        <ShareIcon sx={{ color: "white" }} />
      </Link>
    </>
  );
};

export default Botones;
