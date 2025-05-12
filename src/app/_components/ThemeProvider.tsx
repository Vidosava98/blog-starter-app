'use client';

import { useEffect, useState } from 'react';

type ThemeMode = 'light' | 'dark' | 'system';

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeMode>('system');

  const applyTheme = (mode: ThemeMode) => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const effective = mode === 'system' ? (prefersDark ? 'dark' : 'light') : mode;

    document.documentElement.classList.toggle('dark', effective === 'dark');
    document.documentElement.setAttribute('data-theme', mode);
  };

  useEffect(() => {
    const stored = localStorage.getItem('theme') as ThemeMode | null;
    const mode = stored ?? 'system';
    setTheme(mode);
    applyTheme(mode);

    if (mode === 'system') {
      const media = window.matchMedia('(prefers-color-scheme: dark)');
      const handler = () => applyTheme('system');
      media.addEventListener('change', handler);
      return () => media.removeEventListener('change', handler);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    applyTheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    const order: ThemeMode[] = ['light', 'dark', 'system'];
    const next = order[(order.indexOf(theme) + 1) % order.length];
    setTheme(next);
  };

  return (
    <>
      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 z-50 bg-gray-200 dark:bg-gray-800 text-sm px-3 py-1 rounded"
      >
        Mode: {theme}
      </button>
      {children}
    </>
  );
}
