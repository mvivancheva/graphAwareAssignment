import 'config';

declare module 'config' {
    interface AppConfig {
        host?: string;
        port?: number;
        baseUrl?: string;
        uiBaseURL?: string;
        environment?: string;
    }
}
