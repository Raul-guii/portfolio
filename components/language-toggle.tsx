'use client'

import { useLanguage } from '@/context/language-context'

export function LanguageToggle() {
  const { lang, setLang } = useLanguage()

  return (
    <button
      onClick={() => setLang(lang === 'en' ? 'pt' : 'en')}
      className="w-10 h-10 rounded-lg bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors flex items-center justify-center text-xs font-semibold"
      aria-label="Toggle language"
    >
      {lang === 'en' ? 'PT' : 'EN'}
    </button>
  )
}