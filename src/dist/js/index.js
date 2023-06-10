import { jsx as _jsx } from "react/jsx-runtime";
import ReactDOM from 'react-dom';
import Header from './dist/js/components/header.js';
const App = () => {
    return (_jsx(Header, {}));
};
ReactDOM.render(_jsx(App, {}), document.getElementById('root'));
