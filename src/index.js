import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';

import Main from './components/Main';

import Login from './components/login';



 
function App() {
 
  return (
    <Router>
    <Routes>
      <Route path="/" caseSensitive={false} element={<Login />} />
      <Route path="/agendamento" caseSensitive={false} element={<Main />} />
      <Route path="/listagem" caseSensitive={false} element={<Main />} />
    </Routes>
  </Router>
  );
}
 
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
