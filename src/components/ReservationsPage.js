import React from 'react';
import "./styles/ReservationsPage.css";
import Form from './Form';

function ReservationsPage() {

  return (
    <div className="res-content-wrapper">
        <div className="res-content-container">
            <div className="text">
                <h2>Great food, warm ambiance, unforgettable moments - reserve your table and let the experience begin!</h2>
                <p>At Little Lemon, we take great pride in serving fresh, flavorful dishes crafted with care and passion. Every meal is a celebration of taste, and every guest is treated like family.</p>
                <p>Book a table with us to share in this experience.</p>
            </div>
            <div className="form">
                <h1>Reserve a table</h1>
                <p>Please fill out the reservation form below to secure your table and let us know how we can make your dining experience exceptional!</p>
                <Form />
            </div>
        </div>
    </div>
  )
}

export default ReservationsPage