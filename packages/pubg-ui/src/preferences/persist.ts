import { PreferenceOptions } from './interfaces';

const LOCALSTORAGE_KEY = 'pubg-ui-preferences';

export const getPreferences = (): Partial<PreferenceOptions> => {
  try {
    const raw = window.localStorage.getItem(LOCALSTORAGE_KEY) || '';

    return JSON.parse(raw) as Partial<PreferenceOptions>;
  } catch (error) {
    return {};
  }
};

export const setPreferences = (preferences: PreferenceOptions) => {
  const json = JSON.stringify(preferences);

  window.localStorage.setItem(LOCALSTORAGE_KEY, json);
};
