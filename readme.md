# 🤖 SiteBot - Universal AI Chatbot Component

A lightweight, customizable AI chatbot that works with any JavaScript framework or vanilla JS. Supports multiple AI providers including OpenAI, Gemini, Claude, and DeepSeek.

## ✨ Features

- 🔌 **Framework Agnostic** - Works everywhere
- 🎨 **Fully Customizable** - Style it your way
- 🤖 **Multiple AI Providers** - OpenAI, Gemini, Claude, DeepSeek
- ♿ **Accessible** - ARIA support & keyboard navigation
- 📱 **Responsive** - Works on all devices
- 🌐 **Web Component** - Use with any framework

## 📦 Installation

```bash
npm install sitebot
```

## 🚀 Quick Start

### React
```jsx
import 'sitebot';

function App() {
  return (
    <site-bot
      aiconfig={JSON.stringify({
        provider: 'openai',  // or 'gemini', 'claude', 'deepseek'
        apiKey: 'your-api-key',
        model: 'gpt-3.5-turbo'  // optional
      })}
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

### Styling
```javascript
const customStyles = {
  containerWidth: '350px',
  containerHeight: '500px',
  headerBackground: '#007bff',
  userMessageColor: '#007bff',
  botMessageColor: '#f0f0f0',
  fontFamily: 'Arial, sans-serif',
  position: 'right' | 'left'
}
```

## 🎮 Features

- **Keyboard Shortcuts**
  - `Ctrl + /` or `Cmd + /`: Focus chat input
  - `Esc`: Close chat
  - `Enter`: Send message

- **Accessibility**
  - Screen reader support
  - ARIA labels
  - Keyboard navigation
  - Focus management

- **Responsive Design**
  - Mobile-friendly
  - Adapts to screen size
  - Touch-friendly

## 🔑 API Reference

| Prop | Type | Description |
|------|------|-------------|
| `aiconfig` | String (JSON) | AI provider configuration |
| `header-name` | String | Chat header text |
| `bot-icon` | String | URL for bot icon |
| `customstyles` | String (JSON) | Custom styling options |

## 📝 License

MIT License - feel free to use in any project!

## 🤝 Contributing

Contributions welcome! Please feel free to submit a Pull Request.
