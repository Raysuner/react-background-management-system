export function getToken(key: string) {
  try {
    const value = window.localStorage.getItem(key);
    return value;
  } catch (error) {
    console.error(error);
  }
}

export function setToken(key: string, value: string) {
  window.localStorage.setItem(key, value);
}
