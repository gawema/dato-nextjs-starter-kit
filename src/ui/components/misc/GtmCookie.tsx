'use client';

import { useEffect, useRef } from 'react';

interface IProps {
  cidCode: string;
  gtmCode: string;
}

export const GtmCookie = ({ cidCode, gtmCode }: IProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://legal.spotwerbung.ch/datenschutz/v2/kekschecker.js';
    script.defer = true;
    containerRef.current.appendChild(script);

    return () => {
      script.parentNode?.removeChild(script);
    };
  }, []);

  return (
    <div ref={containerRef}>
      <div id="infotext"></div>
      <div
        id="kekschecker"
        data-cid={cidCode}
        data-key={gtmCode}
        className="hidden"
        style={{ display: 'none' }}
      />
    </div>
  );
};
