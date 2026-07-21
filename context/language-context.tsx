'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'
import { content, type Language, type LanguageContent } from '@/lib/portfolio-data'

interface LanguageContextType {
  lang: Language
  setLang: (lang: Language) => void
  data: LanguageContent
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('en')

  return (
    <LanguageContext.Provider value={{ lang, setLang, data: content[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useLanguage must be used inside a LanguageProvider')
  }
  return ctx
}