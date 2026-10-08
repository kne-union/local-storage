// Read on every call so the prefix can be injected after this module loads.
const resolveKey = key => {
  const prefix = typeof window !== 'undefined' ? window.__LOCAL_STORAGE_PREFIX : null;
  return prefix ? `${prefix}:${key}` : key;
};

const localStorage = {
  cache: async (key, getValue, expire = null) => {
    let value = localStorage.getItem(key);
    if (value) {
      return value;
    }
    value = await getValue();
    localStorage.setItem(key, value, expire);
    return value;
  },
  getItem: key => {
    const target = window.localStorage.getItem(resolveKey(key));
    try {
      const { dataType, value, expire } = JSON.parse(target);

      if (expire && Date.now() > expire) {
        localStorage.removeItem(key);
        return null;
      }

      if (dataType === 'object' && value === 'null') {
        return null;
      }
      if (dataType === 'undefined') {
        return void 0;
      }
      if (dataType === 'number') {
        return Number(value);
      }
      if (dataType === 'boolean') {
        return Boolean(value);
      }
      return value;
    } catch (e) {
      return null;
    }
  },
  setItem: (key, value, expire = null) => {
    const dataType = typeof value;
    window.localStorage.setItem(resolveKey(key), JSON.stringify({ dataType, value, expire }));
  },
  removeItem: key => {
    window.localStorage.removeItem(resolveKey(key));
  }
};

export default localStorage;
