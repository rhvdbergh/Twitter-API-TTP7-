// Treehouse Techdegree Project 7: Twitter API

// Ronald van der Bergh

// I aim for an "exceeds expecations" grade with this submission.

// This project uses the Twitter API (REST) to access a user's Twitter account and display the five most recent tweets, followers, and private messages. The information is rendered using Pug templates with Express on Node.js.

// For extra credit, the application allows the user to send a tweet. If something goes wrong with routing, the user receives user friendly feedback. The user's personal Twitter background is displayed as a header.

// For this project, Treehouse provided CSS and HTML files.

const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('Twitter API app listening on port 3000');
})