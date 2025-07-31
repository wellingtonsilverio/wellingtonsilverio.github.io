# Personal Chatbot API

A Node.js Express API that integrates with ChatGPT to create a personalized bot that responds like you, based on your personal information and communication style.

## 🚀 Features

- **Personalized Responses**: The bot responds like you, using your personal information
- **Conversation History**: Maintains context of previous messages
- **Communication Style**: Simulates your way of speaking on LinkedIn
- **True Information**: Responds only with real data about you
- **Rate Limiting**: Protection against spam
- **Data Validation**: Robust request validation
- **Functional Programming**: Clean, maintainable code structure

## 📋 Prerequisites

- Node.js (version 14 or higher)
- NPM or Yarn
- OpenAI API Key

## 🛠️ Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd personal-chatbot-api
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment variables**
```bash
cp env.example .env
```

Edit the `.env` file with your configurations:
```env
OPENAI_API_KEY=your_openai_api_key_here
OPENAI_MODEL=gpt-3.5-turbo
PORT=3000
NODE_ENV=development
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

4. **Configure your personal information**
Edit the file `src/config/personalInfo.js` with your real information.

## 🚀 How to Use

### Development
```bash
npm run dev
```

### Production
```bash
npm start
```

## 📚 API Endpoints

### POST `/api/chat`
Processes a message and returns the bot's response.

**Request Body:**
```json
{
  "messages": [
    {
      "role": "user",
      "content": "Hello! How are you?"
    },
    {
      "role": "assistant",
      "content": "Hi! I'm doing well, thanks for asking! 👨‍💻"
    },
    {
      "role": "user",
      "content": "What's your experience with React?"
    }
  ]
}
```

**Response:**
```json
{
  "success": true,
  "message": "Response generated successfully",
  "data": {
    "response": "I have solid experience with React! I've worked on several projects...",
    "timestamp": "2024-01-15T10:30:00.000Z"
  }
}
```

### GET `/api/health`
Health check for the API.

**Response:**
```json
{
  "success": true,
  "message": "API working correctly",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "version": "1.0.0"
}
```

### GET `/api/info`
Returns information about the bot.

**Response:**
```json
{
  "success": true,
  "message": "Bot information",
  "data": {
    "name": "Wellington Abilio Alves Silverio",
    "description": "Personalized bot that responds like Wellington",
    "capabilities": [
      "Answer questions about professional experience",
      "Share information about education and skills",
      "Maintain conversations in personal style",
      "Respond only with true information"
    ],
    "limitations": [
      "Don't invent information about me",
      "Respond only based on provided information",
      "Maintain professional but friendly tone",
      "Be honest about what I don't know"
    ]
  }
}
```

## 🔧 React Integration

### Basic React Hook Example

```javascript
import { useState, useCallback } from 'react';

const useChatbot = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendMessage = useCallback(async (content) => {
    setLoading(true);
    setError(null);

    try {
      const newMessages = [
        ...messages,
        { role: 'user', content }
      ];

      const response = await fetch('http://localhost:3000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: newMessages
        })
      });

      const data = await response.json();

      if (data.success) {
        const botMessage = {
          role: 'assistant',
          content: data.data.response
        };

        setMessages([...newMessages, botMessage]);
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError('Failed to send message');
    } finally {
      setLoading(false);
    }
  }, [messages]);

  return {
    messages,
    sendMessage,
    loading,
    error
  };
};

export default useChatbot;
```

### React Component Example

```jsx
import React, { useState } from 'react';
import useChatbot from './useChatbot';

const ChatbotComponent = () => {
  const [input, setInput] = useState('');
  const { messages, sendMessage, loading, error } = useChatbot();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.trim()) {
      await sendMessage(input);
      setInput('');
    }
  };

  return (
    <div className="chatbot">
      <div className="messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.role}`}>
            <strong>{message.role === 'user' ? 'You' : 'Bot'}:</strong>
            <p>{message.content}</p>
          </div>
        ))}
      </div>

      {loading && <div className="loading">Bot is typing...</div>}
      {error && <div className="error">{error}</div>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          disabled={loading}
        />
        <button type="submit" disabled={loading}>
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatbotComponent;
```

### Axios Integration

```javascript
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api';

const chatbotAPI = {
  // Send message to chatbot
  sendMessage: async (messages) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/chat`, {
        messages
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to send message');
    }
  },

  // Get bot information
  getBotInfo: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/info`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to get bot info');
    }
  },

  // Health check
  healthCheck: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/health`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'API not responding');
    }
  }
};

export default chatbotAPI;
```

## ⚙️ Personal Information Configuration

Edit the file `src/config/personalInfo.js` to include your information:

```javascript
const personalInfo = {
  name: 'Your Name',
  
  education: {
    institutions: [
      {
        name: 'Your University',
        degree: 'Your Degree',
        period: '2018 - 2022',
        description: 'Description of your course'
      }
    ]
  },

  workExperience: [
    {
      company: 'Your Company',
      position: 'Your Position',
      period: '2022 - Present',
      description: 'Description of your responsibilities',
      technologies: ['React', 'Node.js', 'TypeScript']
    }
  ],

  skills: {
    programmingLanguages: ['JavaScript', 'TypeScript', 'Python'],
    frameworks: ['React', 'Node.js', 'Express'],
    // ... other skills
  },

  communicationStyle: {
    tone: 'Professional but accessible',
    characteristics: [
      'Direct and objective responses',
      'Moderate use of emojis'
    ],
    examples: [
      'Great question! 👨‍💻',
      'That\'s cool! I\'m happy to help.'
    ]
  }
};
```

## 🧪 Available Scripts

```bash
# Development
npm run dev

# Production
npm start

# Linting
npm run lint
npm run lint:fix

# Formatting
npm run format

# Tests
npm test
```

## 🔧 Configuration

### ESLint
The project uses ESLint with recommended configurations and Prettier integration.

### Prettier
Automatic code formatting with consistent configurations.

### Rate Limiting
- **Window**: 15 minutes
- **Maximum**: 100 requests per window
- **Configurable**: Via environment variables

## 📁 Project Structure

```
src/
├── config/
│   └── personalInfo.js      # Personal information
├── controllers/
│   └── chatController.js     # Pure functions
├── middleware/
│   ├── errorHandler.js       # Error handling
│   └── validation.js        # Data validation
├── routes/
│   └── chatRoutes.js        # Route definitions
├── services/
│   └── openaiService.js     # OpenAI integration
└── server.js                # Main file
```

## 🔒 Security

- **Helmet**: Security headers
- **CORS**: Allowed origins configuration
- **Rate Limiting**: Protection against spam
- **Validation**: Robust input validation
- **Error Handling**: Secure error handling

## 🤝 Contributing

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is under the MIT license. See the `LICENSE` file for more details.

## 🆘 Support

If you encounter any problems or have questions, open an issue in the repository. 