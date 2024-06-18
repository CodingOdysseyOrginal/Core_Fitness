import React from 'react';
import "./Memberships.css";
import { memberships } from '../../Components/data/Memberships'; 

const Memberships: React.FC = () => {


  const handleCheckout = async (membershipId: string) => {
    try {
      const response = await fetch('http://localhost:4000/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: [
            {
              id: membershipId,
              quantity: 1
            }
          ]
        }),
      });

      const { url } = await response.json();
      window.location.href = url;
    } catch (error) {
      console.error('Error during checkout:', error);
    }
  };

  return (
    <section className="Memberships">
      <div className="MembershipInfo">
        <h1>Membership Options</h1>
        <p>
          We offer a variety of membership options tailored to your convenience,
          from off-peak hours to all-day access, day passes, and more. Our goal
          is to provide flexibility that suits your lifestyle.
        </p>
      </div>
      <div className="MembershipOptions">
        {memberships.map((membership, index) => (
          <div key={index} className="MembershipOption">
            <h2>{membership.name}</h2>
            <p>{membership.description}</p>
            <ul>
              {membership.benefits.map((benefit, idx) => (
                <li key={idx}>{benefit}</li>
              ))}
            </ul>
            <p>Price: ${membership.price}</p>
            <button 
              className="checkout-button" 
              onClick={() => handleCheckout(membership.id)}
            >
              Checkout
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Memberships;
