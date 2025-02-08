import { css } from 'lit-element';

export const styles = css`
  :host {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1000;
    font-family: var(--sitebot-font-family, Arial, sans-serif);
  }

  :host([position="left"]) {
    right: auto;
    left: 20px;
  }

  .chat-trigger {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: var(--sitebot-header-background, #007bff);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    transition: transform 0.3s ease;
  }

  .chat-trigger:hover {
    transform: scale(1.1);
  }

  .chat-trigger img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    object-fit: cover;
  }

  .chatbot-container {
    position: absolute;
    bottom: 80px;
    right: 0;
    width: var(--sitebot-container-width, 300px);
    height: var(--sitebot-container-height, 400px);
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 5px 20px rgba(0,0,0,0.15);
    background: white;
    opacity: 0;
    transform: translateY(20px) scale(0.95);
    transition: all 0.3s ease;
    pointer-events: none;
  }

  :host([position="left"]) .chatbot-container {
    right: auto;
    left: 0;
  }

  .chatbot-container.visible {
    opacity: 1;
    transform: translateY(0) scale(1);
    pointer-events: all;
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
    object-fit: cover;
  }

  .chatbot-messages {
    flex: 1;
    overflow-y: auto;
    padding: 10px;
    display: flex;
    flex-direction: column;
  }

  .message {
    margin: 8px;
    padding: 10px;
    border-radius: 12px;
    max-width: 80%;
    animation: messageSlide 0.3s ease;
  }

  @keyframes messageSlide {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .message.bot {
    background: var(--sitebot-bot-message-color, #f0f0f0);
    align-self: flex-start;
  }

  .message.user {
    background: var(--sitebot-user-message-color, #007bff);
    color: white;
    align-self: flex-end;
  }

  .chatbot-input {
    padding: 10px;
    border-top: 1px solid var(--sitebot-input-border-color, #ccc);
    background: var(--sitebot-input-background, white);
  }

  .chatbot-input input {
    width: 100%;
    padding: 12px;
    border: 1px solid var(--sitebot-input-border-color, #ccc);
    border-radius: 8px;
    background: var(--sitebot-input-background, white);
    color: var(--sitebot-input-color, inherit);
    font-family: inherit;
    font-size: 14px;
    outline: none;
    transition: border-color 0.2s;
  }

  .chatbot-input input:focus {
    border-color: var(--sitebot-header-background, #007bff);
  }

  .loading-dots {
    display: inline-flex;
    gap: 4px;
    padding: 8px;
  }

  .dot {
    width: 8px;
    height: 8px;
    background: #007bff;
    border-radius: 50%;
    animation: bounce 1.4s infinite ease-in-out;
  }

  .dot:nth-child(1) { animation-delay: -0.32s; }
  .dot:nth-child(2) { animation-delay: -0.16s; }

  @keyframes bounce {
    0%, 80%, 100% { transform: scale(0); }
    40% { transform: scale(1); }
  }
`;