//feaching the data from API
import React from 'react'
import "./App.css"

export default function FakeStore({ user }) {
    return (
        <>
            <div className="grid">
                <img className="productImage" src={user.image} alt="productImages"></img>
                <h4>{user.category}</h4>
                <h3>{user.title}</h3>
                <h5>₹{user.price}</h5>
                <p>{user.description}</p>
                <h6>{user.rating.rate},{user.rating.count} Ratings</h6>
            </div>
        </>
    )
}