import { LitElement } from 'lit';
import { CustomStyles } from './types';
export declare class SiteBot extends LitElement {
    static styles: import("lit").CSSResult;
    apiKey: string;
    textFile: string;
    headerName: string;
    botIcon: string;
    customStyles: CustomStyles;
    private messages;
    firstUpdated(): Promise<void>;
    private sendMessage;
    private callAIAPI;
    render(): import("lit-html").TemplateResult<1>;
}
