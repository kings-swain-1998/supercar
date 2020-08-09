import React, { useEffect, useState, useCallback, useMemo } from 'react';
import './App.scss';
import router from './router/router';
import Home from './component/home/home';
import Navbar from './component/navbar/nvabar';
import Menu from './component/menu/index';
import Content from './component/menu/content/content';
import { Switch, Route } from 'react-router';
import Login from './component/login/index';
import Footer from './component/footer/index';




function App() {
  const [offset, setOffset] = useState(0);
  const [menu, setMenu] = useState("");
  const [content, setContent] = useState("");
  const [indexContent, setIndexContent] = useState(0);
  const [inContent, setInContent] = useState("");
  const [openLogin, setOpenLogin] = useState(false);

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


  // form login

  const openFormLogin = () => {
    setOpenLogin(true);
  }
  const hideFormLogin = () => {
    setOpenLogin(false);
  }


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
      <Navbar
        showMenu={showMenu}
        offset={offset}
        menu={menu}
        hideContent={hideContent}
        openFormLogin={openFormLogin}
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
      <Login
        open={openLogin}
        hideFormLogin={hideFormLogin}
      ></Login>


      <Switch>
        {showRoute(router)}
      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default App;
