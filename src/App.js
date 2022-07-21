import React from "react";
import NotFound from "./components/NotFound/NotFound";
import { OrderBook } from "./components/OrderBook/OrderBook"; 
import { Route, Routes } from 'react-router-dom';
import { Container } from "reactstrap";
import './App.css';
class App extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Routes>
            <Route
              exact
              path="/"
              element={<OrderBook />} />
            <Route element={<NotFound />} />
          </Routes>
        </Container>
      </div>
    );
  }
}

export default App;
