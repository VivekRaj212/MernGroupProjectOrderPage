import { Form } from "antd";
import { useState } from "react";
import OrderForm from "./components/OrderForm";
import { Route, Routes } from "react-router-dom";
import OrderStore from "./components/OrderStore";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<OrderForm />} />
        <Route path="/orderList" element={<OrderStore />} />
      </Routes>
    </div>
  );
}

export default App;
