'use client';

import { useTheme } from 'next-themes';
import { useEffect } from 'react';

const HtmlHeadThemeUpdater = () => {
  const { theme } = useTheme();

  useEffect(() => {
    const themeColorMeta = document.querySelector('meta[name="theme-color"]');

    if (themeColorMeta) {
      themeColorMeta.setAttribute(
        'content',
        theme === 'dark' ? '#0C0A09' : '#ffffff'
      );
    }
  }, [theme]);

  return null;
};

export default HtmlHeadThemeUpdater;
