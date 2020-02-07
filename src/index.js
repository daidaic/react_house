import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
// 导入样式
import 'antd-mobile/dist/antd-mobile.css';
// 自己写的样式要放在组件样式后面导入,后面会覆盖前面的
import './index.css';
import './assets/fonts/iconfont.css'

ReactDOM.render(<App />, document.getElementById('root'));

