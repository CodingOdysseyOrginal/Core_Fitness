// Memberships.tsx
import React from 'react';
import "./Memberships.css";
import { memberships } from '../../Components/data/Memberships'; 

const Memberships = () => {
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default Memberships;
