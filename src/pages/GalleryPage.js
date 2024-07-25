// src/pages/GalleryPage.js
import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

// src/pages/GalleryPage.js
// src/pages/GalleryPage.js
const photos = [
  { src: require("../assets/images/sports_day.jpg"), title: "Sports Day" },
  {
    src: require("../assets/images/science_exhibition.jpg"),
    title: "Science Exhibition",
  },
  {
    src: require("../assets/images/cultural_fest.jpg"),
    title: "Cultural Fest",
  },
  { src: require("../assets/images/classroom.jpg"), title: "Classroom" },
  { src: require("../assets/images/library.jpg"), title: "Library" },
];

const GalleryPage = () => (
  <Container>
    <Typography variant="h4" component="h2" gutterBottom>
      Photo Gallery
    </Typography>
    <Grid container spacing={4}>
      {photos.map((photo, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card>
            <CardMedia
              component="img"
              alt={photo.title}
              sx={{ height: 200, objectFit: "cover" }}
              image={photo.src}
              title={photo.title}
            />
            <Typography
              variant="body2"
              color="text.secondary"
              textAlign="center"
              sx={{ padding: 1 }}
            >
              {photo.title}
            </Typography>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default GalleryPage;
