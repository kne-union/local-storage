"use strict";(self.webpackChunk_kne_components_local_storage=self.webpackChunk_kne_components_local_storage||[]).push([[161],{1448:(e,t,n)=>{var o=n(4922),a=n.n(o),s=n(7558),l=n(5199),r=n(9946),c=n.n(r),m=n(3050),g=n(1488),d=n.n(g),u=n(9261);window.PUBLIC_URL="/local-storage";const i={url:"https://uc.fatalent.cn",tpl:"{{url}}/packages/@kne-components/{{remote}}/{{version}}/build"},_={...i,remote:"components-core",defaultVersion:"0.3.0"};(0,m.preset)({remotes:{default:_,"components-core":_,"components-iconfont":{...i,remote:"components-iconfont",defaultVersion:"0.1.8"},"local-storage":{...i,remote:"local-storage",defaultVersion:"0.1.1"}}});const p=(()=>{const e=c().create({validateStatus:function(){return!0}});return t=>t.hasOwnProperty("loader")&&"function"===typeof t.loader?Promise.resolve(t.loader(d()(t,["loader"]))).then((e=>({data:{code:0,data:e}}))).catch((e=>(l.message.error(e.message||"\u8bf7\u6c42\u53d1\u751f\u9519\u8bef"),{data:{code:500,msg:e.message}}))):e(t)})();(0,s.preset)({ajax:p,loading:(0,u.jsx)(l.Spin,{delay:500,style:{position:"absolute",left:"50%",padding:"10px",transform:"translateX(-50%)"}}),error:null,empty:(0,u.jsx)(l.Empty,{}),transformResponse:e=>{const{data:t}=e;return e.data={code:0===t.code?200:t.code,msg:t.msg,results:t.data},e}});var f=n(5457),S=n(4679),k=n(4152),h=n.n(k),B=(n(1296),n(6446));const I=h().ExampleRoutes,y=e=>{let{preset:t,themeToken:n,...o}=e;return(0,u.jsx)(S.HashRouter,{children:(0,u.jsx)(I,{...o,paths:[{key:"components",path:"/",title:"\u9996\u9875"}],preset:t,themeToken:n,readme:B.default,pageProps:{menu:null}})})};f.createRoot(document.getElementById("root")).render((0,u.jsx)(a().StrictMode,{children:(0,u.jsx)(y,{preset:{ajax:p},themeToken:{colorPrimary:"#4F185A"}})}))},9666:(e,t,n)=>{n.d(t,{A:()=>l});var o=n(2218),a=n(5199),s=n(3050);const l={name:"local-storage",summary:"<p>\u63d0\u4f9b\u7ed9\u4e86localStorage\u5b58\u53d6\u7684\u5b89\u5168\u7684\u5e8f\u5217\u5316\uff0c\u5e76\u4e14\u5904\u7406\u4e86\u4e0d\u540c\u6570\u636e\u7684\u7c7b\u578b</p>",description:"\u7528\u4e8e\u5b58\u53d6localStorage\u6570\u636e\u5e76\u8fdb\u884c\u6570\u636e\u683c\u5f0f\u8f6c\u6362.",packageName:"@kne/local-storage",api:"<table>\n<thead>\n<tr>\n<th>\u5c5e\u6027\u540d</th>\n<th>\u8bf4\u660e</th>\n<th>\u7c7b\u578b</th>\n<th>\u9ed8\u8ba4\u503c</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>getItem(key)</td>\n<td>\u83b7\u53d6localStorage\u7684\u503c</td>\n<td>function</td>\n<td></td>\n</tr>\n<tr>\n<td>setItem(key,value,expire)</td>\n<td>\u8bbe\u7f6elocalStorage\u7684\u503c</td>\n<td>function</td>\n<td></td>\n</tr>\n<tr>\n<td>removeItem(key)</td>\n<td>\u5220\u9664localStorage\u7684\u503c</td>\n<td>function</td>\n<td></td>\n</tr>\n<tr>\n<td>cache(key, getValue, expire)</td>\n<td>\u5982\u679ckey\u5df2\u7ecf\u88ab\u8bbe\u7f6e\u4e86value\u5219\u76f4\u63a5\u8fd4\u56devalue\uff0c\u5982\u679c\u6ca1\u6709\u5457\u8bbe\u7f6e\u6216\u8005\u5df2\u7ecf\u5931\u6548\uff0c\u8c03\u7528getValue\u65b9\u6cd5\u83b7\u53d6\u65b0\u7684\u503c\u8bbe\u7f6elocalStorage\u540e\u8fd4\u56de</td>\n<td>function</td>\n<td></td>\n</tr>\n</tbody>\n</table>",example:{isFull:!0,className:"local_storage_417c0",style:"",list:[{title:"\u8fd9\u91cc\u586b\u5199\u793a\u4f8b\u6807\u9898",description:"\u8fd9\u91cc\u586b\u5199\u793a\u4f8b\u8bf4\u660e",code:"const { default: localStorage } = _LocalStorage;\nconst { Button, App } = antd;\nconst { createWithRemoteLoader } = remoteLoader;\nconst BaseExample = createWithRemoteLoader({\n  modules: ['InfoPage', 'Modal@useConfirmModal']\n})(({ remoteModules }) => {\n  const [InfoPage, useConfirmModal] = remoteModules;\n  const modal = useConfirmModal();\n  const { message } = App.useApp();\n  return (\n    <InfoPage>\n      <InfoPage.Part title=\"\u6570\u5b57\u7c7b\u578b\">\n        <Button\n          onClick={() => {\n            localStorage.setItem('__localStorage_test_number', 10);\n            message.success('\u8bbe\u7f6e\u6210\u529f');\n          }}>\n          \u8bbe\u7f6e\u503c\n        </Button>\n        <Button\n          onClick={() => {\n            modal({\n              type: 'info',\n              message: localStorage.getItem('__localStorage_test_number')\n            });\n          }}>\n          \u83b7\u53d6\u503c\n        </Button>\n        <Button\n          onClick={() => {\n            localStorage.removeItem('__localStorage_test_number');\n            message.success('\u5220\u9664\u6210\u529f');\n          }}>\n          \u5220\u9664\u503c\n        </Button>\n      </InfoPage.Part>\n      <InfoPage.Part title=\"\u5b57\u7b26\u4e32\u7c7b\u578b\">\n        <Button\n          onClick={() => {\n            localStorage.setItem('__localStorage_test_string', '\u6211\u6709\u4e00\u76f4\u5c0f\u6bdb\u9a74\u6211\u4ece\u6765\u4e5f\u4e0d\u9a91');\n            message.success('\u8bbe\u7f6e\u6210\u529f');\n          }}>\n          \u8bbe\u7f6e\u503c\n        </Button>\n        <Button\n          onClick={() => {\n            modal({\n              type: 'info',\n              message: localStorage.getItem('__localStorage_test_string')\n            });\n          }}>\n          \u83b7\u53d6\u503c\n        </Button>\n        <Button\n          onClick={() => {\n            localStorage.removeItem('__localStorage_test_string');\n            message.success('\u5220\u9664\u6210\u529f');\n          }}>\n          \u5220\u9664\u503c\n        </Button>\n      </InfoPage.Part>\n      <InfoPage.Part title=\"\u5bf9\u8c61\u7c7b\u578b\">\n        <Button\n          onClick={() => {\n            localStorage.setItem('__localStorage_test_object', { message: '\u6211\u6709\u4e00\u76f4\u5c0f\u6bdb\u9a74\u6211\u4ece\u6765\u4e5f\u4e0d\u9a91' });\n            message.success('\u8bbe\u7f6e\u6210\u529f');\n          }}>\n          \u8bbe\u7f6e\u503c\n        </Button>\n        <Button\n          onClick={() => {\n            modal({\n              type: 'info',\n              message: JSON.stringify(localStorage.getItem('__localStorage_test_object'), null, 2)\n            });\n          }}>\n          \u83b7\u53d6\u503c\n        </Button>\n        <Button\n          onClick={() => {\n            localStorage.removeItem('__localStorage_test_object');\n            message.success('\u5220\u9664\u6210\u529f');\n          }}>\n          \u5220\u9664\u503c\n        </Button>\n      </InfoPage.Part>\n      <InfoPage.Part title=\"\u6570\u7ec4\u7c7b\u578b\">\n        <Button\n          onClick={() => {\n            localStorage.setItem('__localStorage_test_array', [{ message: '\u6211\u6709\u4e00\u76f4\u5c0f\u6bdb\u9a74\u6211\u4ece\u6765\u4e5f\u4e0d\u9a91' }, { message: '\u6211\u6709\u4e00\u76f4\u5c0f\u6bdb\u9a74\u6211\u4ece\u6765\u4e5f\u4e0d\u9a91' }]);\n            message.success('\u8bbe\u7f6e\u6210\u529f');\n          }}>\n          \u8bbe\u7f6e\u503c\n        </Button>\n        <Button\n          onClick={() => {\n            modal({\n              type: 'info',\n              message: JSON.stringify(localStorage.getItem('__localStorage_test_array'), null, 2)\n            });\n          }}>\n          \u83b7\u53d6\u503c\n        </Button>\n        <Button\n          onClick={() => {\n            localStorage.removeItem('__localStorage_test_array');\n            message.success('\u5220\u9664\u6210\u529f');\n          }}>\n          \u5220\u9664\u503c\n        </Button>\n      </InfoPage.Part>\n      <InfoPage.Part title=\"cache \u65b9\u6cd5\">\n        <Button\n          onClick={() => {\n            localStorage\n              .cache('__localStorage_test_cache', () => {\n                message.success('getValue\u6267\u884c');\n                return [{ message: '\u6211\u6709\u4e00\u76f4\u5c0f\u6bdb\u9a74\u6211\u4ece\u6765\u4e5f\u4e0d\u9a91' }, { message: '\u6211\u6709\u4e00\u76f4\u5c0f\u6bdb\u9a74\u6211\u4ece\u6765\u4e5f\u4e0d\u9a91' }];\n              })\n              .then(value => {\n                modal({\n                  type: 'info',\n                  message: JSON.stringify(value, null, 2)\n                });\n              });\n          }}>\n          \u8bbe\u7f6e\u503c\n        </Button>\n      </InfoPage.Part>\n    </InfoPage>\n  );\n});\n\nrender(<BaseExample />);\n\n",scope:[{name:"_LocalStorage",packageName:"@kne/current-lib_local-storage",component:o},{name:"antd",packageName:"antd",component:a},{name:"remoteLoader",packageName:"@kne/remote-loader",component:s}]}]}}}}]);
//# sourceMappingURL=161.265f6a72.chunk.js.map