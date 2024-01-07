export function getStorageValue(key: string) {
  try {
    const value = window.localStorage.getItem(key);
    return value;
  } catch (error) {
    console.error(error);
  }
}

export function setStorageValue(key: string, value: string) {
  window.localStorage.setItem(key, value);
}
