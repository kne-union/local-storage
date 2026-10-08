| 属性名                          | 说明                                                                          | 类型       | 默认值 |
|------------------------------|-----------------------------------------------------------------------------|----------|-----|
| getItem(key)                 | 获取localStorage的值                                                            | function |     |
| setItem(key,value,expire)    | 设置localStorage的值                                                            | function |     |
| removeItem(key)              | 删除localStorage的值                                                            | function |     |
| cache(key, getValue, expire) | 如果key已经被设置了value则直接返回value，如果没有呗设置或者已经失效，调用getValue方法获取新的值设置localStorage后返回 | function |     |

### 全局前缀

| 全局变量                          | 说明                                                                                                  | 类型     | 默认值 |
|-------------------------------|-----------------------------------------------------------------------------------------------------|--------|-----|
| window.__LOCAL_STORAGE_PREFIX | 设置后，所有方法实际读写的 key 为 `${prefix}:${key}`，用于同源下多个应用隔离存储；每次调用时读取，可在模块加载后再设置；未设置时行为不变 | string | -   |
