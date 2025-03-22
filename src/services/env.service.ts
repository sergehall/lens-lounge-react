// src/services/env.service.ts
import {z} from 'zod';

const rawEnv = {
    REACT_APP_ROOT_ID: process.env.REACT_APP_ROOT_ID,
    REACT_APP_API_URL: process.env.REACT_APP_API_URL,
    REACT_APP_ENVIRONMENT: process.env.REACT_APP_ENVIRONMENT,
    REACT_APP_FEATURE_X_ENABLED: process.env.REACT_APP_FEATURE_X_ENABLED,
    REACT_APP_MAX_RETRIES: process.env.REACT_APP_MAX_RETRIES,
    REACT_APP_ANALYTICS_ID: process.env.REACT_APP_ANALYTICS_ID,
    REACT_APP_TIMEOUT_MS: process.env.REACT_APP_TIMEOUT_MS,
    REACT_APP_VERSION: process.env.REACT_APP_VERSION,
    REACT_APP_DATE_FORMAT: process.env.REACT_APP_DATE_FORMAT,
    REACT_APP_ALLOWED_ORIGINS: process.env.REACT_APP_ALLOWED_ORIGINS,
};

const envSchema = z.object({
    REACT_APP_ROOT_ID: z.string().min(1, "REACT_APP_ROOT_ID is required"),
    REACT_APP_API_URL: z.string().url("REACT_APP_API_URL must be a valid URL"),
    REACT_APP_ENVIRONMENT: z.enum(["development", "production", "test"]),
    REACT_APP_FEATURE_X_ENABLED: z.string().transform(val => val === 'true'),
    REACT_APP_MAX_RETRIES: z
        .string()
        .transform(Number)
        .refine(val => !isNaN(val) && val >= 0, {
            message: "REACT_APP_MAX_RETRIES must be a non-negative number",
        }),
    REACT_APP_ANALYTICS_ID: z.string().regex(/^UA-\d{4,9}-\d{1,4}$/, {
        message: "REACT_APP_ANALYTICS_ID must be a valid UA ID",
    }),
    REACT_APP_TIMEOUT_MS: z
        .string()
        .transform(Number)
        .refine(val => val > 0, {
            message: "REACT_APP_TIMEOUT_MS must be a positive number",
        }),
    REACT_APP_VERSION: z.string().regex(/^\d+\.\d+\.\d+$/, {
        message: "REACT_APP_VERSION must follow semver (e.g., 1.0.0)",
    }),
    REACT_APP_DATE_FORMAT: z.string().min(1),
});

const parsedEnv = envSchema.safeParse(rawEnv);

if (!parsedEnv.success) {
    console.error("❌ Invalid environment variables:", parsedEnv.error.format());
    throw new Error("Environment validation failed. Check .env values.");
}

export const env = parsedEnv.data;
