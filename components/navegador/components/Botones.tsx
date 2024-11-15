import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import Link from "next/link";
import BotonCompartir from "./BotonCompartir";
import { Tooltip } from "@mui/material";

const enlaces = [
  {
    nombre: "Tratamiento de residuos",
    url: "/tratamiento-de-residuos",
    icono: HomeIcon,
  },
  // {
  //   nombre: "Novedades",
  //   url: "/novedades",
  //   icono: NewspaperIcon,
  // },
  {
    nombre: "Email de contacto de UBA Verde",
    url: "mailto:uba.verde@uba.ar",
    icono: EmailIcon,
  },
  {
    nombre: "Instagram de UBA Verde",
    url: "https://www.instagram.com/uba.verde/",
    icono: InstagramIcon,
  },
  // {
  //   nombre: "Promotores",
  //   url: "/map",
  //   icono: LocationOnIcon,
  // },
];

const Botones = () => {
  return (
    <>
      {enlaces.map((enlace) => (
        <Tooltip placement="top" title={enlace.nombre} key={enlace.nombre}>
          <Link href={enlace.url} style={{ height: "24px" }}>
            {<enlace.icono sx={{ color: "white" }} />}
          </Link>
        </Tooltip>
      ))}
      <BotonCompartir />
    </>
  );
};

export default Botones;
