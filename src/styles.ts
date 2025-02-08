import { css } from 'lit-element';

export const styles = css`
  :host {
    display: block;
    font-family: Arial, sans-serif;
  }

  .chatbot-container {
    width: 300px;
    height: 400px;
    border: 1px solid #ccc;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .chatbot-header {
    background: #007bff;
    color: white;
    padding: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .chatbot-header img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }

  .chatbot-messages {
    flex: 1;
    overflow-y: auto;
    padding: 10px;
  }

  .message {
    margin: 5px;
    padding: 8px;
    border-radius: 8px;
    max-width: 80%;
  }

  .message.bot {
    background: #f0f0f0;
    align-self: flex-start;
  }

  .message.user {
    background: #007bff;
    color: white;
    align-self: flex-end;
  }

  .chatbot-input {
    padding: 10px;
    border-top: 1px solid #ccc;
  }

  .chatbot-input input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`;