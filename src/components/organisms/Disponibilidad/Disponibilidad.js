"use client"

import Select from "@mui/material/Select";

import { Stack, Card, CardContent } from "@mui/material";

const Disponibilidad = () => {
  return (
    <Card>
            <CardContent>

                        <legend>Disponibilidad</legend>
                        <Stack>
                          <FormControl
                            variant="outlined"
                            sx={{ m: 3}}
                          >
                            <InputLabel id="demo-simple-select-standard-label">
                              Disponibilidad
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-standard-label"
                              id="demo-simple-select-standard"
                              value=""
                              label="Disponibilidad"
                            >
                              <MenuItem value="completa">Disponible</MenuItem>
                              <MenuItem value="media">No Disponible</MenuItem>
                            </Select>
                          </FormControl>          
                        </Stack>
            </CardContent>
        </Card>
  )
}

export default Disponibilidad