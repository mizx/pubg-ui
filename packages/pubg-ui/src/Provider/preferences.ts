// import { PreferenceOptions } from './interfaces';
//
// const LOCALSTORAGE_KEY = 'pubg-ui-preferences';
//
// export const getPreferences = (): Partial<Preference> => {
//   try {
//     const raw = window.localStorage.getItem(LOCALSTORAGE_KEY) || '';
//
//     return JSON.parse(raw) as Partial<Preference>;
//   } catch (error) {
//     return {};
//   }
// };
//
// export const setPreferences = (preferences: Preference) => {
//   const json = JSON.stringify(preferences);
//
//   window.localStorage.setItem(LOCALSTORAGE_KEY, json);
// };
