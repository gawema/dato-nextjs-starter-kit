'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export const useGtmPushHistoryChange = () => {
  const pathname = usePathname();

  useEffect(() => {
    const windowWithDataLayer = window as Window & { dataLayer?: Array<Record<string, unknown>> };
    windowWithDataLayer.dataLayer = windowWithDataLayer.dataLayer || [];
    windowWithDataLayer.dataLayer.push({
      event: 'page_view',
      page: pathname,
    });
  }, [pathname]);
};
