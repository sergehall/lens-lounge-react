/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    // readonly REACT_APP_ROOT_ID: string;
    // readonly REACT_APP_API_URL: string;
    // readonly REACT_APP_ENVIRONMENT: 'development' | 'production' | 'test';
    // readonly REACT_APP_FEATURE_X_ENABLED: 'true' | 'false';
    // readonly REACT_APP_MAX_RETRIES: string;
    // readonly REACT_APP_ANALYTICS_ID: string;
    // readonly REACT_APP_TIMEOUT_MS: string;
    // readonly REACT_APP_VERSION: string;
    // readonly REACT_APP_DATE_FORMAT: string;
    // readonly REACT_APP_ALLOWED_ORIGINS: string;
  }
}

// But you don’t need to write your ProcessEnv type there unless:
//  - You want autocomplete + type-checking for process.env.REACT_APP_*
//  - You are accessing process.env directly somewhere in your code
