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

  :host([chat-open]) .chat-trigger {
    display: none;
  }

  .chat-trigger {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 60px;
    height: 60px;
    cursor: pointer;
    z-index: 999;
    transition: transform 0.3s ease;
  }

  .chat-trigger:hover {
    transform: scale(1.05);
  }

  .chat-trigger:focus-visible {
    outline: 2px solid var(--sitebot-primary-color, #007bff);
    outline-offset: 2px;
  }

  .chat-trigger img {
    width: 65%;
    height: 65%;
    object-fit: cover;
    border-radius: 50%;
    z-index: 2;
  }

  .trigger-content {
    position: relative;
    width: 100%;
    height: 100%;
    background: var(--sitebot-primary-color, #2196f3);
    border-radius: 50%;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .trigger-pulse {
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--sitebot-primary-color, #2196f3);
    border-radius: 50%;
    opacity: 0.6;
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 0.6;
    }
    70% {
      transform: scale(1.3);
      opacity: 0;
    }
    100% {
      transform: scale(1.3);
      opacity: 0;
    }
  }

  .unread-badge {
    position: absolute;
    top: -5px;
    right: -5px;
    background: #ff4444;
    color: white;
    border-radius: 50%;
    width: 22px;
    height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: bold;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    border: 2px solid white;
    z-index: 3;
  }

  .chatbot-container {
    position: absolute;
    bottom: 0;
    right: 0;
    width: var(--sitebot-width, 380px);
    height: var(--sitebot-height, 500px);
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
    /* margin-bottom: 80px; */
  }

  :host([position="left"]) .chatbot-container {
    right: auto;
    left: 0;
  }

  .chatbot-container.visible {
    opacity: 1;
    /* transform: translateY(0) scale(1); */
    pointer-events: all;
  }

  .chatbot-container.visible ~ .chat-trigger {
    display: none;
  }

  .chatbot-header {
    background: var(--sitebot-primary-color, #007bff);
    color: white;
    padding: 15px 20px;
    display: flex;
    align-items: center;
    gap: 12px;
    position: sticky;
    top: 0;
    z-index: 2;
    min-height: 60px;
    border-radius: 12px 12px 0 0;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }

  .chatbot-header img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    object-fit: cover;
  }

  .chatbot-header span {
    flex: 1;
    font-size: 16px;
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .close-button {
    position: relative;
    right: 0;
    background: none;
    border: none;
    color: white;
    font-size: 24px;
    cursor: pointer;
    padding: 8px 12px;
    line-height: 1;
    opacity: 0.8;
    transition: all 0.2s ease;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 40px;
    min-height: 40px;
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

  .message-content a {
    color: inherit;
    text-decoration: underline;
    word-break: break-all;
    cursor: pointer;
    transition: opacity 0.2s ease;
    pointer-events: all;
  }

  .message-content a:hover {
    opacity: 0.8;
  }

  .message-content code {
    background: rgba(0, 0, 0, 0.1);
    padding: 2px 4px;
    border-radius: 4px;
    font-family: monospace;
    font-size: 0.9em;
  }

  .message-content strong {
    font-weight: 600;
  }

  .message-content em {
    font-style: italic;
  }

  .message-content li {
    margin-left: 20px;
    list-style-type: disc;
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
    background: var(--sitebot-primary-color, #007bff);
    color: white;
    align-self: flex-end;
  }

  .message.user .message-content a {
    color: white;
    text-decoration-color: rgba(255, 255, 255, 0.8);
  }

  .message.user .message-content code {
    background: rgba(255, 255, 255, 0.2);
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
    border-color: var(--sitebot-primary-color, #007bff);
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
    :host {
      bottom: 0;
      right: 0;
      left: 0;
      margin: 0;
    }

    .chat-trigger {
      position: fixed;
      bottom: 20px;
      right: 20px;
    }

    .chatbot-container {
      position: fixed;
      width: 100vw !important;
      height: 100vh !important;
      max-height: 100vh;
      right: 0;
      bottom: 0;
      left: 0;
      top: 0;
      margin: 0;
      border-radius: 0;
    }

    .chatbot-container.visible {
      transform: none;
    }

    .chatbot-header {
      border-radius: 0;
      padding: 15px;
      position: sticky;
      top: 0;
      z-index: 2;
    }

    .chatbot-messages {
      flex: 1;
      height: calc(100vh - 130px);
      padding: 15px;
    }

    .message {
      max-width: 85%;
      padding: 12px;
      font-size: 16px;
    }

    .chatbot-input {
      position: sticky;
      bottom: 0;
      background: white;
      padding: 15px;
      box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
    }

    .chatbot-input input {
      padding: 15px;
      font-size: 16px;
      border-radius: 25px;
    }

    .chatbot-container.visible ~ .chat-trigger {
      display: none;
    }

    @supports (padding: max(0px)) {
      .chatbot-container {
        padding-bottom: env(safe-area-inset-bottom, 0);
        height: calc(100vh - env(safe-area-inset-bottom, 0)) !important;
      }

      .chatbot-input {
        padding-bottom: max(15px, env(safe-area-inset-bottom, 15px));
      }
    }
  }

  @media (max-width: 896px) and (orientation: landscape) {
    .chatbot-container {
      height: 100vh !important;
    }

    .chatbot-messages {
      height: calc(100vh - 120px);
    }

    .message {
      max-width: 70%;
    }
  }

  @media (min-width: 481px) and (max-width: 1024px) {
    .chatbot-container {
      /* width: 400px !important; */
      /* height: 600px !important;
      margin-bottom: 90px; */
    }

    .message {
      max-width: 80%;
      font-size: 15px;
    }
  }

  @media (min-width: 1025px) {
    .chatbot-container {
      width: var(--sitebot-width, 380px) !important;
      height: var(--sitebot-height, 500px) !important;
      /* margin-bottom: 90px; */
    }

    :host([position="left"]) .chatbot-container {
      margin-right: 0;
      margin-left: 20px;
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