const mongoose = require('mongoose');

const chatMessageSchema = new mongoose.Schema({
    userMessage: {
        type: String,
        required: true
    },
    botResponse: {
        type: String,
        required: true
    },
    sentiment: {
        type: String,
        enum: ['positive', 'negative', 'neutral'],
        default: 'neutral'
    },
    sessionId: {
        type: String,
        required: true
    },
    userAgent: {
        type: String,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        index: true
    }
});

module.exports = mongoose.model('ChatMessage', chatMessageSchema);