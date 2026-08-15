"use client";

import { useMemo, useState } from "react";

type MenuItem = { id: number; name: string; description: string; price: number; category: string; image: string; tag?: string };
const categories = ["Favorites", "Breakfast", "Burgers", "Sandwiches", "Dinner", "Drinks"];
const menu: MenuItem[] = [
  { id: 1, name: "Big Breakfast", description: "Three eggs, two pancakes, home fries, and your choice of bacon, sausage, or ham.", price: 11.29, category: "Breakfast", image: "./food/dish-4.jpg", tag: "House favorite" },
  { id: 2, name: "Chicken & Waffles", description: "Crispy fried chicken and a golden Belgian waffle topped with white gravy.", price: 11.99, category: "Breakfast", image: "./food/chicken-waffles.jpg", tag: "Tito's pick" },
  { id: 3, name: "Stuffed French Toast", description: "Mixed fruit with custard or Nutella filling, finished with pecans.", price: 12.99, category: "Breakfast", image: "./food/french-toast.jpg" },
  { id: 4, name: "Tito’s Burger", description: "Fresh ground beef, mozzarella, red pepper pesto, and chipotle mayo.", price: 12.99, category: "Burgers", image: "./food/dish-2.jpg", tag: "Signature" },
  { id: 5, name: "City Burger", description: "A half-pound burger with Swiss cheese and caramelized onions. Fries included.", price: 11.99, category: "Burgers", image: "./food/dish-2.jpg" },
  { id: 6, name: "Classic Gyro", description: "Slow-roasted beef and lamb, cold tzatziki, lettuce, tomato, and onion in warm pita.", price: 9.99, category: "Sandwiches", image: "./food/dish-2.jpg", tag: "Messy. Worth it." },
  { id: 7, name: "Reuben", description: "Toasted rye, corned beef or turkey, sauerkraut, Thousand Island, and Swiss.", price: 11.99, category: "Sandwiches", image: "./food/dish-2.jpg" },
  { id: 8, name: "Herb Grilled Salmon", description: "Atlantic salmon with blended herbs, vegetables, and rice pilaf.", price: 19.99, category: "Dinner", image: "./food/dish-3.jpg", tag: "Heart healthy" },
  { id: 9, name: "Liver & Onions", description: "Grilled beef liver, onions, roasted tomato sauce, mashed potatoes, and vegetables.", price: 12.99, category: "Dinner", image: "./food/dish-1.jpg" },
  { id: 10, name: "Turkey Dinner", description: "Slow-roasted turkey, mashed potatoes, vegetables, stuffing, cranberry sauce, and gravy.", price: 15.99, category: "Dinner", image: "./food/dish-5.jpg" },
  { id: 11, name: "Fresh Brewed Coffee", description: "Hot, fresh, and ready for a refill. Regular or decaf.", price: 3.29, category: "Drinks", image: "./food/dish-4.jpg" },
  { id: 12, name: "Hand-Dipped Shake", description: "Made with Hershey’s Ice Cream. Vanilla, chocolate, strawberry, banana, or peach.", price: 6.99, category: "Drinks", image: "./food/french-toast.jpg" },
];
const money = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });

export default function Home() {
  const [active, setActive] = useState("Favorites");
  const [query, setQuery] = useState("");
  const [orderType, setOrderType] = useState<"Pickup" | "Delivery">("Pickup");
  const [cart, setCart] = useState<Record<number, number>>({ 4: 1 });
  const [cartOpen, setCartOpen] = useState(false);
  const visible = useMemo(() => {
    const q = query.toLowerCase().trim();
    return menu.filter((item) => (active === "Favorites" ? Boolean(item.tag) : item.category === active) && (!q || `${item.name} ${item.description}`.toLowerCase().includes(q)));
  }, [active, query]);
  const cartItems = menu.filter((item) => cart[item.id]).map((item) => ({ ...item, qty: cart[item.id] }));
  const cartCount = cartItems.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const add = (id: number) => setCart((current) => ({ ...current, [id]: (current[id] || 0) + 1 }));
  const changeQty = (id: number, amount: number) => setCart((current) => {
    const next = Math.max(0, (current[id] || 0) + amount);
    const updated = { ...current, [id]: next };
    if (!next) delete updated[id];
    return updated;
  });

  return <main>
    <header className="topbar">
      <a className="brand" href="#top" aria-label="Tito's Diner home"><img src="./titos-logo.png" alt="Tito's Diner" /></a>
      <div className="location"><span className="eyebrow">ORDERING FROM</span><strong>Fredericksburg, VA</strong><span className="open-dot">Open until 10 PM</span></div>
      <nav aria-label="Main navigation"><a href="#menu">Menu</a><a href="#about">Our diner</a></nav>
      <button className="cart-button" onClick={() => setCartOpen(true)} aria-label={`Open cart with ${cartCount} items`}><span aria-hidden="true">▰</span> Your order <b>{cartCount}</b></button>
    </header>

    <section className="hero" id="top">
      <div className="hero-copy">
        <span className="kicker">CLASSIC AMERICAN DINER · SINCE 2009</span><h1>COME<br />HUNGRY.</h1>
        <p>Big plates. Real ingredients. Zero small talk until the first bite.</p>
        <div className="order-switch" aria-label="Order type">
          {(["Pickup", "Delivery"] as const).map((type) => <button key={type} className={orderType === type ? "active" : ""} onClick={() => setOrderType(type)}><span aria-hidden="true">{type === "Pickup" ? "⌂" : "→"}</span><span><small>{type === "Pickup" ? "READY IN 20–30 MIN" : "DELIVERED TO YOU"}</small>{type}</span></button>)}
        </div>
        <a className="primary-cta" href="#menu">START YOUR ORDER <span>↓</span></a>
      </div>
      <div className="hero-photo"><img src="/food/dish-3.jpg" alt="Glazed salmon with rice and fresh vegetables" /><div className="hero-stamp"><strong>REAL</strong><span>DINER FOOD</span></div><div className="hero-note"><span>★</span><strong>4.4</strong><small>2,300+ reviews</small></div></div>
    </section>

    <section className="menu-section" id="menu">
      <div className="section-heading"><div><span className="kicker dark">THE GOOD STUFF</span><h2>WHAT ARE YOU<br />CRAVING?</h2></div><label className="search"><span aria-hidden="true">⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search the menu" aria-label="Search the menu" /></label></div>
      <div className="category-tabs" role="tablist" aria-label="Menu categories">{categories.map((category) => <button role="tab" aria-selected={active === category} key={category} className={active === category ? "active" : ""} onClick={() => setActive(category)}>{category}</button>)}</div>
      <div className="menu-grid">{visible.map((item) => <article className="menu-card" key={item.id}><div className="card-photo"><img src={item.image} alt={item.name} />{item.tag && <span className="tag">{item.tag}</span>}</div><div className="card-content"><div className="item-title"><h3>{item.name}</h3><strong>{money.format(item.price)}</strong></div><p>{item.description}</p><button onClick={() => add(item.id)} aria-label={`Add ${item.name} to order`}>ADD TO ORDER <span>+</span></button></div></article>)}</div>
      {!visible.length && <div className="empty-state"><strong>Nothing hiding under that name.</strong><span>Try another search or category.</span></div>}
    </section>

    <section className="story" id="about"><div><span className="kicker">THIS IS TITO'S</span><h2>FRESH. LOCAL.<br />SERIOUSLY SATISFYING.</h2></div><p>We serve hearty American classics alongside Tito’s Mediterranean favorites, made with fresh ingredients whenever we can.</p><a href="tel:5405483406">CALL THE DINER <span>540.548.3406</span></a></section>
    <footer><img src="./titos-logo.png" alt="Tito's Diner" /><p>1695 Carl D Silver Pkwy<br />Fredericksburg, VA 22401</p><p><strong>MON–SUN</strong><br />7:00 AM – 10:00 PM</p><p className="footer-line">REAL FOOD. BOLD FLAVOR. <span>COME HUNGRY.</span></p></footer>

    {cartOpen && <div className="cart-layer" role="dialog" aria-modal="true" aria-label="Your order"><button className="scrim" onClick={() => setCartOpen(false)} aria-label="Close cart" /><aside className="cart-drawer"><div className="cart-head"><div><span className="kicker dark">{orderType.toUpperCase()}</span><h2>YOUR ORDER.</h2></div><button className="close" onClick={() => setCartOpen(false)} aria-label="Close cart">×</button></div><div className="fulfillment"><span>⌂</span><div><small>{orderType} from</small><strong>1695 Carl D Silver Pkwy</strong></div><button>Change</button></div><div className="cart-items">{cartItems.length ? cartItems.map((item) => <div className="cart-item" key={item.id}><img src={item.image} alt="" /><div><strong>{item.name}</strong><span>{money.format(item.price * item.qty)}</span></div><div className="qty"><button onClick={() => changeQty(item.id, -1)}>−</button><span>{item.qty}</span><button onClick={() => changeQty(item.id, 1)}>+</button></div></div>) : <div className="cart-empty"><strong>Your tray is empty.</strong><span>The fries miss you already.</span></div>}</div><div className="cart-total"><span>Subtotal</span><strong>{money.format(subtotal)}</strong></div><button className="checkout" disabled={!cartItems.length}>CHECKOUT <span>{money.format(subtotal)}</span></button><small className="tax-note">Taxes and fees calculated at checkout.</small></aside></div>}
  </main>;
}
