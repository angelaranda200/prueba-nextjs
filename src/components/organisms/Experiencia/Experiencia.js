"use client"
import { useState } from "react";
import ModalFlotante from "../../molecule/Modal/ModalFlotante";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import {
  Typography,
  TextField,
  Stack,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Box,
  IconButton,
  Button
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const Experiencia = () => {

    const [experiencias, setExperiencias] = useState([]);
  const [nuevaExperiencia, setNuevaExperiencia] = useState({
    empresa: "",
    cargo: "",
    funciones: "",
    fechaIngreso: "",
    fechaSalida: "",
    actualmenteTrabajando: false,
  });
  const [experienciaEditando, setExperienciaEditando] = useState(null);
  const [modalAbierto, setModalAbierto] = useState(false);

  const abrirModal = () => {
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setModalAbierto(false);
    limpiarCampos();
  };

  const agregarExperiencia = () => {
    console.log(nuevaExperiencia);
    // Validar campos obligatorios
    //desestructurando el objeto
    const {empresa,cargo,fechaIngreso,fechaSalida,actualmenteTrabajando} =  nuevaExperiencia

    if (
      empresa === "" ||
      cargo === "" ||
      fechaIngreso === "" ||
      (fechaSalida === "" &&
        !actualmenteTrabajando)
    ) {
      alert("Por favor, complete todos los campos obligatorios.");
      return;
    }

    if (experienciaEditando !== null) {
      // Si hay una experiencia en edición, actualizamos el arreglo de experiencias
      const nuevasExperiencias = [...experiencias];
      nuevasExperiencias[experienciaEditando] = nuevaExperiencia;
      setExperiencias(nuevasExperiencias);
      setExperienciaEditando(null);
    } else {
      // Si no hay una experiencia en edición, agregamos la nueva experiencia al arreglo
      setExperiencias([...experiencias, nuevaExperiencia]);
    }

    cerrarModal();
  };

  const limpiarCampos = () => {
    setNuevaExperiencia({
      empresa: "",
      cargo: "",
      funciones: "",
      fechaIngreso: "",
      fechaSalida: "",
      actualmenteTrabajando: false,
    });
  };

  const editarExperiencia = (index) => {
    setExperienciaEditando(index);
    const experienciaEditada = experiencias[index];
    //Todo : falta que aparezcan las fechas al momento de editar 
    setNuevaExperiencia({
      ...experienciaEditada,
      fechaIngreso: nuevaExperiencia.fechaIngreso,
      fechaSalida: nuevaExperiencia.fechaSalida,
    });
    abrirModal();
  };
  

  const eliminarExperiencia = (index) => {
    const nuevasExperiencias = [...experiencias];
    nuevasExperiencias.splice(index, 1);
    setExperiencias(nuevasExperiencias);
  };

  const handleChange = (e) => {
    if (e && e.target) {
      const { name, value, type, checked } = e.target;
      const newValue = type === "checkbox" ? checked : value;
      setNuevaExperiencia({ ...nuevaExperiencia, [name]: newValue });
    }
  };

  // const handleFechaIngresoChange = (fecha) => {
  //   setNuevaExperiencia({ ...nuevaExperiencia, fechaIngreso: fecha });
  // };

  // const handleFechaSalidaChange = (fecha) => {
  //   setNuevaExperiencia({ ...nuevaExperiencia, fechaSalida: fecha });
  // };

  const handleCheck = (e) => {
    if (e && e.target) {
      const { name, checked } = e.target;
      const updatedValue = name === 'actualmenteTrabajando' ? checked : nuevaExperiencia.actualmenteTrabajando;
      setNuevaExperiencia({ ...nuevaExperiencia, [name]: updatedValue });
  
      // Si se marca la casilla "Actualmente Trabajando", se limpia la fecha de salida
      if (name === 'actualmenteTrabajando' && checked) {
        setNuevaExperiencia({ ...nuevaExperiencia, fechaSalida: '' });
      }
    }
  };

  const handleDateChange = (date) => {
    
    setNuevaExperiencia({
      ...nuevaExperiencia,
      fechaSalida: date.$d.toISOString(),
    });
  };

  const handleDateChange2 = (date) => {
    
    setNuevaExperiencia({
      ...nuevaExperiencia,
      fechaIngreso: date.$d.toISOString(),
    });
  };

  const convertirFechaFormat = (date) => {
    const fecha = new Date(date);

    const dia = fecha.getDate().toString().padStart(2, '0');
    const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
    const anio = fecha.getFullYear().toString().substr(-2);

    const fechaConvertida = `${dia}-${mes}-${anio}`;

    return fechaConvertida
  }

  return (
    <div>
      
      <Stack direction="row" justifyContent="space-between" gap={5} alignItems="center" ml={2} pb={1} sx={{borderBottom: "1px #ccc solid"}}>
        <Typography variant="h6" hidden={{ xs: true }}>Experiencias</Typography>

        <Button variant="text" startIcon={<AddCircleOutlineOutlinedIcon/>} onClick={abrirModal}>
          Agregar experiencia
        </Button>

      </Stack>

      <ModalFlotante isOpen={modalAbierto} onClose={cerrarModal}>
        <Typography variant="h5" fontWeight="bold" fontSize={25} mb={2}>
          {experienciaEditando !== null
            ? "Editar experiencia"
            : "Agregar experiencia"}
        </Typography>
        <form>
          <Stack rowGap={2}>
            <TextField
              id="outlined-basic"
              label="Empresa"
              name="empresa"
              variant="outlined"
              value={nuevaExperiencia.empresa}
              onChange={handleChange}
            />
            <TextField
              id="outlined-basic"
              label="Cargo"
              name="cargo"
              variant="outlined"
              value={nuevaExperiencia.cargo}
              onChange={handleChange}
            />
            <TextField
              id="outlined-basic"
              label="Funciones"
              name="funciones"
              variant="outlined"
              value={nuevaExperiencia.funciones}
              onChange={handleChange}
            />
            <Stack direction="row" justifyContent="space-between" columnGap={2}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Fecha de Ingreso"
                  name="fechaIngreso"
                  value={nuevaExperiencia.fechaIngreso}
                  onChange={handleDateChange2}
                />
              </LocalizationProvider>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Fecha de Salida"
                  name="fechaSalida"
                  value={new Date(nuevaExperiencia.fechaSalida)}
                  onChange={handleDateChange}
                  disabled={false} // Habilitar la selección de fecha incluso cuando se marca "Actualmente Trabajando"
                />
              </LocalizationProvider>
            </Stack>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                label="Actualmente Trabajo"
                value={nuevaExperiencia.actualmenteTrabajando}
                onChange={handleCheck}
              />
            </FormGroup>
          </Stack>
        </form>
        <button type="button" onClick={agregarExperiencia}>
          Guardar experiencia
        </button>
      </ModalFlotante>

      <Box mt={3} p={2} >
        {experiencias.map((experiencia, index) => (
          <Stack direction="column" key={index}  pb={2} mb={3} sx={{borderBottom: "1px #ccc solid"}} >
              <Stack direction="row" justifyContent="space-between">
                <Typography variant="h5" fontWeight="bold" fontSize={25} color="#1976d2">{experiencia.empresa}</Typography>
                <Stack direction="row">

                  <IconButton onClick={() => editarExperiencia(index)}>
                    <EditOutlinedIcon/>
                  </IconButton>

                  <IconButton onClick={() => eliminarExperiencia(index)}>
                    <DeleteOutlineOutlinedIcon/>
                  </IconButton>

                </Stack>
              </Stack>
              <Typography variant="h6" fontSize={20} color="rgba(0, 0, 24, 0.60)">{experiencia.cargo}</Typography>
              <Typography variant="body1" color="rgba(0, 0, 24, 0.48)">
                Fecha de ingreso: {convertirFechaFormat(experiencia.fechaIngreso)} -{" "}
                {experiencia.actualmenteTrabajando
                  ? "Actualidad"
                  : convertirFechaFormat(experiencia.fechaSalida)}
              </Typography>
          </Stack>
        ))}
      </Box>
    </div>
  )
}

export default Experiencia