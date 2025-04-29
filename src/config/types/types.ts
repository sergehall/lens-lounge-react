// src/config/types.ts
import React from "react";

export interface PageConfig {
    component: React.FC;
    bannerImage: React.FC;
    pageContentSummarize?: React.FC;
    requiresAuth?: boolean;
    layoutType?: "default" | "fullWidth";
}
