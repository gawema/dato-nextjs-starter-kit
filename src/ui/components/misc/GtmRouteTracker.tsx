'use client';

import { useGtmPushHistoryChange } from '@/ui/hooks/useGtmPushHistoryChange';

export const GtmRouteTracker = () => {
  useGtmPushHistoryChange();
  return null;
};
