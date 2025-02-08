# Sitebot - Universal Chatbot for Any JS Framework

## Introduction
Sitebot is a lightweight, customizable chatbot that can be integrated into **React, Vue, Angular, or plain JavaScript** applications. It connects to an AI API and processes queries based on a website's details provided in a text file.

## Features
✅ **Framework-Agnostic** - Works with React, Vue, Angular, or plain JavaScript.
✅ **Customizable UI** - Modify styles, header name, and bot icon.
✅ **Text File Integration** - Load website details dynamically.
✅ **AI-Powered** - Uses an external AI API for intelligent responses.
✅ **Easy to Use** - Simply add the `<site-bot>` tag or use the JavaScript API.

## Installation
Install via npm:
```sh
npm install sitebot
```
Or include it via CDN:
```html
<script src="https://cdn.jsdelivr.net/npm/sitebot"></script>
```

## Usage
### **In Vanilla JS**
```html
<site-bot 
  apiKey="YOUR_AI_API_KEY" 
  textFile="./website-info.txt" 
  headerName="My Chatbot" 
  botIcon="./boticon.png"
></site-bot>
```

### **In React**
```tsx
import "sitebot";

const App = () => {
  return (
    <div>
      <site-bot 
        apiKey="YOUR_AI_API_KEY" 
        textFile="./website-info.txt" 
        headerName="My Chatbot" 
        botIcon="./boticon.png"
      ></site-bot>
    </div>
  );
};
```

### **In Vue**
```vue
<template>
  <site-bot apiKey="YOUR_AI_API_KEY" textFile="./website-info.txt"></site-bot>
</template>

<script>
import "sitebot";
export default {
  name: "ChatBotComponent",
};
</script>
```

### **In Angular**
```html
<site-bot apiKey="YOUR_AI_API_KEY" textFile="./website-info.txt"></site-bot>
```

## API Options
| Prop         | Type     | Description |
|-------------|---------|-------------|
| `apiKey`    | String  | Required. Your AI API key. |
| `textFile`  | String  | Path to the text file containing website details. |
| `headerName` | String  | (Optional) Chatbot header text. Default: "Chatbot". |
| `botIcon`   | String  | (Optional) Path to a custom bot icon. |
| `customStyles` | Object | (Optional) Custom styles for the chatbot. |

## Contributing
Feel free to contribute! Open a pull request or report issues in the repository.

## License
MIT License.
