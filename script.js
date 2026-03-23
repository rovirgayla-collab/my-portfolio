// script.js

// JavaScript functionality for my-portfolio

// Function to display current date and time in the specified format
function displayCurrentDateTime() {
    const now = new Date();
    const formattedDateTime = now.toISOString().replace('T', ' ').split('.')[0]; // Formats to 'YYYY-MM-DD HH:MM:SS'
    console.log('Current Date and Time (UTC):', formattedDateTime);
}

displayCurrentDateTime();