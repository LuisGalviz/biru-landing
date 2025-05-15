import i18next, { TFunction } from 'i18next';
import { getOptions } from './settings';
import resourcesToBackend from 'i18next-resources-to-backend';

export async function getTranslation(
  lng: string,
  ns: string = 'common'
): Promise<{ t: TFunction }> {
  const instance = i18next.createInstance();
  await instance
    .use(
      resourcesToBackend(
        (language: string, namespace: string) =>
          import(`../../public/locales/${language}/${namespace}.json`)
      )
    )
    .init(getOptions(lng, ns));

  return {
    t: instance.getFixedT(lng, ns),
  };
}
