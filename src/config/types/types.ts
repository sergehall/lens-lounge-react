// src/config/types/types.ts
import React from 'react';

import { UnauthLandingProps } from '../unauthContent';

export interface PageConfig {
  bannerImage: React.FC;
  pageContentSummarize: React.FC;
  component: React.FC;
  isProtected: boolean;
  layoutType: 'default' | 'fullWidth' | 'none';
  children: Record<string, PageConfig>;
  unauthLandingProps?: UnauthLandingProps;
}
