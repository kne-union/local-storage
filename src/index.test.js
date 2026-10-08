import localStorage from './index';

describe('local-storage', () => {
  afterEach(() => {
    delete window.__LOCAL_STORAGE_PREFIX;
    window.localStorage.clear();
  });

  it('uses raw key without prefix', () => {
    localStorage.setItem('X-User-Token', 'token');
    expect(JSON.parse(window.localStorage.getItem('X-User-Token')).value).toBe('token');
    expect(localStorage.getItem('X-User-Token')).toBe('token');
    localStorage.removeItem('X-User-Token');
    expect(window.localStorage.getItem('X-User-Token')).toBeNull();
  });

  it('prefixes keys with window.__LOCAL_STORAGE_PREFIX', () => {
    window.localStorage.setItem('X-User-Token', JSON.stringify({ dataType: 'string', value: 'host', expire: null }));
    window.__LOCAL_STORAGE_PREFIX = 'talent-saas';

    expect(localStorage.getItem('X-User-Token')).toBeNull();
    localStorage.setItem('X-User-Token', 'app');
    expect(JSON.parse(window.localStorage.getItem('talent-saas:X-User-Token')).value).toBe('app');
    expect(localStorage.getItem('X-User-Token')).toBe('app');

    localStorage.removeItem('X-User-Token');
    expect(window.localStorage.getItem('talent-saas:X-User-Token')).toBeNull();
    expect(JSON.parse(window.localStorage.getItem('X-User-Token')).value).toBe('host');
  });

  it('removes expired prefixed key', () => {
    window.__LOCAL_STORAGE_PREFIX = 'demo';
    localStorage.setItem('k', 'v', Date.now() - 1);
    expect(localStorage.getItem('k')).toBeNull();
    expect(window.localStorage.getItem('demo:k')).toBeNull();
  });

  it('cache reads and writes prefixed key', async () => {
    window.__LOCAL_STORAGE_PREFIX = 'demo';
    const value = await localStorage.cache('c', () => 'v1');
    expect(value).toBe('v1');
    expect(JSON.parse(window.localStorage.getItem('demo:c')).value).toBe('v1');
    expect(await localStorage.cache('c', () => 'v2')).toBe('v1');
  });
});
