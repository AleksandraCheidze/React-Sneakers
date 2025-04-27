import React from 'react';
import Card from '../components/Card';

const localOrders = [
  {
    id: "1",
    items: [
      {
        id: "1",
        parentId: "1",
        title: "Sneakers",
        price: 100,
        imageUrl: "/img/sneakers/1.jpg"
      },
      {
        id: "2",
        parentId: "2",
        title: "Boots",
        price: 120,
        imageUrl: "/img/sneakers/2.jpg"
      }
    ]
  },
  {
    id: "2",
    items: [
      {
        id: "3",
        parentId: "3",
        title: "Jacket",
        price: 150,
        imageUrl: "/img/sneakers/3.jpg"
      }
    ]
  }
];

function Orders() {
  const [orders, setOrders] = React.useState(localOrders);
  const [isLoading] = React.useState(false);

  React.useEffect(() => {
    setOrders(localOrders);
  }, []);

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1 className="page-title animated-title">My Orders</h1>
      </div>

      <div className="d-flex flex-wrap">
        {(isLoading ? [...Array(8)] : orders.flatMap(order => order.items)).map((item, index) => (
          <Card key={index} loading={isLoading} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Orders;