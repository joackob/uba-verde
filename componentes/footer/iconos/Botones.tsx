"use client"; //Esto es necesario cuando el componente usa funcionalidades que deben ejecutarse en el cliente.

import React from "react";
import Button from "@mui/material/Button/Button";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ShareIcon from "@mui/icons-material/Share";
import ListAltIcon from "@mui/icons-material/ListAlt";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Box } from "@mui/material";

const enlaces = [
  {
    nombre: "Acerca de",
    url: "/about",
    icono: ImportContactsIcon,
  },
  {
    nombre: "Servicios",
    url: "/services",
    icono: ListAltIcon,
  },
  {
    nombre: "Contacto",
    url: "/contact",
    icono: AccountBoxIcon,
  },
  {
    nombre: "Ubicación",
    url: "/location",
    icono: LocationOnIcon,
  },
];

const Botones = () => {
  const router = useRouter(); //permite acceder a la información de la ruta actual y manipular la navegación en una aplicación Next.js

  const handleShareClick = () => {
    // Obtén la URL actual
    const currentUrl = window.location.href;

    // Copia la URL al portapapeles
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
