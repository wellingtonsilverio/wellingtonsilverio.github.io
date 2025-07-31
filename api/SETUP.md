# 🚀 Setup Guide - Personal Chatbot API

## Initial Configuration

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Create a `.env` file in the project root with the following content:

```env
# OpenAI Configuration
OPENAI_API_KEY=your_openai_api_key_here
OPENAI_MODEL=gpt-3.5-turbo

# Server Configuration
PORT=3000
NODE_ENV=development

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

**Important:** Replace `your_openai_api_key_here` with your real OpenAI API key.

### 3. Configure Personal Information
Edit the file `src/config/personalInfo.js` with your real information:

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

### 4. Start the Server

#### Development (with hot reload):
```bash
npm run dev
```

#### Production:
```bash
npm start
```

### 5. Test the API

#### Health Check:
```bash
curl http://localhost:3000/api/health
```

#### Bot Information:
```bash
curl http://localhost:3000/api/info
```

#### Test Chat (example):
```bash
curl -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{
    "messages": [
      {
        "role": "user",
        "content": "Hello! How are you?"
      }
    ]
  }'
```

## 🔧 React Integration

### 1. Basic React Hook

Create a custom hook for the chatbot:

```javascript
// hooks/useChatbot.js
import { useState, useCallback } from 'react';

const useChatbot = (apiUrl = 'http://localhost:3000/api') => {
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

      const response = await fetch(`${apiUrl}/chat`, {
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
  }, [messages, apiUrl]);

  const clearMessages = useCallback(() => {
    setMessages([]);
    setError(null);
  }, []);

  return {
    messages,
    sendMessage,
    loading,
    error,
    clearMessages
  };
};

export default useChatbot;
```

### 2. React Component

Create a chatbot component:

```jsx
// components/Chatbot.jsx
import React, { useState, useRef, useEffect } from 'react';
import useChatbot from '../hooks/useChatbot';
import './Chatbot.css';

const Chatbot = () => {
  const [input, setInput] = useState('');
  const { messages, sendMessage, loading, error, clearMessages } = useChatbot();
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.trim() && !loading) {
      await sendMessage(input);
      setInput('');
    }
  };

  return (
    <div className="chatbot">
      <div className="chatbot-header">
        <h3>Personal Chatbot</h3>
        <button onClick={clearMessages} className="clear-btn">
          Clear Chat
        </button>
      </div>

      <div className="messages-container">
        {messages.length === 0 && (
          <div className="welcome-message">
            <p>👋 Hello! I'm your personalized chatbot. Ask me anything!</p>
          </div>
        )}

        {messages.map((message, index) => (
          <div key={index} className={`message ${message.role}`}>
            <div className="message-content">
              <strong>{message.role === 'user' ? 'You' : 'Bot'}:</strong>
              <p>{message.content}</p>
            </div>
          </div>
        ))}

        {loading && (
          <div className="message assistant">
            <div className="message-content">
              <strong>Bot:</strong>
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {error && (
        <div className="error-message">
          <p>❌ {error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="input-form">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          disabled={loading}
          className="message-input"
        />
        <button 
          type="submit" 
          disabled={loading || !input.trim()}
          className="send-button"
        >
          {loading ? 'Sending...' : 'Send'}
        </button>
      </form>
    </div>
  );
};

export default Chatbot;
```

### 3. CSS Styling

```css
/* components/Chatbot.css */
.chatbot {
  max-width: 600px;
  margin: 0 auto;
  border: 1px solid #e1e5e9;
  border-radius: 8px;
  overflow: hidden;
  background: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.chatbot-header {
  background: #f8f9fa;
  padding: 15px 20px;
  border-bottom: 1px solid #e1e5e9;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.chatbot-header h3 {
  margin: 0;
  color: #333;
}

.clear-btn {
  background: #dc3545;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.clear-btn:hover {
  background: #c82333;
}

.messages-container {
  height: 400px;
  overflow-y: auto;
  padding: 20px;
}

.welcome-message {
  text-align: center;
  color: #666;
  font-style: italic;
}

.message {
  margin-bottom: 15px;
  display: flex;
}

.message.user {
  justify-content: flex-end;
}

.message.assistant {
  justify-content: flex-start;
}

.message-content {
  max-width: 70%;
  padding: 12px 16px;
  border-radius: 18px;
  word-wrap: break-word;
}

.message.user .message-content {
  background: #007bff;
  color: white;
}

.message.assistant .message-content {
  background: #f1f3f4;
  color: #333;
}

.typing-indicator {
  display: flex;
  gap: 4px;
  padding: 8px 0;
}

.typing-indicator span {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #999;
  animation: typing 1.4s infinite ease-in-out;
}

.typing-indicator span:nth-child(1) { animation-delay: -0.32s; }
.typing-indicator span:nth-child(2) { animation-delay: -0.16s; }

@keyframes typing {
  0%, 80%, 100% { transform: scale(0.8); opacity: 0.5; }
  40% { transform: scale(1); opacity: 1; }
}

.error-message {
  background: #f8d7da;
  color: #721c24;
  padding: 10px;
  margin: 10px 20px;
  border-radius: 4px;
  border: 1px solid #f5c6cb;
}

.input-form {
  display: flex;
  padding: 20px;
  border-top: 1px solid #e1e5e9;
  gap: 10px;
}

.message-input {
  flex: 1;
  padding: 12px 16px;
  border: 1px solid #ddd;
  border-radius: 20px;
  font-size: 14px;
  outline: none;
}

.message-input:focus {
  border-color: #007bff;
}

.send-button {
  background: #007bff;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
}

.send-button:hover:not(:disabled) {
  background: #0056b3;
}

.send-button:disabled {
  background: #ccc;
  cursor: not-allowed;
}
```

### 4. API Service with Axios

```javascript
// services/chatbotAPI.js
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api';

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

### 5. Usage in App

```jsx
// App.js
import React from 'react';
import Chatbot from './components/Chatbot';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Personal Chatbot Demo</h1>
      </header>
      <main>
        <Chatbot />
      </main>
    </div>
  );
}

export default App;
```

## 📝 Personalization

### Add Training Conversations
To improve the bot's communication style, you can add examples of your conversations in the `src/config/personalInfo.js` file:

```javascript
communicationStyle: {
  // ... other configurations
  trainingConversations: [
    {
      context: "LinkedIn conversation about technology",
      messages: [
        { role: "user", content: "What's your opinion on React?" },
        { role: "assistant", content: "React is amazing! 👨‍💻 I've been using it a lot in my projects..." }
      ]
    }
  ]
}
```

### Adjust ChatGPT Parameters
In the file `src/services/openaiService.js`, you can adjust:

- `max_tokens`: Character limit in response
- `temperature`: Response creativity (0.0 to 1.0)
- `model`: ChatGPT model used

## 🔧 Useful Scripts

```bash
# Format code
npm run format

# Check linting
npm run lint

# Fix linting issues automatically
npm run lint:fix

# Run tests
npm test

# Start in development mode
npm run dev
```

## 🚨 Troubleshooting

### Error: "OpenAI not configured"
- Check if the `.env` file exists
- Confirm that `OPENAI_API_KEY` is correctly defined
- Restart the server after changing `.env`

### Error: "Rate limit exceeded"
- Wait a few minutes before making new requests
- Adjust `RATE_LIMIT_MAX_REQUESTS` in `.env` if necessary

### Error: "Validation failed"
- Check if the request format is correct
- Confirm that all messages have `role` and `content`

## 📚 Next Steps

1. **Configure your personal information** in the file `src/config/personalInfo.js`
2. **Get an OpenAI API key** at https://platform.openai.com/
3. **Configure the `.env` file** with your key
4. **Test the API** using the examples above
5. **Integrate with your portfolio** or frontend application

## 🎯 Implemented Features

✅ REST API with Express  
✅ ChatGPT integration  
✅ Data validation  
✅ Rate limiting  
✅ Error handling  
✅ Personal information configuration  
✅ Personalized communication style  
✅ ESLint and Prettier  
✅ Basic tests  
✅ Complete documentation  

Now you have a complete API that responds like you! 🎉 