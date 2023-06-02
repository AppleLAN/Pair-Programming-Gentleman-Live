import {ReactNode} from "react";
import Container from "@mui/material/Container/Container";
import {Grid, Paper} from "@mui/material";

export const Structure = ({children}: { children: ReactNode }) => {
    return (
        <Container maxWidth="lg">
            <Grid container>
                <Grid item xs={12}>
                    <Paper
                        sx={{
                            p: 5,
                            display: 'flex',
                            flexDirection: 'column',
                            height: 680, // Establecer un tamaño fijo para el Paper
                            overflow: 'auto', // Permitir desplazamiento cuando el contenido exceda el tamaño
                        }}
                    >
                        {children}
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}