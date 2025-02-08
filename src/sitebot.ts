import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { styles } from './styles';
import { CustomStyles, AIConfig } from './types';

@customElement('site-bot')
export class SiteBot extends LitElement {
  static styles = styles;

  @property({ type: Object })
  get aiConfig(): AIConfig {
    return this._aiConfig;
  }
  set aiConfig(value: AIConfig | string) {
    const oldValue = this._aiConfig;
    let parsedValue: AIConfig;
    
    if (typeof value === 'string') {
      try {
        parsedValue = JSON.parse(value) as AIConfig;
      } catch (e) {
        console.error('Failed to parse aiConfig:', e);
        return;
      }
    } else {
      parsedValue = value;
    }

    this._aiConfig = {
      provider: parsedValue?.provider || 'openai',
      apiKey: parsedValue?.apiKey || '',
      model: parsedValue?.model || 'gpt-3.5-turbo',
      apiEndpoint: parsedValue?.apiEndpoint
    };
    this.requestUpdate('aiConfig', oldValue);
  }
  private _aiConfig: AIConfig = {
    provider: 'openai',
    apiKey: '',
    model: 'gpt-3.5-turbo'
  };

  @property({ type: String }) textFile = '';
  @property({ type: String, attribute: 'header-name' }) headerName = 'Chatbot';
  @property({ type: String, attribute: 'bot-icon' }) botIcon = '';
  
  @property({ type: Object })
  get customStyles(): CustomStyles {
    return this._customStyles;
  }
  set customStyles(value: CustomStyles | string) {
    const oldValue = this._customStyles;
    let parsedValue: CustomStyles;
    
    if (typeof value === 'string') {
      try {
        parsedValue = JSON.parse(value) as CustomStyles;
      } catch (e) {
        console.error('Failed to parse customStyles:', e);
        return;
      }
    } else {
      parsedValue = value;
    }

    // Apply default theme if primary color is provided
    if (parsedValue?.primaryColor) {
      this._customStyles = {
        headerBackground: parsedValue.primaryColor,
        userMessageColor: parsedValue.primaryColor,
        botMessageColor: '#f0f0f0',
        inputBorderColor: parsedValue.primaryColor,
        ...parsedValue
      };
    } else {
      this._customStyles = parsedValue || {};
    }

    this.requestUpdate('customStyles', oldValue);
    this.updateStyles();
  }
  private _customStyles: CustomStyles = {};

  @state() private isOpen = false;
  @state() private isLoading = false;
  @state() private error: string | null = null;
  private messages: { text: string; isBot: boolean; timestamp: string }[] = [];
  private contextText: string = '';
  private inputRef?: HTMLInputElement;
  private messagesRef?: HTMLDivElement;
  private unreadMessages = 0;

  private updateStyles() {
    if (this._customStyles) {
      // First, set the primary color if provided
      if (this._customStyles.primaryColor) {
        this.style.setProperty('--sitebot-primary-color', this._customStyles.primaryColor);
      }

      // Then apply other styles
      const styleMapping: Record<string, string> = {
        width: '--sitebot-width',
        height: '--sitebot-height',
        fontFamily: '--sitebot-font-family',
        userMessageColor: '--sitebot-user-message-color',
        botMessageColor: '--sitebot-bot-message-color',
        inputBackground: '--sitebot-input-background',
        inputBorderColor: '--sitebot-input-border-color',
        inputColor: '--sitebot-input-color'
      };

      Object.entries(this._customStyles).forEach(([key, value]) => {
        if (value && styleMapping[key]) {
          this.style.setProperty(styleMapping[key], value);
        }
      });
      
      // Handle position separately
      if (this._customStyles.position) {
        this.setAttribute('position', this._customStyles.position);
      }
    }
  }

  async firstUpdated() {
    // Store references to DOM elements
    this.inputRef = this.shadowRoot?.querySelector('.chatbot-input input') as HTMLInputElement;
    this.messagesRef = this.shadowRoot?.querySelector('.chatbot-messages') as HTMLDivElement;

    // Add keyboard navigation
    this.addEventListener('keydown', this.handleKeyDown);

    // Add scroll observer
    const observer = new MutationObserver(() => {
      this.scrollToBottom();
    });

    if (this.messagesRef) {
      observer.observe(this.messagesRef, { 
        childList: true, 
        subtree: true,
        characterData: true 
      });
    }

    // Load text file if provided
    if (this.textFile) {
      try {
        const response = await fetch(this.textFile);
        if (!response.ok) {
          throw new Error(`Failed to load text file: ${response.statusText}`);
        }
        this.contextText = await response.text();
      } catch (error) {
        console.error('Error loading text file:', error);
        this.error = 'Failed to load context file. The chatbot may have limited functionality.';
      }
    } else {
      this.error = 'Please provide a context file to help me better assist users with website-related questions.';
    }
  }

  private handleKeyDown(e: KeyboardEvent) {
    // ESC to close chat
    if (e.key === 'Escape' && this.isOpen) {
      this.closeChat();
    }
    // Ctrl + / to focus input
    if (e.key === '/' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      this.focusInput();
    }
  }

  private focusInput() {
    if (this.inputRef && this.isOpen) {
      this.inputRef.focus();
    }
  }

  private announceNewMessage() {
    if (!this.isOpen) {
      this.unreadMessages++;
    }
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.style.position = 'absolute';
    announcement.style.width = '1px';
    announcement.style.height = '1px';
    announcement.style.padding = '0';
    announcement.style.margin = '-1px';
    announcement.style.overflow = 'hidden';
    announcement.style.clip = 'rect(0, 0, 0, 0)';
    announcement.style.whiteSpace = 'nowrap';
    announcement.style.border = '0';
    announcement.textContent = `New message ${this.unreadMessages > 0 ? `, ${this.unreadMessages} unread messages` : ''}`;
    this.shadowRoot?.appendChild(announcement);
    setTimeout(() => announcement.remove(), 1000);
  }

  private toggleChat() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.unreadMessages = 0;
      this.focusInput();
      this.scrollToBottom();
    }
    if (this.error) {
      this.error = null;
    }
  }

  private closeChat() {
    this.isOpen = false;
  }

  private scrollToBottom(smooth = true) {
    setTimeout(() => {
      if (this.messagesRef) {
        this.messagesRef.scrollTo({
          top: this.messagesRef.scrollHeight,
          behavior: smooth ? 'smooth' : 'auto'
        });
      }
    }, 100); // Small delay to ensure content is rendered
  }

  private async sendMessage(message: string) {
    if (!this.aiConfig?.apiKey) {
      this.error = 'API key is required. Please provide a valid API key.';
      return;
    }

    try {
      const timestamp = new Date().toLocaleTimeString();
      this.messages = [...this.messages, { text: message, isBot: false, timestamp }];
      this.requestUpdate();
      this.scrollToBottom();
      this.announceNewMessage();
      
      this.isLoading = true;
      const aiResponse = await this.callAIAPI(message);
      const responseTimestamp = new Date().toLocaleTimeString();
      this.messages = [...this.messages, { text: aiResponse, isBot: true, timestamp: responseTimestamp }];
      this.announceNewMessage();
    } catch (error) {
      console.error('Error sending message:', error);
      this.error = error instanceof Error ? error.message : 'Failed to get response. Please try again.';
    } finally {
      this.isLoading = false;
      this.requestUpdate();
      this.scrollToBottom();
    }
  }

  private async callAIAPI(userMessage: string): Promise<string> {
    try {
      let response;
      const { provider, apiKey, apiEndpoint, model } = this.aiConfig;

      if (!provider || !apiKey) {
        throw new Error('Invalid AI configuration. Please check your provider and API key.');
      }

      const systemPrompt = `You are a helpful website assistant for ${this.headerName}. 
Your purpose is to help users with questions about this website/company only.
Use this context about the website/company: ${this.contextText}

Important guidelines:
1. Only answer questions related to the website/company information provided
2. If a question is outside the provided context, politely explain that you can only help with website/company related questions
3. Keep responses concise and focused
4. Use the context provided to give accurate information
5. Don't make up information that's not in the context`;

      switch (provider) {
        case 'openai':
          response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
              model: model || 'gpt-3.5-turbo',
              messages: [
                { role: 'system', content: systemPrompt },
                { role: 'user', content: userMessage }
              ],
              temperature: 0.7,
              max_tokens: 150, // Limit response length
              presence_penalty: 0.6 // Encourage focused responses
            })
          });
          if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error?.message || 'OpenAI API request failed');
          }
          const openAIData = await response.json();
          return openAIData.choices[0].message.content;

        case 'gemini':
          response = await fetch(apiEndpoint || 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'x-goog-api-key': apiKey
            },
            body: JSON.stringify({
              contents: [{
                parts: [{
                  text: `${systemPrompt}\n\nUser question: ${userMessage}`
                }]
              }],
              generationConfig: {
                maxOutputTokens: 150,
                temperature: 0.7,
                topP: 0.8,
                topK: 40
              }
            })
          });
          if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error?.message || 'Gemini API request failed');
          }
          const geminiData = await response.json();
          return geminiData.candidates[0].content.parts[0].text;

        case 'claude':
          response = await fetch(apiEndpoint || 'https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'x-api-key': apiKey,
              'anthropic-version': '2023-06-01'
            },
            body: JSON.stringify({
              model: model || 'claude-3-opus-20240229',
              messages: [{
                role: 'user',
                content: `${systemPrompt}\n\nUser question: ${userMessage}`
              }],
              max_tokens: 150
            })
          });
          if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error?.message || 'Claude API request failed');
          }
          const claudeData = await response.json();
          return claudeData.content[0].text;

        case 'deepseek':
          response = await fetch(apiEndpoint || 'https://api.deepseek.com/v1/chat/completions', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
              model: model || 'deepseek-chat',
              messages: [
                { role: 'system', content: systemPrompt },
                { role: 'user', content: userMessage }
              ],
              max_tokens: 150,
              temperature: 0.7
            })
          });
          if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error?.message || 'DeepSeek API request failed');
          }
          const deepseekData = await response.json();
          return deepseekData.choices[0].message.content;

        default:
          throw new Error(`Unsupported AI provider: ${provider}`);
      }
    } catch (error) {
      console.error('AI API Error:', error);
      throw error instanceof Error ? error : new Error('Failed to get AI response');
    }
  }

  updated(changedProperties: Map<string, any>) {
    if (changedProperties.has('customStyles')) {
      this.updateStyles();
    }
  }

  render() {
    const unreadBadge = this.unreadMessages > 0 && !this.isOpen ? html`
      <div class="unread-badge" role="status" aria-label="${this.unreadMessages} unread messages">
        ${this.unreadMessages}
      </div>
    ` : '';

    return html`
      <div 
        class="chat-trigger" 
        @click=${this.toggleChat}
        role="button"
        aria-label="${this.isOpen ? 'Close chat' : 'Open chat'} ${this.unreadMessages > 0 ? `(${this.unreadMessages} unread messages)` : ''}"
        tabindex="0"
        @keydown=${(e: KeyboardEvent) => e.key === 'Enter' && this.toggleChat()}
      >
        <img src="${this.botIcon || 'default-bot-icon.png'}" alt="Chat bot icon">
        ${unreadBadge}
      </div>
      
      <div 
        class="chatbot-container ${this.isOpen ? 'visible' : ''}"
        role="dialog"
        aria-label="Chat window"
      >
        <div class="chatbot-header">
          ${this.botIcon ? html`<img src="${this.botIcon}" alt="Bot Icon">` : ''}
          <span>${this.headerName}</span>
          <button 
            class="close-button" 
            @click=${this.closeChat} 
            aria-label="Close chat"
          >×</button>
        </div>
        
        ${this.error ? html`
          <div class="error-message" role="alert">
            ${this.error}
          </div>
        ` : ''}
        
        <div 
          class="chatbot-messages" 
          role="log" 
          aria-live="polite"
          @scroll=${(e: Event) => {
            const target = e.target as HTMLDivElement;
            const isAtTop = target.scrollTop === 0;
            if (isAtTop) {
              // Could implement loading previous messages here
            }
          }}
        >
          ${this.messages.map(msg => html`
            <div 
              class="message ${msg.isBot ? 'bot' : 'user'}"
              role="${msg.isBot ? 'status' : 'user'}"
            >
              <div class="message-content">${msg.text}</div>
              <div class="message-timestamp" aria-label="Sent at ${msg.timestamp}">
                ${msg.timestamp}
              </div>
            </div>
          `)}
          ${this.isLoading ? html`
            <div class="message bot loading-dots" role="status" aria-label="Bot is typing">
              <span class="dot"></span>
              <span class="dot"></span>
              <span class="dot"></span>
            </div>
          ` : ''}
        </div>
        
        <div class="chatbot-input">
          <input 
            type="text" 
            placeholder="Type your message..."
            aria-label="Chat message input"
            @keyup=${(e: KeyboardEvent) => {
              if (e.key === 'Enter') {
                const input = e.target as HTMLInputElement;
                if (input.value.trim()) {
                  this.sendMessage(input.value.trim());
                  input.value = '';
                }
              }
            }}
          >
        </div>
      </div>
    `;
  }
}