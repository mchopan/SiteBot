# 🤖 SiteBot - Universal AI Chatbot Component

A lightweight, customizable AI chatbot that works with any JavaScript framework or vanilla JS. Supports multiple AI providers including OpenAI, Gemini, Claude, and DeepSeek.

## ✨ Features

- 🎯 **Context-Aware** - Train your bot with your website/company information
- 🔌 **Framework Agnostic** - Works with React, Vue, Angular, or vanilla JS
- 🎨 **Fully Customizable** - Simple theming with just a primary color
- 🤖 **Multiple AI Providers** - OpenAI, Gemini, Claude, DeepSeek
- ♿ **Accessible** - ARIA support & keyboard navigation
- 📱 **Responsive** - Full-screen on mobile, floating bubble on desktop
- 🌐 **Web Component** - Use with any tech stack
- 🔔 **Notifications** - Unread message counter & notifications
- 🎯 **Smart Responses** - Stays within your provided context
- 🚀 **Easy Setup** - Just 3 lines of code to get started

## 📦 Installation

```bash
npm install @mchopan/sitebot
```

## 🚀 Quick Start

### Minimal Setup (Just 3 lines!)
```jsx
import '@mchopan/sitebot';

<site-bot
  aiconfig={JSON.stringify({
    provider: 'openai',
    apiKey: 'your-api-key'
  })}
  context-text="Company Name: Example Corp
Website: www.example.com
About: We are a software company.
Contact: contact@example.com"
/>
```

### Full Configuration
```jsx
const customStyles = {
  primaryColor: '#007bff',      // One color to rule them all!
  position: 'right',            // 'left' or 'right'
  width: '380px',
  height: '500px'
};

const context = `
Company Name: Example Corp
Website: www.example.com

About Us:
We are a software company specializing in AI solutions.

Services:
1. AI Consulting
2. Custom Software Development
3. Cloud Solutions

Contact Information:
- Email: contact@example.com
- Phone: (555) 123-4567
- Hours: Monday-Friday, 9 AM - 5 PM EST

Frequently Asked Questions:
Q: What are your business hours?
A: We are open Monday-Friday, 9 AM - 5 PM EST.
`;

<site-bot
  aiconfig={JSON.stringify({
    provider: 'openai',         // or 'gemini', 'claude', 'deepseek'
    apiKey: 'your-api-key',
    model: 'gpt-3.5-turbo'      // optional
  })}
  customstyles={JSON.stringify(customStyles)}
  context-text={context}
  header-name="Company Assistant"
  bot-icon="/path/to/icon.png"
/>
```

## 🎨 Styling Options

### Simple Theme (Just one color!)
```javascript
{
  primaryColor: '#007bff'  // We'll handle the rest!
}
```

### Advanced Customization
```javascript
{
  // Basic
  primaryColor: '#007bff',
  position: 'right',
  width: '380px',
  height: '500px',
  
  // Advanced
  headerBackground: '#007bff',
  userMessageColor: '#007bff',
  botMessageColor: '#f0f0f0',
  fontFamily: 'Arial, sans-serif',
  inputBackground: '#ffffff',
  inputBorderColor: '#e5e7eb'
}
```

## 🤖 AI Provider Configuration

### OpenAI
```javascript
{
  provider: 'openai',
  apiKey: 'your-api-key',
  model: 'gpt-3.5-turbo'  // optional
}
```

### Gemini
```javascript
{
  provider: 'gemini',
  apiKey: 'your-api-key',
  model: 'gemini-pro'     // optional
}
```

### Claude
```javascript
{
  provider: 'claude',
  apiKey: 'your-api-key',
  model: 'claude-3-opus-20240229'  // optional
}
```

### DeepSeek
```javascript
{
  provider: 'deepseek',
  apiKey: 'your-api-key',
  model: 'deepseek-chat'  // optional
}
```

## 📝 Context Format
The `context-text` attribute accepts a string in this format:
```text
Company Name: [Your Company]
Website: [URL]

About Us:
[Company description]

Services:
1. [Service 1]
2. [Service 2]

Contact Information:
- Email: [email]
- Phone: [phone]
- Hours: [hours]

[Any other relevant information]
```

## 🎮 Features

### Keyboard Navigation
- `Ctrl + /` or `Cmd + /`: Focus chat input
- `Esc`: Close chat
- `Enter`: Send message
- `Tab`: Navigate elements

### Smart Features
- 🎯 Context-aware responses
- 🤖 Multiple AI providers
- 📝 Message history
- ⚡ Real-time responses
- 🔔 Unread notifications
- 📱 Mobile optimization

### Accessibility
- ♿ ARIA labels and roles
- 🎯 Focus management
- 🔊 Screen reader support
- 🎨 High contrast support
- 📱 Touch-friendly targets

## 🔑 Props Reference

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `aiconfig` | String (JSON) | Yes | AI provider configuration |
| `context-text` | String | Yes | Your company/website information |
| `customstyles` | String (JSON) | No | Styling configuration |
| `header-name` | String | No | Chat header text (default: "Chatbot") |
| `bot-icon` | String | No | URL for bot icon |

## 🌐 Browser Support
- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Mobile browsers
- IE11 not supported

## 📱 Mobile Support
Automatically switches to a beautiful full-screen experience on mobile devices!

## 🛠 Troubleshooting

### Common Issues
1. **Styling not applying?** Make sure to stringify your customStyles object
2. **AI not responding?** Verify your API key and provider settings
3. **Context not working?** Check your context-text format

### Error Messages
- "API key required": Add your AI provider's API key
- "Please provide context": Add your company info in context-text
- "Invalid AI provider": Use one of the supported providers

## 📄 License

MIT License - feel free to use in any project!

## 🤝 Contributing

Contributions welcome! Please feel free to submit a Pull Request.
