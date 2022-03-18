import * as React from "react";
import {Container, CssBaseline} from "@mui/material";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./styles.css";

function layouts() {
    return [
        {
            title: 'CountryGuesser',
            description: 'A quiz based country game via Android',
            src: 'https://cdn.discordapp.com/attachments/954222192881696791/954222222078251098/unknown.png',
            href: 'https://github.com/CameronPugh/CountryGuesser',

        },
        {
            title: 'Restaurant Management System',
            description: 'A React App to manage a restaurant via an API',
            src: 'https://cdn.discordapp.com/attachments/954222192881696791/954223516029444156/unknown.png',
            href: 'https://github.com/CameronPugh/Restaurant-Management-System',
        },
        {
            title: 'Microbit IOT',
            description: 'Microbit location and sesor tracking via Radio',
            src: 'https://cdn.sanity.io/images/ajwvhvgo/production/86e5da4fed89ce6729b522e6e8a8f12c88a2d7f1-790x635.png?rect=0,27,790,580&bg=fff&w=648&h=476&q=80&fit=min&auto=format',
            href: 'https://github.com/CameronPugh/Microbit-IOT',
        },
        {
            title: 'CubeRun',
            description:'A Simple Unity game where you dodge obstacles as a cube',
            src: 'https://cdn.discordapp.com/attachments/954222192881696791/954224101403275284/unknown.png',
            href: 'https://github.com/CameronPugh/CubeRun',
        },
        {
            title: 'Smart Tools Environment',
            description: 'A controller app for managing a Microbit IOT network',
            src: 'https://cdn.discordapp.com/attachments/954222192881696791/954224423840415785/unknown.png',
            href: 'https://github.com/CameronPugh/Smart-Tool-Enviroment-App',

        },
        {
            title: 'WebScraper',
            description: 'A WebScraper script for checking all embed links in a given webpage',
            src: 'https://cdn.discordapp.com/attachments/954222192881696791/954224784886071316/unknown.png',
            href: 'https://github.com/CameronPugh/Web_Scraper',
        },
    ];
}

export default class GithubLinks extends React.Component{
    render(){
        return (
            <Container className="Container" maxWidth="xl">
                <Grid container spacing={2}>
                    {layouts().map((layout) => (
                        <Grid item sm={2} md={4} sx={{ flexGrow: 1 }} key={layout.title}>
                            <div id="test1"> </div>
                            <Card className="tile" raised={true}
                                  sx={{
                                      height: '100%',
                                      display: 'flex',
                                      flexDirection: 'column',
                                      flexGrow: 1,
                                  }}
                            >
                                <CardMedia
                                    component="a"
                                    href={layout.href}
                                    sx={{ height: 0, pt: '56.25%' }}
                                    style={{height: 0, paddingTop: '56.25%'}}
                                    image={layout.src}
                                    title={layout.title}
                                    rel="nofollow"
                                    target="_blank"
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h5" align="left" component="h2">
                                        {layout.title}
                                    </Typography>
                                    <Typography component="p">{layout.description}</Typography>
                                </CardContent>


                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
         );
    }
}