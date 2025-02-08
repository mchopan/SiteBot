export interface CustomStyles {
    containerWidth?: string;
    containerHeight?: string;
    headerBackground?: string;
    headerColor?: string;
    messageBubbleColor?: string;
    userMessageColor?: string;
    botMessageColor?: string;
    fontFamily?: string;
    position?: 'left' | 'right';
    inputBackground?: string;
    inputColor?: string;
    inputBorderColor?: string;
    [key: string]: string | undefined;
  }