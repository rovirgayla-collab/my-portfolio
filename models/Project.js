const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    projectNumber: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    longDescription: {
        type: String,
        trim: true
    },
    technologies: [{
        type: String,
        trim: true
    }],
    imageUrl: {
        type: String,
        trim: true
    },
    projectUrl: {
        type: String,
        trim: true
    },
    githubUrl: {
        type: String,
        trim: true
    },
    category: {
        type: String,
        enum: ['Web', 'Design', 'Mobile', 'Other'],
        default: 'Web'
    },
    featured: {
        type: Boolean,
        default: false
    },
    status: {
        type: String,
        enum: ['Completed', 'In Progress', 'Planned'],
        default: 'Completed'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Project', projectSchema);