"use client"
import React, { useState } from 'react'
import TextField from "@mui/material/TextField";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

import FormControlLabel from "@mui/material/FormControlLabel";
import { Checkbox, FormGroup } from "@mui/material";
import Select from "@mui/material/Select";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Box from "@mui/material/Box";
//import Paper from '@mui/material/Paper';

import { Stack, Fab } from "@mui/material";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

//icons
import AddIcon from "@mui/icons-material/Add";

const DatosPersonales = () => {

    const [profileImage, setProfileImage] = useState("");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      setProfileImage(e.target.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  //FIN

  // Select input materialUI
  const [age, setAge] = React.useState("");
  const handleChangeMaterial = (event) => {
    setAge(event.target.value);
  };

  //editar
  const [editMode, setEditMode] = useState(false); // Estado para controlar el modo de edición
  const [formData, setFormData] = useState({
    // Estado para almacenar los valores de los campos
    nombres: "",
    nacionalidad: "",
    fechaNacimiento: "",
    genero: "",
    estadoCivil: "",
    documento: "",
    licenciaConducir: "",
    movilidadPropia: false,
    fotoPerfil: null,
  });

  const handleInputChange = (event) => {
    const { name, value, type, checked, files } = event.target;

    const fieldValue =
      type === "checkbox" ? checked : type === "file" ? files[0] : value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: fieldValue,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validar que todos los campos obligatorios estén llenos
    for (const key in formData) {
      if (formData.hasOwnProperty(key) && formData[key] === "") {
        alert("Por favor, complete todos los campos obligatorios");
        return;
      }
    }

    // Aquí puedes enviar los datos actualizados al servidor o realizar otras acciones necesarias
    // Por simplicidad, solo mostraremos una alerta con los datos
    alert(
      "Datos actualizados:\n\n" +
        `Nombres: ${formData.nombres}\n` +
        `Nacionalidad: ${formData.nacionalidad}\n` +
        `Fecha de Nacimiento: ${formData.fechaNacimiento}\n` +
        `Género: ${formData.genero}\n` +
        `Estado Civil: ${formData.estadoCivil}\n` +
        `Documento: ${formData.documento}\n` +
        `Licencia de Conducir: ${formData.licenciaConducir}\n` +
        `Movilidad Propia: ${formData.movilidadPropia ? "Sí" : "No"}\n` +
        `Foto de Perfil: ${
          formData.fotoPerfil ? formData.fotoPerfil.name : "No seleccionada"
        }`
    );

    // Salir del modo de edición después de guardar los cambios
    setEditMode(false);
  };

  return (
    <>
        <Card>
          <CardContent>
          <legend>Resumen de datos personales</legend>
                        
                        <Stack direction="row" alignItems="end" mb={2} mt={2} justifyContent="center">
                          {/* Image */}
                          <div
                            style={{
                              width: "150px",
                              height: "150px",
                              borderRadius: "50%",
                              overflow: "hidden",
                            }}
                          >
                            <img
                              src={
                                profileImage ||
                                "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                              }
                              alt="Profile Image"
                              style={{ width: "100%", height: "auto" }}
                            />
                          </div>
                          {/* input Image */}
                          <Box ml={-5} sx={{zIndex:"0"}}>
                            <label htmlFor="upload-photo">
                              <input
                                style={{ display: "none"}}
                                id="upload-photo"
                                name="upload-photo"
                                type="file"
                                onChange={handleImageChange}
                              />
                              <Fab
                                color="primary"
                                size="small"
                                component="span"
                                aria-label="add"
                              >
                                <AddIcon />
                              </Fab>
                            </label>
                          </Box>
                        </Stack>

                       
                        <form onSubmit={handleSubmit}>
                          <div className="fs-datos-personales">
                            
                            <Stack mb={2}>
                              <TextField
                                id="outlined-basic"
                                label="Nombres"
                                name="nombres"
                                variant="outlined"
                                value={formData.nombres}
                                onChange={handleInputChange}
                                disabled={!editMode}
                              />
                            </Stack>
                            
                            <Stack direction="row" columnGap={2}>

                              <Stack mb={2}>
                                <TextField
                                  id="outlined-basic"
                                  label="Nacionalidad"
                                  variant="outlined"
                                  name="nacionalidad"
                                  value={formData.nacionalidad}
                                  onChange={handleInputChange}
                                  disabled={!editMode}
                                />
                              </Stack>

                              

                              <Stack
                                mb={2}
                                justifyContent="space-between"
                                alignItems="center"
                                direction="row"
                              >
                                
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                  <DatePicker
                                    label="Fecha de Nacimiento"
                                    format="D/M/YYYY"
                                    value={formData.fechaNacimiento}
                                    onChange={handleInputChange}
                                    disabled={!editMode}
                                  />
                                </LocalizationProvider>
                              </Stack>

                            </Stack>
                           
                            <Stack direction="row" columnGap={2}>

                              <Stack mb={2} width="44%">
                                <FormControl fullWidth>
                                  <InputLabel id="demo-simple-select-label">
                                    Genero
                                  </InputLabel>
                                  <Select
                                    value={age}
                                    label="Genero"
                                    name="genero"
                                    onChange={handleChangeMaterial}
                                    disabled={!editMode}
                                  >
                                    <MenuItem value={10}>Masculino</MenuItem>
                                    <MenuItem value={20}>Femenino</MenuItem>
                                    <MenuItem value={30}>Otro</MenuItem>
                                  </Select>
                                </FormControl>
                              </Stack>

                              <Stack mb={2} width="50%">
                                <FormControl fullWidth>
                                  <InputLabel id="demo-simple-select-label">
                                    Estado Civil
                                  </InputLabel>
                                  <Select
                                    value={age}
                                    label="Estado Civil"
                                    name="estadoCivil"
                                    onChange={handleChangeMaterial}
                                    disabled={!editMode}
                                  >
                                    <MenuItem value={11}>Soltero/a</MenuItem>
                                    <MenuItem value={12}>Casado/a</MenuItem>
                                    <MenuItem value={13}>Divorciado/a</MenuItem>
                                    <MenuItem value={14}>Viudo/a</MenuItem>
                                  </Select>
                                </FormControl>
                              </Stack>
                            </Stack>

                            <Stack mb={2}>
                              <TextField
                                id="outlined-basic"
                                type="text"
                                name="documento"
                                label="Documento"
                                variant="outlined"
                                value={formData.documento}
                                onChange={handleInputChange}
                                disabled={!editMode}
                              />
                            </Stack>

                            {/* Check Box  - Movilidad*/}
                            <Stack mb={2}>
                              <FormGroup>
                                <FormControlLabel
                                  control={<Checkbox />}
                                  label="Poseo Licencia de conducir"
                                  name="licencia"
                                  value={formData.licenciaConducir}
                                  onChange={handleInputChange}
                                  disabled={!editMode}
                                />
                              </FormGroup>

                              <FormGroup>
                                <FormControlLabel
                                  control={<Checkbox />}
                                  label="Poseo Movilidad Propia"
                                  name="movilidad"
                                  value={formData.movilidadPropia}
                                  onChange={handleInputChange}
                                  disabled={!editMode}
                                />
                              </FormGroup>
                            </Stack>

                            
                            
                            {!editMode && (
                              <button
                                type="button"
                                onClick={() => setEditMode(true)}
                              >
                                Editar
                              </button>
                            )}
                            {editMode && <button type="submit">Guardar</button>}
                          </div>
                        </form>
          </CardContent>
                        
        </Card>
    </>
  )
}

export default DatosPersonales