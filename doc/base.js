const { default: localStorage } = _LocalStorage;
const { Button, App } = antd;
const { createWithRemoteLoader } = remoteLoader;
const BaseExample = createWithRemoteLoader({
  modules: ['InfoPage', 'Modal@useConfirmModal']
})(({ remoteModules }) => {
  const [InfoPage, useConfirmModal] = remoteModules;
  const modal = useConfirmModal();
  const { message } = App.useApp();
  return <InfoPage>
    <InfoPage.Part title="数字类型">
      <Button onClick={() => {
        localStorage.setItem('__localStorage_test_number', 10);
        message.success('设置成功');
      }}>设置值</Button>
      <Button onClick={() => {
        modal({
          type: 'info', message: localStorage.getItem('__localStorage_test_number')
        });
      }}>获取值</Button>
      <Button onClick={() => {
        localStorage.removeItem('__localStorage_test_number');
        message.success('删除成功');
      }}>删除值</Button>
    </InfoPage.Part>
    <InfoPage.Part title="字符串类型">
      <Button onClick={() => {
        localStorage.setItem('__localStorage_test_string', '我有一直小毛驴我从来也不骑');
        message.success('设置成功');
      }}>设置值</Button>
      <Button onClick={() => {
        modal({
          type: 'info', message: localStorage.getItem('__localStorage_test_string')
        });
      }}>获取值</Button>
      <Button onClick={() => {
        localStorage.removeItem('__localStorage_test_string');
        message.success('删除成功');
      }}>删除值</Button>
    </InfoPage.Part>
    <InfoPage.Part title="对象类型">
      <Button onClick={() => {
        localStorage.setItem('__localStorage_test_object', { message: '我有一直小毛驴我从来也不骑' });
        message.success('设置成功');
      }}>设置值</Button>
      <Button onClick={() => {
        modal({
          type: 'info', message: JSON.stringify(localStorage.getItem('__localStorage_test_object'), null, 2)
        });
      }}>获取值</Button>
      <Button onClick={() => {
        localStorage.removeItem('__localStorage_test_object');
        message.success('删除成功');
      }}>删除值</Button>
    </InfoPage.Part>
    <InfoPage.Part title="数组类型">
      <Button onClick={() => {
        localStorage.setItem('__localStorage_test_array', [{ message: '我有一直小毛驴我从来也不骑' }, { message: '我有一直小毛驴我从来也不骑' }]);
        message.success('设置成功');
      }}>设置值</Button>
      <Button onClick={() => {
        modal({
          type: 'info', message: JSON.stringify(localStorage.getItem('__localStorage_test_array'), null, 2)
        });
      }}>获取值</Button>
      <Button onClick={() => {
        localStorage.removeItem('__localStorage_test_array');
        message.success('删除成功');
      }}>删除值</Button>
    </InfoPage.Part>
  </InfoPage>;
});

render(<BaseExample />);
