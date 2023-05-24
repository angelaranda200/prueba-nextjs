import Box from "@mui/material/Box";
//import Paper from '@mui/material/Paper';
import Grid from "@mui/material/Grid";
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Card, CardContent, Container, Tab} from "@mui/material";

import Experiencia from "../../components/organisms/Experiencia/Experiencia";
import Formacion from "../../components/organisms/Formacion/Formacion";
import Importar from "../../components/organisms/ImportarArchivos/Importar"
import Disponibilidad from "../../components/organisms/Disponibilidad/Disponibilidad";

//icons

import DatosPersonales from "../../components/organisms/DatosPersonales/DatosPersonales";

export default function CandidatoPage() {

  const [value, setValue] = React.useState('1');

  const handleChangeTabs = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Container maxWidth="xl">
        <Grid container mt={23} mb={13} columnSpacing={6} rowSpacing={4}>
          <Grid item xs={12} sm={5} md={6} lg={4}>
            <DatosPersonales/>
          </Grid>

          <Grid item xs={12} sm={7} md={6} lg={5}>
            <Card>
              <CardContent>
                <Box sx={{ width: '100%', typography: 'body1' }}>
                  <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                      <TabList onChange={handleChangeTabs}>
                        <Tab label="Experiencias" value="1" sx={{ flexGrow: 1 }}/>
                        <Tab label="Formaciones" value="2"  sx={{ flexGrow: 1 }}/>
                        <Tab label="Importar" value="3"  sx={{ flexGrow: 1 }}/>
                      </TabList>
                    </Box>
                    <TabPanel value="1"><ExperienciaLab/></TabPanel>
                    <TabPanel value="2"><Formacion/></TabPanel>
                    <TabPanel value="3"><Importar/></TabPanel>
                  </TabContext>
                </Box>

              </CardContent>
            </Card>
          </Grid>

          <Grid item xs ={12} sm={5} md={6} lg={3} >
            <Disponibilidad/>
          </Grid>
        </Grid>

      </Container>
    </div>
  )
}


