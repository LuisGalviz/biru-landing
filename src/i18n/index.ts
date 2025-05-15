'use client';

import { useTranslation as useTranslationOrg } from 'react-i18next';
import { initReactI18next } from 'react-i18next';
import i18next from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { getOptions } from './settings';

const initI18next = async (lng: string, ns: string) => {
  if (!i18next.isInitialized) {
    await i18next
      .use(initReactI18next)
      .use(
        resourcesToBackend(
          (language: string, namespace: string) =>
            import(`../../public/locales/${language}/${namespace}.json`)
        )
      )
      .init(getOptions(lng, ns));
  }
};

export function useTranslation(ns: string) {
  return useTranslationOrg(ns);
}

export async function initClientI18next(lng: string, ns: string) {
  await initI18next(lng, ns);
}
