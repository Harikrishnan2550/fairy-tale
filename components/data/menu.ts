export interface MenuItem {
  name: string;
  price: number;
  description?: string;
  image: string; 
}

export interface MenuCategory {
  category: string;
  items: MenuItem[];
}

export const cafeMenuData: MenuCategory[] = [
  {
    category: "Hot Beverages",
    items: [
      { name: "Tea", price: 10, image: "/images/menu/tea.png" },
      { name: "Black Tea", price: 8, image: "/images/menu/black-tea.png" },
      { name: "Coffee", price: 15, image: "/images/menu/coffee.png" },
      { name: "Black Coffee", price: 10, image: "/images/menu/black-coffee.png" },
      { name: "Horlicks", price: 15, image: "/images/menu/horlicks.png" },
    ],
  },
  {
    category: "Fresh Juices",
    items: [
      { name: "Fresh Lemon Juice", price: 30, image: "/images/menu/lemon-juice.png" },
      { name: "Fresh Lemon/Mint Juice", price: 30, image: "/images/menu/lemon-mint.png" },
      { name: "Watermelon Juice", price: 50, image: "/images/menu/watermelon.png" },
      { name: "Pineapple Juice", price: 50, image: "/images/menu/pineapple.png" },
      { name: "Grape Juice", price: 50, image: "/images/menu/grape.png" },
      { name: "Avocado Juice", price: 60, image: "/images/menu/avocado-juice.png" },
      { name: "Pomegranate Juice", price: 60, image: "/images/menu/pomegranate.png" },
      { name: "Apple Juice", price: 60, image: "/images/menu/apple.png" },
    ],
  },
  {
    category: "Shakes & Cold Coffees",
    items: [
      { name: "Cold Coffee", price: 90, image: "/images/menu/cold-coffee.png" },
      { name: "Avocado Milk Shake", price: 100, image: "/images/menu/avocado-shake.png" },
      { name: "Banana Shake", price: 100, image: "/images/menu/banana-shake.png" },
      { name: "Chocolate Shake", price: 125, image: "/images/menu/chocolate.png" },
      { name: "Vanilla Shake", price: 125, image: "/images/menu/vanilla.png" },
      { name: "Butter Scotch Shake", price: 125, image: "/images/menu/butter-scotch.png" },
      { name: "Strawberry Shake", price: 125, image: "/images/menu/strawberry.png" },
      { name: "Oreo Choco Shake", price: 125, image: "/images/menu/oreo.png" },
      { name: "Nutella Shake", price: 125, image: "/images/menu/nutella.png" },
      { name: "Dates Shake", price: 125, image: "/images/menu/dates.png" },
      { name: "Badam Shake", price: 125, image: "/images/menu/badam.png" },
    ],
  },
  {
    category: "Fried Chicken & Snacks",
    items: [
      { name: "French Fries", price: 40, image: "/images/menu/fries.png" },
      { name: "Fairy Potato Fries", price: 80, image: "/images/menu/fairy-fries.png" },
      { name: "Vegetable Club Sandwich", price: 90, image: "/images/menu/veg-sandwich.png" },
      { name: "Cheese Loaded French Fries", price: 120, image: "/images/menu/cheese-fries.png" },
      { name: "Chicken Club Sandwich", price: 120, image: "/images/menu/chicken-sandwich.png" },
      { name: "Cheese Chicken Ball (5 PCs)", price: 140, image: "/images/menu/chicken-balls.png" },
      { name: "Cheese Chicken Loaded with French Fries", price: 180, image: "/images/menu/loaded-chicken-fries.png" },
      { name: "2 PCs Spicy Fried Chicken", price: 140, description: "1PC Bun + French Fries + Sauces", image: "/images/menu/fried-chicken-2.png" },
      { name: "4 PCs Spicy Fried Chicken", price: 250, description: "2PCs Buns + French Fries + Sauces", image: "/images/menu/fried-chicken-4.png" },
      { name: "Family Pack", price: 700, description: "10 PCs Chicken + 4 Buns + French Fries + Sauces + 500 ML Soft Drink", image: "/images/menu/family-pack.png" },
    ],
  },
  {
    category: "Ice Creams & Soft Drinks",
    items: [
      { name: "7 UP 500 ML", price: 50, image: "/images/menu/7up.png" },
      { name: "Mirinda 500 ML", price: 50, image: "/images/menu/mirinda.png" },
      { name: "Ice Cream Single Scoop Cup", price: 60, image: "/images/menu/single-cup.png" },
      { name: "Cone Ice Cream Single Scoop", price: 60, image: "/images/menu/single-cone.png" },
      { name: "Ice Cream Double Scoop Cup", price: 110, image: "/images/menu/double-cup.png" },
      { name: "Cone Ice Cream Double Scoop", price: 110, image: "/images/menu/double-cone.png" },
    ],
  },
];