import axios from "axios";
import { useEffect, useState } from "react";

function OrderList() {
  let [list, setList] = useState([]);

  useEffect(() => {
    getAllOrder();
  }, []);

  let getAllOrder = async () => {
    let url = "http://localhost:8080/order/";
    let jwt = localStorage.getItem("appjwt");
    let config = { headers: { Authorization: `Bearer ${jwt}` } };
    let res = await axios.get(url, config);

    setList(res.data);
  };

  // VIEW
  return (
    <div>
      <h1>Order List</h1>

      {list.map((item) => (
        <div key={item.id}>
          {item.id} {item.productName}
        </div>
      ))}
    </div>
  );
}

export default OrderList;
