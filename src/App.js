import React, { useEffect, useState, useCallback, useMemo } from 'react';
import './App.scss';
import router from './router/router';
import Home from './component/home/home';
import Navbar from './component/navbar/nvabar';
import Menu from './component/menu/index';
import Content from './component/menu/content/content';
import { Switch, Route } from 'react-router';




function App() {
  const [offset, setOffset] = useState(0);
  const [menu, setMenu] = useState("");
  const [content, setContent] = useState("");
  const [indexContent, setIndexContent] = useState(0);
  const [inContent, setInContent] = useState("");


  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset > 0) {
        setOffset(1)
      } else {
        setOffset(0)
      }

    }
  }, []);
  const showMenu = () => {
    setMenu(true);
  };

  const hideMenu = () => {
    setMenu(false);
  };

  const showContent = () => {
    setContent(true);
  };

  const hideContent = () => {
    setContent(false);
  };

  const handleInContent = (i) => {
    setInContent(i)
  };

  const handleIndexContent = (i) => {
    setIndexContent(i)
  };



  function showRoute(routes) {
    let result = null;
    if (routes.length > 0) {
      result = routes.map((route, i) => {
        return <Route
          key={i}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />
      });
      return result;
    }
  }



  return (
    <div className="App">
      <Switch>
        {showRoute(router)}
      </Switch>
      <Navbar
        showMenu={showMenu}
        offset={offset}
        menu={menu}
        hideContent={hideContent}
      ></Navbar>
      <Menu
        handleInContent={(i) => handleInContent(i)}
        menu={menu}
        hideMenu={hideMenu}
        setContent={showContent}
        hideContent={hideContent}
        handleIndexContent={(i) => handleIndexContent(i)}
      ></Menu>
      <Content
        content={content}
        setContent={showContent}
        hideContent={hideContent}
        inContent={inContent}
        indexContent={indexContent}
        hideMenu={hideMenu}
      ></Content>
    </div>
  );
}

export default App;
