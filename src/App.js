import React from "react";
import { Layout } from "antd";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Error404, Home, Movie, NewMovies, Popular, Search } from "./pages";
import { MenuTop } from "./components";

export default function App() {
  const { Header, Content } = Layout;
  return (
    <Router>
      <Layout className="layout">
        <Header style={{ zIndex: 1 }}>
          <MenuTop />
        </Header>
        <Content className="content">
          <Routes>
            <Route path="/" exact={true} element={<Home />} />
            <Route path="/my-movies" exact={true} element={<Home />} />
            <Route path="/new-movies" exact={true} element={<NewMovies />} />
            <Route path="/popular" exact={true} element={<Popular />} />
            <Route path="/search" exact={true} element={<Search />} />
            <Route path="/movie/:id" exact={true} element={<Movie />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </Content>
      </Layout>
    </Router>
  );
}
