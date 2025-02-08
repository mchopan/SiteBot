# 🤖 SiteBot - Universal AI Chatbot Component

A lightweight, customizable AI chatbot that works with any JavaScript framework or vanilla JS. Supports multiple AI providers including OpenAI, Gemini, Claude, and DeepSeek.

## ✨ Features

- 🔌 **Framework Agnostic** - Works everywhere
- 🎨 **Fully Customizable** - Style it your way
- 🤖 **Multiple AI Providers** - OpenAI, Gemini, Claude, DeepSeek
- ♿ **Accessible** - ARIA support & keyboard navigation
- 📱 **Responsive** - Works on all devices
- 🌐 **Web Component** - Use with any framework
- 📨 **Message History** - Timestamps and persistence
- 🔔 **Notifications** - Unread message counter
- 📱 **Mobile Optimized** - Full-screen on mobile

## 📦 Installation

```bash
npm install sitebot
```

## 🚀 Quick Start

### React
```jsx
import 'sitebot';

function App() {
  const customStyles = {
    containerWidth: '350px',
    containerHeight: '500px',
    headerBackground: '#007bff',
    userMessageColor: '#3b82f6',
    botMessageColor: '#f3f4f6'
  };

  return (
    <site-bot
      aiconfig={JSON.stringify({
        provider: 'openai',  // or 'gemini', 'claude', 'deepseek'
        apiKey: 'your-api-key',
        model: 'gpt-3.5-turbo'  // optional
      })}
      customstyles={JSON.stringify(customStyles)}
      header-name="AI Assistant"
      bot-icon="path/to/icon.png"
    />
  );
}
```

### Vue
```vue
<template>
  <site-bot
    :aiconfig="JSON.stringify(aiConfig)"
    :customstyles="JSON.stringify(customStyles)"
    header-name="AI Assistant"
    bot-icon="path/to/icon.png"
  />
</template>

<script>
import 'sitebot';

export default {
  data() {
    return {
      aiConfig: {
        provider: 'openai',
        apiKey: 'your-api-key',
        model: 'gpt-3.5-turbo'
      },
      customStyles: {
        containerWidth: '350px',
        containerHeight: '500px',
        headerBackground: '#007bff'
      }
    }
  }
}
</script>
```

### Angular
```typescript
// app.module.ts
import 'sitebot';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

// component.ts
@Component({
  template: `
    <site-bot
      [attr.aiconfig]="aiConfigString"
      [attr.customstyles]="customStylesString"
      header-name="AI Assistant"
      bot-icon="path/to/icon.png"
    ></site-bot>
  `
})
export class AppComponent {
  aiConfigString = JSON.stringify({
    provider: 'openai',
    apiKey: 'your-api-key',
    model: 'gpt-3.5-turbo'
  });

  customStylesString = JSON.stringify({
    containerWidth: '350px',
    containerHeight: '500px',
    headerBackground: '#007bff'
  });
}
```

### Vanilla JavaScript
```html
<script src="https://unpkg.com/sitebot"></script>

<site-bot id="myBot" header-name="AI Assistant"></site-bot>

<script>
  const bot = document.getElementById('myBot');
  
  bot.aiconfig = JSON.stringify({
    provider: 'openai',
    apiKey: 'your-api-key',
    model: 'gpt-3.5-turbo'
  });

  bot.customstyles = JSON.stringify({
    containerWidth: '350px',
    containerHeight: '500px',
    headerBackground: '#007bff'
  });
</script>
```

## ⚙️ Configuration

### AI Providers
```javascript
{
  provider: 'openai' | 'gemini' | 'claude' | 'deepseek',
  apiKey: 'your-api-key',
  model: 'model-name',  // optional
  apiEndpoint: 'custom-endpoint'  // optional
}
```

### Available Models
- OpenAI: 'gpt-3.5-turbo', 'gpt-4', etc.
- Gemini: 'gemini-pro'
- Claude: 'claude-3-opus-20240229'
- DeepSeek: 'deepseek-chat'

### Styling Options
```javascript
const customStyles = {
  // Container
  containerWidth: '350px',
  containerHeight: '500px',
  position: 'right' | 'left',
  
  // Colors
  headerBackground: '#007bff',
  userMessageColor: '#007bff',
  botMessageColor: '#f0f0f0',
  inputBackground: '#ffffff',
  inputBorderColor: '#e5e7eb',
  
  // Typography
  fontFamily: 'Arial, sans-serif',
  
  // Custom Properties
  '--sitebot-custom-property': 'value'
}
```

## 🎮 Features

### Keyboard Navigation
- `Ctrl + /` or `Cmd + /`: Focus chat input
- `Esc`: Close chat
- `Enter`: Send message
- `Tab`: Navigate through elements
- `Enter` on chat trigger: Open/close chat

### Accessibility
- Screen reader announcements for new messages
- Unread message count announcements
- ARIA labels and roles
- Keyboard navigation
- Focus management
- High contrast support
- Reduced motion support

### Message Features
- Timestamp display
- Unread message counter
- Auto-scroll to new messages
- Loading indicators
- Error handling
- Message persistence

### Responsive Design
- Mobile-friendly interface
- Full-screen mode on mobile
- Touch-friendly targets
- Adaptive layout
- Responsive typography

## 🔑 API Reference

| Prop | Type | Description |
|------|------|-------------|
| `aiconfig` | String (JSON) | AI provider configuration |
| `header-name` | String | Chat header text |
| `bot-icon` | String | URL for bot icon |
| `customstyles` | String (JSON) | Custom styling options |
| `text-file` | String | Optional context file URL |

## 🔧 Browser Support

- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Mobile browsers
- IE11 not supported

## 📱 Mobile Support

The chatbot automatically switches to a full-screen mode on mobile devices for better usability. All features including keyboard navigation (with virtual keyboards) are fully supported on mobile devices.

## 🛠 Troubleshooting

### Common Issues
1. **API Key Issues**: Ensure your API key is valid and has proper permissions
2. **Styling Issues**: Make sure to stringify customStyles object
3. **Framework Integration**: Check if Web Components are properly registered

### Error Messages
- "API key is required": Configure aiconfig with valid API key
- "Failed to load context file": Check text-file URL
- "Unsupported AI provider": Use one of the supported providers

## 📝 License

MIT License - feel free to use in any project!

## 🤝 Contributing

Contributions welcome! Please feel free to submit a Pull Request.
