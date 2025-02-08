export interface CustomStyles {
    // Main theme color
    primaryColor?: string;
    
    // Basic customization
    position?: 'left' | 'right';
    width?: string;
    height?: string;
    
    // Advanced customization (optional)
    headerBackground?: string;
    userMessageColor?: string;
    botMessageColor?: string;
    fontFamily?: string;
    inputBackground?: string;
    inputColor?: string;
    inputBorderColor?: string;
    [key: string]: string | undefined;
}

export type AIProvider = 'openai' | 'gemini' | 'claude' | 'deepseek';

export interface AIConfig {
    provider: AIProvider;
    apiKey: string;
    apiEndpoint?: string;
    model?: string;
}