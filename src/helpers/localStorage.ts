export const setLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const getLocalStorage = (key: string) => {
  const itemStr = localStorage.getItem(key)

  if (!itemStr) {
    return null
  }

  return JSON.parse(itemStr)
}
