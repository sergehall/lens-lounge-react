interface ImportMetaEnv {
    readonly REACT_APP_ROOT_ID: string;
    readonly REACT_APP_API_URL: string;
    readonly REACT_APP_ENVIRONMENT: 'development' | 'production' | 'test';
    readonly REACT_APP_FEATURE_X_ENABLED: string;
    readonly REACT_APP_MAX_RETRIES: string;
    readonly REACT_APP_ANALYTICS_ID: string;
    readonly REACT_APP_TIMEOUT_MS: string;
    readonly REACT_APP_VERSION: string;
    readonly REACT_APP_DATE_FORMAT: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
