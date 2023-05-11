const getEncripted = (key: string) => {
  // key = `${ key }`;
  let valor =  sessionStorage.getItem(key);
  if (valor == null) {
    return null;
  }
  return atob(valor);
}

const setEncripted = (key: string, value: any) => {
  key = `${ key }`;
  value =  btoa(value);
  return sessionStorage.setItem(key, value);
};

const storage = {
  setEncripted, getEncripted
};

export { storage };
