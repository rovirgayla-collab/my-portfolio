// Hamburg menu toggle functionality
const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', () => {
    document.querySelector('.menu').classList.toggle('open');
});

// Typewriter effect cycling through roles
const roles = ['Developer', 'Designer', 'Content Creator'];
let index = 0;
const typewriter = document.querySelector('.typewriter');
function typeRole() {
    typewriter.textContent = roles[index];
    index = (index + 1) % roles.length;
    setTimeout(typeRole, 2000);
}
typeRole();

// Chatbox functionality with message handling
const chatbox = document.querySelector('.chatbox');
const sendButton = document.querySelector('.send-button');
sendButton.addEventListener('click', () => {
    const message = chatbox.value;
    // Handle message sending logic
    console.log('Message sent:', message);
    chatbox.value = ''; // Clear chatbox
});

// Fetch API calls to load projects and skills from backend
async function loadData() {
    try {
        const projectsResponse = await fetch('/api/projects');
        const projects = await projectsResponse.json();
        console.log('Projects:', projects);

        const skillsResponse = await fetch('/api/skills');
        const skills = await skillsResponse.json();
        console.log('Skills:', skills);
    } catch (error) {
        console.log('Error fetching data:', error);
    }
}
loadData();

// Smooth scrolling functionality
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Form validation
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Implement your validation logic here
    // If valid, submit the form
});

// AOS initialization
AOS.init();