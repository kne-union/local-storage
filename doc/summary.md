提供给了localStorage存取的安全的序列化，并且处理了不同数据的类型

设置 `window.__LOCAL_STORAGE_PREFIX` 后，所有 key 自动加上 `${prefix}:` 前缀，用于同源下多个应用（如挂载在同一域名不同路径的子应用）隔离存储
