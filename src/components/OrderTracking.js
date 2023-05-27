import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/App.css';

class OrderTracking extends Component {

    render() {
        const order = {
            id: '12345',
            status: 'Delivered',
            customer: {
                name: 'Dhruvil Patel',
                address: '5214 Gerrish Street, Apt 117, Halifax, Nova Scotia'
            },
            items: [
                {
                    id: '1',
                    name: 'Black Crew Neck T Shirt',
                    quantity: '2',
                    price: '11.99',
                    imageUrl: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
                },
                {
                    id: '2',
                    name: 'Mens Athletic Fit Stretch Jean',
                    quantity: '1',
                    price: '34.99',
                    imageUrl: 'https://media.istockphoto.com/id/1383559705/photo/blue-jeans-isolated-on-white-womens-trousers-cutout.jpg?s=1024x1024&w=is&k=20&c=3sHZtc1Z78uL88dVAo0MWEDUB-gLYXg6poyQyEvnax8=',
                },
            ],
            trackingDetails: [
                {
                    status: 'Order placed',
                    date: '2023-05-22',
                },
                {
                    status: 'Order shipped',
                    date: '2023-05-23',
                },
                {
                    status: 'Out for delivery',
                    date: '2023-05-26',
                },
                {
                    status: 'Delivered',
                    date: '2023-05-26',
                }
            ],
        };

        return (
            <div className="container mt-5">
                <div className="jumbotron mb-5">
                <h2 className="display-5 main-header">Order Tracking</h2>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                    <h4 className="section-header">Customer Details</h4>
                        <div className="card p-4 mb-4">
                            <p><strong className="text-uppercase">Name:</strong> <span className="text-muted">{order.customer.name}</span></p>
                            <p><strong className="text-uppercase">Address:</strong> <span className="text-muted">{order.customer.address}</span></p>
                        </div>
                        <h4 className="section-header">Order Details</h4>
                        <div className="card p-4 mb-4">
                            <p><strong className="text-uppercase">Order ID:</strong> <span className="text-muted">{order.id}</span></p>
                            <p><strong className="text-uppercase">Order Status:</strong> <span className={order.status === 'Delivered' ? 'text-success' : 'text-warning'}>{order.status}</span></p>
                            <hr/>
                            <h5 className="mb-3">Items:</h5>
                            <div>
                                {order.items.map((item, index) => (
                                    <div className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-3" key={index}>
                                        <div className="d-flex align-items-center">
                                            <img src={item.imageUrl} alt={item.name} style={{width: '50px', height: '50px', marginRight: '10px'}} />
                                            <div>
                                                <h6 className="mb-0">{item.name}</h6>
                                                <small className="text-muted">Quantity: {item.quantity}</small>
                                            </div>
                                        </div>
                                        <p className="mb-0"><strong>Price: </strong>${item.price}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <h4 className="section-header">Tracking Details</h4>
                        <div className="card p-4 mb-4">
                            {order.trackingDetails.map((tracking, index) => (
                                <div className="d-flex justify-content-between my-2" key={index}>
                                    <div>
                                        <p className="mb-0"><strong className="text-uppercase">{tracking.status}</strong></p>
                                        <p className="mb-0 text-muted">{tracking.date}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OrderTracking;
