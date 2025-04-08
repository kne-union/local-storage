const localStorage = {
  getItem: key => {
    const target = window.localStorage.getItem(key);
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
    window.localStorage.setItem(key, JSON.stringify({ dataType, value, expire }));
  },
  removeItem: key => {
    window.localStorage.removeItem(key);
  }
};

export default localStorage;
