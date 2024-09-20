import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HomeIcon from "@mui/icons-material/Home";
import Link from "next/link";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import BotonCompartir from "./BotonCompartir";

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
  return (
    <>
      {enlaces.map((enlace) => (
        <Link key={enlace.url} href={enlace.url}>
          {<enlace.icono sx={{ color: "white" }} />}
        </Link>
      ))}

      <BotonCompartir />
    </>
  );
};

export default Botones;
