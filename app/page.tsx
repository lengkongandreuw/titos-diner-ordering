"use client";

import { useMemo, useState } from "react";
import { categories, menu, optionSets, type MenuItem, type OptionChoice } from "./menu-data";

type CartLine = {
  key: string;
  item: MenuItem;
  qty: number;
  choices: Record<string, OptionChoice>;
  note: string;
  unitPrice: number;
};

const money = new Intl.NumberFormat("en-US", { style:"currency", currency:"USD" });
const itemPrice = (item: MenuItem) => item.price === null ? "Market Price" : money.format(item.price);

export default function Home() {
  const [active, setActive] = useState("Favorites");
  const [query, setQuery] = useState("");
  const [orderType, setOrderType] = useState<"Pickup" | "Delivery">("Pickup");
  const [cart, setCart] = useState<CartLine[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [selected, setSelected] = useState<MenuItem | null>(null);
  const [choices, setChoices] = useState<Record<string, OptionChoice>>({});
  const [qty, setQty] = useState(1);
  const [note, setNote] = useState("");
  const [navActive, setNavActive] = useState<"home"|"menu"|"cart"|"call">("home");
  const [mobileMenu, setMobileMenu] = useState(false);

  const visible = useMemo(() => {
    const q = query.toLowerCase().trim();
    return menu.filter((item) => {
      const categoryMatch = active === "Favorites" ? Boolean(item.tag) : item.category === active;
      return categoryMatch && (!q || `${item.name} ${item.description}`.toLowerCase().includes(q));
    });
  }, [active, query]);

  const cartCount = cart.reduce((sum, line) => sum + line.qty, 0);
  const subtotal = cart.reduce((sum, line) => sum + line.unitPrice * line.qty, 0);
  const groups = selected?.customizer ? optionSets[selected.customizer] : [];
  const configuredUnitPrice = (selected?.price || 0) + Object.values(choices).reduce((sum, choice) => sum + choice.price, 0);

  function openItem(item: MenuItem) {
    if (item.price === null) {
      window.location.href = "tel:5405483406";
      return;
    }
    const defaults: Record<string, OptionChoice> = {};
    if (item.customizer) optionSets[item.customizer].forEach((group) => { defaults[group.name] = group.choices[0]; });
    setChoices(defaults);
    setQty(1);
    setNote("");
    setSelected(item);
  }

  function addConfiguredItem() {
    if (!selected || selected.price === null) return;
    const signature = Object.entries(choices).map(([group, choice]) => `${group}:${choice.label}`).join("|");
    const key = `${selected.id}|${signature}|${note.trim()}`;
    setCart((current) => {
      const existing = current.find((line) => line.key === key);
      if (existing) return current.map((line) => line.key === key ? { ...line, qty:line.qty + qty } : line);
      return [...current, { key, item:selected, qty, choices, note:note.trim(), unitPrice:configuredUnitPrice }];
    });
    setSelected(null);
    setNavActive("cart");
  }

  function changeQty(key: string, amount: number) {
    setCart((current) => current.map((line) => line.key === key ? { ...line, qty:Math.max(0, line.qty + amount) } : line).filter((line) => line.qty > 0));
  }

  function goMenu() {
    setNavActive("menu");
    document.getElementById("menu")?.scrollIntoView({ behavior:"smooth" });
  }

  return <main>
    <header className="topbar">
      <a className="brand" href="#top" aria-label="Tito's Diner home" onClick={() => setNavActive("home")}><img src="./icon/titosdinnerlogo1.png" alt="Tito's Diner" /></a>
      <div className="location"><span className="eyebrow">ORDERING FROM</span><strong>Fredericksburg, VA</strong><span className="open-dot">Open until 10 PM</span></div>
      <nav className="desktop-nav" aria-label="Main navigation"><button onClick={goMenu}>Menu</button><a href="#about">Our diner</a></nav>
      <button className="cart-button" onClick={() => { setCartOpen(true); setNavActive("cart"); }} aria-label={`Open cart with ${cartCount} items`}><img src="./icon/carticon.png" alt="" /> Your order <b>{cartCount}</b></button>
      <div className="mobile-greeting"><span>Hi, guest</span><b>TD</b><button onClick={() => setMobileMenu(!mobileMenu)} aria-label="Toggle navigation">☰</button></div>
      {mobileMenu && <div className="mobile-popover"><button onClick={() => { goMenu(); setMobileMenu(false); }}>Browse menu</button><a href="#about" onClick={() => setMobileMenu(false)}>Our diner</a><a href="tel:5405483406">Call Tito’s</a></div>}
    </header>

    <section className="hero" id="top" style={{ backgroundImage:'url("./icon/herobackground1.png")' }}>
      <div className="hero-copy">
        <span className="kicker">CLASSIC AMERICAN DINER · SINCE 2009</span>
        <h1>COME<br />HUNGRY.</h1>
        <p>Big plates. Real ingredients. Zero small talk until the first bite.</p>
        <div className="order-switch" aria-label="Order type">
          {(["Pickup","Delivery"] as const).map((type) => <button key={type} className={orderType === type ? "active" : ""} onClick={() => setOrderType(type)}><span aria-hidden="true">{type === "Pickup" ? "⌂" : "→"}</span><span><small>{type === "Pickup" ? "READY IN 20–30 MIN" : "DELIVERED TO YOU"}</small>{type}</span></button>)}
        </div>
        <button className="primary-cta" onClick={goMenu}>START YOUR ORDER <span>→</span></button>
      </div>
      <div className="hero-rating"><span>★</span><strong>4.4</strong><small>2,300+ reviews</small></div>
    </section>

    <section className="menu-section" id="menu">
      <div className="section-heading"><div><span className="kicker dark">THE WHOLE MENU</span><h2>WHAT ARE YOU<br />CRAVING?</h2><p>Breakfast all day, diner classics, Mediterranean favorites, and the sides you actually came for.</p></div><label className="search"><span aria-hidden="true">⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search all menu items" aria-label="Search all menu items" /></label></div>
      <div className="category-tabs" role="tablist" aria-label="Menu categories">{categories.map((category) => <button role="tab" aria-selected={active === category} key={category} className={active === category ? "active" : ""} onClick={() => setActive(category)}>{category}</button>)}</div>
      <p className="category-count"><strong>{visible.length}</strong> items · Prices from Tito’s April 2023 menu</p>
      <div className="menu-grid">{visible.map((item) => <article className="menu-card" key={item.id}>
        <button className="card-photo" onClick={() => openItem(item)} aria-label={`Customize ${item.name}`}><img src={item.image} alt={item.name} loading="lazy" />{item.tag && <span className="tag">{item.tag}</span>}{item.vegetarian && <span className="veg-dot" title="Vegetarian">V</span>}</button>
        <div className="card-content"><div className="item-title"><h3>{item.name}</h3><strong>{itemPrice(item)}</strong></div><p>{item.description}</p><button onClick={() => openItem(item)}>{item.price === null ? "CALL FOR PRICE" : item.customizer ? "CUSTOMIZE" : "ADD TO ORDER"}<span>{item.price === null ? "☎" : "+"}</span></button></div>
      </article>)}</div>
      {!visible.length && <div className="empty-state"><strong>Nothing hiding under that name.</strong><span>Try another search or category.</span></div>}
    </section>

    <section className="swap-banner"><div><span className="kicker">MAKE IT YOURS</span><h2>FRIES AREN’T<br />A LIFE SENTENCE.</h2></div><div className="swap-options"><span>French fries <b>Included</b></span><span>Sweet potato fries <b>+ $0.99</b></span><span>Onion rings <b>+ $1.49</b></span></div><p>Sandwiches and burgers include French fries. Swap the side when you customize your item.</p></section>

    <section className="story" id="about"><div><span className="kicker">THIS IS TITO'S</span><h2>FRESH. LOCAL.<br />SERIOUSLY SATISFYING.</h2></div><p>American diner comfort meets Tito’s Mediterranean favorites, with fresh ingredients and portions that know why you came.</p><a href="tel:5405483406">CALL THE DINER <span>540.548.3406</span></a></section>
    <footer><img src="./icon/titosdinnerlogo1.png" alt="Tito's Diner" /><p>1695 Carl D Silver Pkwy<br />Fredericksburg, VA 22401</p><p><strong>MON–SUN</strong><br />7:00 AM – 10:00 PM</p><p className="footer-line">REAL FOOD. BOLD FLAVOR. <span>COME HUNGRY.</span></p></footer>

    <nav className="bottom-nav" aria-label="Mobile navigation">
      <a className={navActive === "home" ? "active" : ""} href="#top" onClick={() => setNavActive("home")}><img src={`./icon/${navActive === "home" ? "homeactive" : "homeicon"}.png`} alt="" /><span>Home</span></a>
      <button className={navActive === "menu" ? "active" : ""} onClick={goMenu}><img src={`./icon/${navActive === "menu" ? "menuactive" : "menuicon"}.png`} alt="" /><span>Menu</span></button>
      <button className={navActive === "cart" ? "active" : ""} onClick={() => { setCartOpen(true); setNavActive("cart"); }}><span className="nav-badge">{cartCount}</span><img src={`./icon/${navActive === "cart" ? "cartactive" : "carticon"}.png`} alt="" /><span>Cart</span></button>
      <a className={navActive === "call" ? "active" : ""} href="tel:5405483406" onClick={() => setNavActive("call")}><img src={`./icon/${navActive === "call" ? "callactive" : "callicon"}.png`} alt="" /><span>Call</span></a>
    </nav>

    {selected && <div className="modal-layer" role="dialog" aria-modal="true" aria-label={`Customize ${selected.name}`}><button className="scrim" onClick={() => setSelected(null)} aria-label="Close customization" /><section className="item-modal"><button className="close" onClick={() => setSelected(null)} aria-label="Close">×</button><div className="modal-hero"><img src={selected.image} alt={selected.name} /><div><span className="kicker">CUSTOMIZE YOUR ORDER</span><h2>{selected.name}</h2><p>{selected.description}</p><strong>{money.format(configuredUnitPrice)}</strong></div></div><div className="option-scroll">{groups.map((group) => <fieldset key={group.name}><legend>{group.name}</legend>{group.choices.map((choice) => <label key={choice.label} className={choices[group.name]?.label === choice.label ? "chosen" : ""}><input type="radio" name={group.name} checked={choices[group.name]?.label === choice.label} onChange={() => setChoices((current) => ({ ...current, [group.name]:choice }))} /><span>{choice.label}</span><b>{choice.price ? `+ ${money.format(choice.price)}` : "Included"}</b></label>)}</fieldset>)}<label className="special-note"><span>Special instructions</span><textarea value={note} onChange={(event) => setNote(event.target.value)} placeholder="Sauce on the side, no onions…" maxLength={160} /></label></div><div className="modal-actions"><div className="qty"><button onClick={() => setQty(Math.max(1,qty-1))}>−</button><span>{qty}</span><button onClick={() => setQty(qty+1)}>+</button></div><button className="add-order" onClick={addConfiguredItem}>ADD TO ORDER <span>{money.format(configuredUnitPrice * qty)}</span></button></div></section></div>}

    {cartOpen && <div className="cart-layer" role="dialog" aria-modal="true" aria-label="Your order"><button className="scrim" onClick={() => setCartOpen(false)} aria-label="Close cart" /><aside className="cart-drawer"><div className="cart-head"><div><span className="kicker dark">{orderType.toUpperCase()}</span><h2>YOUR ORDER.</h2></div><button className="close" onClick={() => setCartOpen(false)} aria-label="Close cart">×</button></div><div className="fulfillment"><span>⌂</span><div><small>{orderType} from</small><strong>1695 Carl D Silver Pkwy</strong></div><button onClick={() => setCartOpen(false)}>Change</button></div><div className="cart-items">{cart.length ? cart.map((line) => <div className="cart-item" key={line.key}><img src={line.item.image} alt="" /><div><strong>{line.item.name}</strong><small>{Object.values(line.choices).map((choice) => choice.label).join(" · ")}</small>{line.note && <small>“{line.note}”</small>}<span>{money.format(line.unitPrice * line.qty)}</span></div><div className="qty"><button onClick={() => changeQty(line.key,-1)}>−</button><span>{line.qty}</span><button onClick={() => changeQty(line.key,1)}>+</button></div></div>) : <div className="cart-empty"><img src="./icon/carticon.png" alt="" /><strong>Your tray is empty.</strong><span>The fries miss you already.</span><button onClick={() => { setCartOpen(false); goMenu(); }}>BROWSE THE MENU</button></div>}</div><div className="cart-total"><span>Subtotal</span><strong>{money.format(subtotal)}</strong></div><a className={`checkout ${!cart.length ? "disabled" : ""}`} href={cart.length ? "tel:5405483406" : undefined}>PLACE ORDER BY PHONE <span>{money.format(subtotal)}</span></a><small className="tax-note">Taxes and fees calculated when the order is confirmed.</small></aside></div>}
  </main>;
}
