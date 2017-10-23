const LOCALSTORAGE_KEY = 'pubg-ui';

export const loadState = <S>() => {
  try {
    const serializedState = localStorage.getItem(LOCALSTORAGE_KEY);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState) as S;
  } catch (error) {
    return undefined;
  }
}

export const saveState = <S>(state: S) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(LOCALSTORAGE_KEY, serializedState);
  } catch (error) {
    console.error('Error saving state to localStorage:', error.message);
  }
}
