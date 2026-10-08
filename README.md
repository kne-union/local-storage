# local-storage

### 描述

用于存取localStorage数据并进行数据格式转换.

### 安装

```shell
npm i --save @kne/local-storage
```

### 概述

提供给了localStorage存取的安全的序列化，并且处理了不同数据的类型

设置 `window.__LOCAL_STORAGE_PREFIX` 后，所有 key 自动加上 `${prefix}:` 前缀，用于同源下多个应用（如挂载在同一域名不同路径的子应用）隔离存储


### 示例(全屏)

#### 示例代码

- 这里填写示例标题
- 这里填写示例说明
- _LocalStorage(@kne/current-lib_local-storage),antd(antd),remoteLoader(@kne/remote-loader)

```jsx
const { default: localStorage } = _LocalStorage;
const { Button, App } = antd;
const { createWithRemoteLoader } = remoteLoader;
const BaseExample = createWithRemoteLoader({
  modules: ['InfoPage', 'Modal@useConfirmModal']
})(({ remoteModules }) => {
  const [InfoPage, useConfirmModal] = remoteModules;
  const modal = useConfirmModal();
  const { message } = App.useApp();
  return (
    <InfoPage>
      <InfoPage.Part title="数字类型">
        <Button
          onClick={() => {
            localStorage.setItem('__localStorage_test_number', 10);
            message.success('设置成功');
          }}>
          设置值
        </Button>
        <Button
          onClick={() => {
            modal({
              type: 'info',
              message: localStorage.getItem('__localStorage_test_number')
            });
          }}>
          获取值
        </Button>
        <Button
          onClick={() => {
            localStorage.removeItem('__localStorage_test_number');
            message.success('删除成功');
          }}>
          删除值
        </Button>
      </InfoPage.Part>
      <InfoPage.Part title="字符串类型">
        <Button
          onClick={() => {
            localStorage.setItem('__localStorage_test_string', '我有一直小毛驴我从来也不骑');
            message.success('设置成功');
          }}>
          设置值
        </Button>
        <Button
          onClick={() => {
            modal({
              type: 'info',
              message: localStorage.getItem('__localStorage_test_string')
            });
          }}>
          获取值
        </Button>
        <Button
          onClick={() => {
            localStorage.removeItem('__localStorage_test_string');
            message.success('删除成功');
          }}>
          删除值
        </Button>
      </InfoPage.Part>
      <InfoPage.Part title="对象类型">
        <Button
          onClick={() => {
            localStorage.setItem('__localStorage_test_object', { message: '我有一直小毛驴我从来也不骑' });
            message.success('设置成功');
          }}>
          设置值
        </Button>
        <Button
          onClick={() => {
            modal({
              type: 'info',
              message: JSON.stringify(localStorage.getItem('__localStorage_test_object'), null, 2)
            });
          }}>
          获取值
        </Button>
        <Button
          onClick={() => {
            localStorage.removeItem('__localStorage_test_object');
            message.success('删除成功');
          }}>
          删除值
        </Button>
      </InfoPage.Part>
      <InfoPage.Part title="数组类型">
        <Button
          onClick={() => {
            localStorage.setItem('__localStorage_test_array', [{ message: '我有一直小毛驴我从来也不骑' }, { message: '我有一直小毛驴我从来也不骑' }]);
            message.success('设置成功');
          }}>
          设置值
        </Button>
        <Button
          onClick={() => {
            modal({
              type: 'info',
              message: JSON.stringify(localStorage.getItem('__localStorage_test_array'), null, 2)
            });
          }}>
          获取值
        </Button>
        <Button
          onClick={() => {
            localStorage.removeItem('__localStorage_test_array');
            message.success('删除成功');
          }}>
          删除值
        </Button>
      </InfoPage.Part>
      <InfoPage.Part title="cache 方法">
        <Button
          onClick={() => {
            localStorage
              .cache('__localStorage_test_cache', () => {
                message.success('getValue执行');
                return [{ message: '我有一直小毛驴我从来也不骑' }, { message: '我有一直小毛驴我从来也不骑' }];
              })
              .then(value => {
                modal({
                  type: 'info',
                  message: JSON.stringify(value, null, 2)
                });
              });
          }}>
          设置值
        </Button>
      </InfoPage.Part>
    </InfoPage>
  );
});

render(<BaseExample />);

```

### API

| 属性名                          | 说明                                                                          | 类型       | 默认值 |
|------------------------------|-----------------------------------------------------------------------------|----------|-----|
| getItem(key)                 | 获取localStorage的值                                                            | function |     |
| setItem(key,value,expire)    | 设置localStorage的值                                                            | function |     |
| removeItem(key)              | 删除localStorage的值                                                            | function |     |
| cache(key, getValue, expire) | 如果key已经被设置了value则直接返回value，如果没有呗设置或者已经失效，调用getValue方法获取新的值设置localStorage后返回 | function |     |

#### 全局前缀

| 全局变量                          | 说明                                                                                                  | 类型     | 默认值 |
|-------------------------------|-----------------------------------------------------------------------------------------------------|--------|-----|
| window.__LOCAL_STORAGE_PREFIX | 设置后，所有方法实际读写的 key 为 `${prefix}:${key}`，用于同源下多个应用隔离存储；每次调用时读取，可在模块加载后再设置；未设置时行为不变 | string | -   |
