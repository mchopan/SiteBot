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
    position: relative;
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
    outline: none;
  }

  .chat-trigger:hover,
  .chat-trigger:focus {
    transform: scale(1.1);
  }

  .chat-trigger:focus-visible {
    outline: 2px solid var(--sitebot-header-background, #007bff);
    outline-offset: 2px;
  }

  .chat-trigger img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    object-fit: cover;
  }

  .unread-badge {
    position: absolute;
    top: -5px;
    right: -5px;
    background: #ff4444;
    color: white;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: bold;
    animation: bounce 0.3s ease;
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
    overflow: hidden;
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
    background: var(--sitebot-header-background, #007bff);
    color: white;
    padding: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
    position: relative;
    border-radius: 12px 12px 0 0;
    min-height: 50px;
  }

  .chatbot-header img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    object-fit: cover;
  }

  .close-button {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: white;
    font-size: 24px;
    cursor: pointer;
    padding: 8px;
    line-height: 1;
    opacity: 0.8;
    transition: all 0.2s ease;
    border-radius: 4px;
  }

  .close-button:hover,
  .close-button:focus {
    opacity: 1;
    background: rgba(255, 255, 255, 0.1);
  }

  .close-button:focus-visible {
    outline: 2px solid white;
    outline-offset: 2px;
  }

  .error-message {
    background: #ff4444;
    color: white;
    padding: 10px;
    margin: 10px;
    border-radius: 6px;
    font-size: 14px;
    animation: slideIn 0.3s ease;
  }

  .chatbot-messages {
    flex: 1;
    overflow-y: auto;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    scrollbar-width: thin;
    scrollbar-color: rgba(0, 0, 0, 0.2) transparent;
  }

  .chatbot-messages::-webkit-scrollbar {
    width: 6px;
  }

  .chatbot-messages::-webkit-scrollbar-track {
    background: transparent;
  }

  .chatbot-messages::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 3px;
  }

  .message {
    margin: 4px 0;
    padding: 10px;
    border-radius: 12px;
    max-width: 80%;
    word-wrap: break-word;
    animation: messageSlide 0.3s ease;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .message-content {
    line-height: 1.4;
  }

  .message-timestamp {
    font-size: 11px;
    opacity: 0.7;
    align-self: flex-end;
  }

  .message.bot .message-timestamp {
    align-self: flex-start;
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
    min-height: 60px;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .input-help {
    font-size: 12px;
    color: #666;
    padding: 0 4px;
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
    transition: all 0.2s ease;
    margin: 0;
    box-sizing: border-box;
  }

  .chatbot-input input:focus {
    border-color: var(--sitebot-header-background, #007bff);
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }

  .loading-dots {
    display: inline-flex;
    gap: 4px;
    padding: 8px;
    align-items: center;
    justify-content: center;
    min-height: 24px;
    background: rgba(0, 0, 0, 0.05);
    border-radius: 12px;
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

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 480px) {
    .chatbot-container {
      width: 100vw;
      height: 100vh;
      right: 0;
      bottom: 0;
      border-radius: 0;
    }

    :host([position="left"]) .chatbot-container {
      left: 0;
    }

    .chatbot-header {
      border-radius: 0;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .chat-trigger,
    .chatbot-container,
    .message,
    .unread-badge {
      animation: none;
      transition: none;
    }
  }

  .chatbot-input button.send-button {
    padding: 8px 16px;
    margin-left: 8px;
    background-color: var(--sitebot-primary-color, #007bff);
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.2s;
  }

  .chatbot-input button.send-button:hover {
    background-color: var(--sitebot-primary-color-hover, #0056b3);
  }

  .chatbot-input button.send-button:active {
    transform: scale(0.98);
  }
`;