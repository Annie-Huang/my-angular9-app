export interface Message {
    severity: string;
    detail: string;
    key?: string;
    position?: string;
}

export interface MessagePosition {
    class: string;
    index: number;
}
