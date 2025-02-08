# Chatbot AI

A framework-agnostic AI-powered chatbot for websites. This chatbot allows users to integrate AI-powered conversations into their websites easily. It reads website details from a specified text file and sends queries to an AI backend for processing.

## Features
- Works with any JavaScript framework or library.
- Uses an AI API key provided by the user.
- Reads website details from a `.txt` file.
- Sends user queries along with website details to the backend.
- Receives and processes AI-generated responses.

## Installation
```sh
npm install chatbot-ai
```

## Usage
### Basic Setup
```ts
import Chatbot from "chatbot-ai";

const bot = new Chatbot({
  apiKey: "YOUR_AI_API_KEY",
  filePath: "./website-info.txt"
});

bot.onMessage((response) => {
  console.log("AI Response:", response);
});

bot.sendMessage("What is this website about?");
```

## Configuration Options
| Option    | Type   | Description |
|-----------|--------|-------------|
| `apiKey`  | string | The AI API key required for authentication. |
| `filePath` | string | Path to the `.txt` file containing website details. |

## API Methods
### `constructor(options: { apiKey: string, filePath: string })`
Initializes the chatbot with the given API key and text file path.

### `onMessage(callback: (response: string) => void)`
Registers a callback function that gets triggered when a response is received.

### `sendMessage(text: string)`
Sends a message to the AI API and processes the response.

## Example `.txt` File Format
Your `website-info.txt` should contain structured details about the website:
```
Website Name: My Awesome Site
Description: This is a platform for AI-powered chatbots.
Services: AI Chatbot, API Integrations, Web Development
```

## Build & Development
### Install Dependencies
```sh
npm install
```

### Build the Package
```sh
npm run build
```

### Run Tests
```sh
npm test
```

## Contributing
1. Fork the repository.
2. Create a new branch (`feature-branch`).
3. Commit your changes.
4. Push to the branch and submit a PR.

## License
This project is licensed under the MIT License.

