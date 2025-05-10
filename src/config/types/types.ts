// src/config/types/types.ts
import React from 'react';

export interface PageConfig {
  bannerImage: React.FC;
  pageContentSummarize: React.FC;
  component: React.FC;
  isProtected: boolean;
  layoutType: 'default' | 'fullWidth';
  children: Record<string, PageConfig>;
}
