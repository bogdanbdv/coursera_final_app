import React from 'react'
import "../components/styles/SpecialsCard.css"
import Dessert1 from "../components/assets/greek_salad.jpg"
import Dessert2 from "../components/assets/bruschetta.jpg"
import Dessert3 from "../components/assets/lemon_dessert.jpg"
import { MdDeliveryDining } from "react-icons/md"
import { NavLink } from 'react-router-dom'

const SpecialsCard = () => {
    const specialMenus = [
        {
            image: Dessert1,
            title: "Greek Salad",
            price: "$11.99",
            description: "Fresh tomatoes, cucumbers, red onion, green peppers, Kalamata olives, and feta cheese, drizzled with olive oil and seasoned with oregano. A classic Mediterranean delight!",
            order: "Order online"
        },
        {
            image: Dessert2,
            title: "Bruschetta",
            price: "$7.99",
            description: "Crispy grilled bread topped with a fresh mix of diced tomatoes, garlic, basil, and olive oil, finished with a drizzle of balsamic glaze. A perfect Italian appetizer!",
            order: "Order online"
        },
        {
            image: Dessert3,
            title: "Lemon Dessert",
            price: "$9.99",
            description: "Our Lemon Cake features a light, fluffy sponge infused with fresh lemon zest, topped with a smooth, tangy lemon frosting. A perfect refreshing dessert for you!",
            order: "Order online"
        }
    ]

    const specialMenusItems = specialMenus.map(menu => {
            const image = menu.image;
            const title = menu.title;
            const price = menu.price;
            const description = menu.description;
            const order = menu.order;

            return (
                <div>
                    <div className="special-card-container">
                        <div className="image-container">
                                <img src={image} alt="Special dessert" />
                            </div>
                        <div className="special-card-text">
                            <div className="special-card-title">
                                <h3>{title}</h3>
                                <h3 className="price-tag">{price}</h3>
                            </div>
                            <p>{description}</p>
                            <NavLink to="#" className="order-button">
                                <h4>
                                    {order}
                                    { <MdDeliveryDining size={30} style={{ color: "#333333", marginLeft: "10px",}} /> }
                                </h4>
                            </NavLink>
                        </div>
                    </div>
                </div>
            )
    })


  return (
    <div>
      <div className="special-card">
        {specialMenusItems}
      </div>
    </div>
  )
}

export default SpecialsCard
