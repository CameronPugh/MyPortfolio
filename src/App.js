import * as React from 'react';

import "./styles.css";
import GithubLinks from "./GithubLinks";
import {AppBar, Button, Container, Toolbar} from "@mui/material";
import Typography from "@mui/material/Typography";
import { Link } from "react-scroll";
import Grid from "@mui/material/Grid";

const footers = [
    {
        title: 'Nothing Here yet',
        description: [],
    },

];

function App() {
    return (
        <Container className="MainContainer" maxWidth="xl">
        <AppBar className = "AppBar"
            position="static"
            color="default"
            elevation={5}

        >
            <Toolbar sx={{ flexWrap: 'wrap' }}>

                <nav>
                    <Link className = "link"
                        to="test1"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                    >Contact me
                    </Link>
                    <Link className = "link"
                          to="about"
                          spy={true}
                          smooth={true}
                          offset={50}
                          duration={500}
                    >About me
                    </Link>
                    <Link className = "link"
                          to="test1"
                          spy={true}
                          smooth={true}
                          offset={50}
                          duration={500}
                    >Projects
                    </Link>


                </nav>
            </Toolbar>
        </AppBar>
            <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
                <div id="about"> </div>
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    style={{ fontWeight: 600 ,textDecoration: 'underline'}}
                    gutterBottom
                >
                    Cameron Pugh
                </Typography>

                <Typography variant="h5" align="center" color="white" component="p" display="block">
                    Currently studying at Lancaster University
                </Typography>
                <Typography variant="h5" align="center" color="white" component="p" display="block">
                    3rd Year Software Engineering Student.
                </Typography>
                <Typography variant="h5" align="center" color="white" component="p" display="block">
                    Interested in a Graduate Software Developer Role.
                </Typography>
                <Typography variant="h5" align="center" color="white" component="p" display="block">
                  --------------
                </Typography>
                    <Typography variant="h6" align="center" color="white" component="p" display="block"
                                style={{ fontWeight: 600 ,textDecoration: 'underline'}}>
                    Languages and Frameworks:
                </Typography>
                <Typography variant="h6" align="center" color="white" component="p" display="block">
                    - Java ( 5 Years) / C ( 3 Years) / Python (3 years )
                </Typography>
                <Typography variant="h6" align="center" color="white" component="p" display="block">
                    - SQL(mySQl , SQLite ) / noSQL (mongoDB )
                </Typography>
                <Typography variant="h6" align="center" color="white" component="p" display="block">
                    - Spring
                </Typography>
            </Container>
        <GithubLinks />
            <Container
                maxWidth="md"
                component="footer"
                sx={{
                    borderTop: (theme) => `1px solid ${theme.palette.divider}`,
                    mt: 8,
                    py: [3, 6],
                }}
            >
                <Grid container spacing={4} justifyContent="space-evenly">
                    {footers.map((footer) => (
                        <Grid item xs={6} sm={3} key={footer.title}>
                            <Typography variant="h6" color="text.primary" gutterBottom>
                                {footer.title}
                            </Typography>
                            <ul>
                                {footer.description.map((item) => (
                                    <li key={item}>
                                        <Link href="#" variant="subtitle1" color="text.secondary">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Container>
    );
}

export default App;
