import Header from "./components/Header/Header";
import Projects from './components/Projects/Projects';
import Main from "./components/Main";
import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";

function App() {

  const getTheme = () => {
    return JSON.parse(localStorage.getItem("theme")) || false
    // return localStorage.getItem("theme") || false
  }
  const [theme, setTheme] = useState(getTheme());
  const themeGetter = (val) => {
    setTheme(val);
  }

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme))
  }, [theme])

  return (
    <div className={theme ? "theme-dark" : ""}>
      <Header themeGetter={themeGetter} theme={theme} setTheme={setTheme} />
      <Header />
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path="/projects" element={<Projects />} ></Route>
      </Routes>

    </div>
  );
}

export default App;
