import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../pages/home.js';
import Cadastro from '../pages/cadastro.js';
import Lista from '../pages/lista.js';
function Header() {
    return (_jsx("header", { children: _jsxs(Router, { children: [_jsxs("nav", { children: [_jsx("div", { className: 'logo-principal', children: _jsx(Link, { to: '/', children: ".Pessoas" }) }), _jsxs("ul", { className: 'menu-nav', children: [_jsx("li", { children: _jsx(Link, { to: '/cadastro' }) }), _jsx("li", { children: _jsx(Link, { to: '/lista' }) })] })] }), _jsxs(Routes, { children: [_jsx(Route, { path: "/", Component: Home }), _jsx(Route, { path: "/cadastro", Component: Cadastro }), _jsx(Route, { path: "/lista", Component: Lista })] })] }) }));
}
export default Header;
