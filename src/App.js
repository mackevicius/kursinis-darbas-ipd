import React, { useState, useEffect } from "react";
import "./App.css";
import background from "./images/background.png";
import Header from "./Components/Header";
import Showcase2 from "./Components/Showcase2";
import { SliderData } from "./Components/SliderData";
import Products from "./Components/Products";
import Footer from "./Components/Footer";
import About from "./Components/About";
import NavbarClothes from "./Components/Navbar";
import Clothes from "./Components/Clothes";
import { clothes } from "./Components/ClothesData";
import { accessories } from "./Components/AccessoriesData";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProductPage from "./Components/ProductPage";
import Accessories from "./Components/Accessories";
import NavbarAccessories from "./Components/NavbarAccessories";
import NavbarProduct from "./Components/NavbarProduct";
import AboutPage from "./Components/AboutPage";
import SearchResults from "./Components/SearchResults";
import Pay from "./Components/Pay";
import { AuthProvider } from "./contexts/AuthContext";
import ShoppingBag from "./Components/ShoppingBag";
import SuccessfulPurchase from "./Components/SuccessfulPurchase";
import Login2 from "./Components/Login2";
import Pristatymas from "./Components/Pristatymas";
import Register from "./Components/Register";
import { useSelector } from "react-redux";
import { Spinner } from "react-bootstrap";

function App() {
  const data = clothes;
  const data2 = accessories;

  const [filterType, setFilterType] = useState("none");
  const [page, setPage] = useState(1);
  const [filterSection, setFilterSection] = useState("none");
  const [searchValue, setSearchValue] = useState("");
  const [hamburger, setHamburger] = useState(false);
  const shoppingCart = useSelector((state) => state.prekes);
  const [loading, setLoading] = useState(true);

  const hamburgerOpen = () => {
    setHamburger(!hamburger);
  };

  const changeSearchValue = (value) => {
    setSearchValue(value);
  };

  const changeData = (type, section) => {
    setFilterType(type);
    setFilterSection(section);
  };
  const changePage = (number) => {
    setPage(number);
  };

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div style={{ backgroundColor: "black", width: "1000px" }}>
        <Spinner animation="border" role="status" />
      </div>
    );
  }

  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <img className="background-image" src={background} alt="" />
          <Header
            shoppingCart={data}
            filter={changeData}
            changePage={changePage}
            changeSearchValue={changeSearchValue}
            hamburgerOpen={hamburgerOpen}
          />
          <Switch>
            <Route path="/" exact>
              <Showcase2 />
              <Products />
              <About />
            </Route>
            <Route exact path="/clothes">
              <NavbarClothes
                hamburger={hamburger}
                data={data}
                filter={changeData}
                changePage={changePage}
              />
              <Clothes
                page={page}
                changePage={changePage}
                data={data}
                filterType={filterType}
                filterSection={filterSection}
              />
            </Route>
            <Route exact path="/accessories">
              <NavbarAccessories
                data={accessories}
                filter={changeData}
                hamburger={hamburger}
              />
              <Accessories
                page={page}
                data={data2}
                filterType={filterType}
                filterSection={filterSection}
              />
            </Route>
            {data.map((item) => {
              return (
                <Route path={`/clothes/${item.id}`} key={item.id}>
                  <NavbarProduct />
                  <ProductPage item={item} type="clothes" />
                </Route>
              );
            })}
            {accessories.map((item) => {
              return (
                <Route path={`/accessories/${item.id}`} key={item.id}>
                  <NavbarProduct />
                  <ProductPage item={item} type="accessories" />
                </Route>
              );
            })}
            <Route path="/about">
              <NavbarProduct />
              <AboutPage />
            </Route>
            <Route path="/searchResults">
              <NavbarProduct />
              <SearchResults
                searchValue={searchValue}
                page={page}
                changePage={changePage}
                data={data}
                data2={data2}
              />
            </Route>
            <Route path="/login">
              <NavbarProduct />
              <Login2 />
            </Route>
            <Route path="/register">
              <NavbarProduct />
              <Register />
            </Route>
            <Route path="/shoppingBag">
              <NavbarProduct />
              <ShoppingBag data={shoppingCart} />
            </Route>
            <Route path="/checkout">
              <NavbarProduct />
              <Pristatymas />
            </Route>
            <Route path="/payment">
              <NavbarProduct />
              <Pay />
            </Route>
            <Route path="/successfulPurchase">
              <NavbarProduct />
              <SuccessfulPurchase />
            </Route>
          </Switch>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
