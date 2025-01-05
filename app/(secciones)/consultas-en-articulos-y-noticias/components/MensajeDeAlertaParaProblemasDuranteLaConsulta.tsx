import { Alert } from "@mui/material";
import React from "react";

const MensajeDeAlertaParaProblemasDuranteLaConsulta = () => {
  return (
    <Alert severity="error">
      Hubo un problema, intentar consultar más tarde...
    </Alert>
  );
};

export default MensajeDeAlertaParaProblemasDuranteLaConsulta;
