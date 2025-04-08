| 属性名                          | 说明                                                                          | 类型       | 默认值 |
|------------------------------|-----------------------------------------------------------------------------|----------|-----|
| getItem(key)                 | 获取localStorage的值                                                            | function |     |
| setItem(key,value,expire)    | 设置localStorage的值                                                            | function |     |
| removeItem(key)              | 删除localStorage的值                                                            | function |     |
| cache(key, getValue, expire) | 如果key已经被设置了value则直接返回value，如果没有呗设置或者已经失效，调用getValue方法获取新的值设置localStorage后返回 | function |     |
