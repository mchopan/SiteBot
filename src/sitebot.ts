import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { styles } from './styles';
import { CustomStyles } from './types';

@customElement('site-bot')
export class SiteBot extends LitElement {
  static styles = styles;

  @property({ type: String }) apiKey = '';
  @property({ type: String }) textFile = '';
  @property({ type: String }) headerName = 'Chatbot';
  @property({ type: String }) botIcon = '';
  @property({ type: Object }) customStyles: CustomStyles = {};

  @state() private isOpen = false;
  @state() private isLoading = false;
  private messages: { text: string; isBot: boolean }[] = [];

  private toggleChat() {
    this.isOpen = !this.isOpen;
  }

  private async sendMessage(message: string) {
    this.messages = [...this.messages, { text: message, isBot: false }];
    this.requestUpdate();
    
    this.isLoading = true;
    const aiResponse = await this.callAIAPI(message);
    this.isLoading = false;
    
    this.messages = [...this.messages, { text: aiResponse, isBot: true }];
    this.requestUpdate();
  }

  private async callAIAPI(_userMessage: string): Promise<string> {
    return "This is a placeholder response. Implement your AI API call here.";
  }

  async firstUpdated() {
    if (this.textFile) {
      try {
        const response = await fetch(this.textFile);
        await response.text();
      } catch (error) {
        console.error('Error loading text file:', error);
      }
    }
  }

  updated(changedProperties: Map<string, any>) {
    if (changedProperties.has('customStyles')) {
      const styles = this.customStyles;
      Object.entries(styles).forEach(([key, value]) => {
        if (value) {
          this.style.setProperty(`--sitebot-${key}`, value);
        }
      });
      
      if (styles.position) {
        this.setAttribute('position', styles.position);
      }
    }
  }

  render() {
    return html`
      <div class="chat-trigger" @click=${this.toggleChat}>
        <img src="${this.botIcon || 'default-bot-icon.png'}" alt="Chat">
      </div>
      
      <div class="chatbot-container ${this.isOpen ? 'visible' : ''}">
        <div class="chatbot-header">
          ${this.botIcon ? html`<img src="${this.botIcon}" alt="Bot Icon">` : ''}
          <span>${this.headerName}</span>
        </div>
        
        <div class="chatbot-messages">
          ${this.messages.map(msg => html`
            <div class="message ${msg.isBot ? 'bot' : 'user'}">
              ${msg.text}
            </div>
          `)}
          ${this.isLoading ? html`
            <div class="message bot loading-dots">
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
            @keyup=${(e: KeyboardEvent) => {
              if (e.key === 'Enter') {
                const input = e.target as HTMLInputElement;
                if (input.value.trim()) {
                  this.sendMessage(input.value);
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