import { Membership } from '../data/Interface/membership';



export const memberships: Membership[] = [
  {
    id: "price_1PSiNw03TvbBrOXumVzBYRba",
    name: "Before 12 Membership",
    description: "Access to facilities during off-peak hours, before noon.",
    benefits: ["Access to gym equipment", "Swimming pool access"],
    price: 15,
  },
  {
    id: "price_1PSiCY03TvbBrOXuZWBo3pcc",
    name: "Day Pass",
    description: "One-day access to all facilities.",
    benefits: ["Full-day access to gym and pool"],
    price: 5,
  },
  {
    id: "price_1PSiOu03TvbBrOXupH7WgaOF",
    name: "Full Hours Membership",
    description: "Unrestricted access to all facilities during operational hours.",
    benefits: ["Access during gym hours (6 AM - 9 PM)", "Access to all amenities"],
    price: 45,
  },
  {
    id: "price_1PSiLi03TvbBrOXu9Qj85hV2",
    name: "After 12 Membership",
    description: "Access to facilities during afternoon and evening hours.",
    benefits: ["Access to gym and classes after 12 PM until 9 PM"],
    price: 20,
  },
];
