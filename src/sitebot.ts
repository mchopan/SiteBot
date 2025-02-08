import { LitElement, html, css } from 'lit-element';
import { customElement, property } from 'lit/decorators.js';
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

  private messages: { text: string; isBot: boolean }[] = [];
  private textFileContent: string = '';

  async firstUpdated() {
    if (this.textFile) {
      try {
        const response = await fetch(this.textFile);
        this.textFileContent = await response.text();
      } catch (error) {
        console.error('Error loading text file:', error);
      }
    }
  }

  private async sendMessage(message: string) {
    // Add user message
    this.messages = [...this.messages, { text: message, isBot: false }];
    this.requestUpdate();

    // Call AI API here with this.apiKey and message
    // This is a placeholder - implement your actual AI API call
    const aiResponse = await this.callAIAPI(message);
    
    // Add bot response
    this.messages = [...this.messages, { text: aiResponse, isBot: true }];
    this.requestUpdate();
  }

  private async callAIAPI(message: string): Promise<string> {
    // Implement your AI API call here
    // This is just a placeholder
    return "This is a placeholder response. Implement your AI API call here.";
  }

  render() {
    return html`
      <div class="chatbot-container">
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
        </div>
        <div class="chatbot-input">
          <input 
            type="text" 
            placeholder="Type your message..."
            @keyup=${(e: KeyboardEvent) => {
              if (e.key === 'Enter') {
                const input = e.target as HTMLInputElement;
                this.sendMessage(input.value);
                input.value = '';
              }
            }}
          >
        </div>
      </div>
    `;
  }
}