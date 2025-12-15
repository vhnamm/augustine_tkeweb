import React, { useState } from "react";
import styles from "./Cart.module.scss";


const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Augustine Silk Shirt",
      size: "XL",
      color: "Black",
      price: 2500.0,
      quantity: 1,
      image:
        "https://theselfishmeme.co.uk/wp-content/uploads/2025/09/meme-anh-da-den-om-dau-15.webp?w=400&h=400&fit=crop",
    },
    {
      id: 2,
      name: "Premium Denim Jeans",
      size: "32",
      color: "Blue",
      price: 1.0,
      quantity: 1,
      image:
        "/assets/f6ed0820-c180-44c8-b098-8e59b183e54e.jpg?width=400&height=400&fit=crop",
    },
  ]);


  const [isPackagingChecked, setIsPackagingChecked] = useState(false);


  const updateQuantity = (id, change) => {
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newQty = item.quantity + change;
          return { ...item, quantity: newQty < 1 ? 1 : newQty };
        }
        return item;
      })
    );
  };


  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };


  const formatPrice = (num) =>
    num.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }) + "đ";


  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const taxes = subtotal * 0.09;
  const total = subtotal + taxes;


  if (cartItems.length === 0) {
    return (
      <div className={styles.pageContainer}>
        <div className={`${styles.emptyStateWrapper} grid wide`}>
          <div className={styles.emptyIconBox}>
            <svg
              width="60"
              height="60"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            <span className={styles.plusSign}>+</span>
          </div>
          <h2 className={styles.emptyTitle}>
            Your shopping bag is currently empty
          </h2>
          <p className={styles.emptyText}>
            Add items to place an order or log in to retrieve your shopping bag
          </p>
        </div>
      </div>
    );
  }


  return (
    <div className={styles.pageContainer}>
      <div className={`${styles.mainContent} grid wide`}>
        <div className={styles.layoutGrid}>
          <div className={styles.leftColumn}>
            <div className={styles.columnHeader}>
              <span className={styles.colTitle}>Products</span>
              <span className={styles.colCount}>
                {cartItems.length} product{cartItems.length > 1 ? "s" : ""}
              </span>
            </div>


            <div className={styles.productList}>
              {cartItems.map((item) => (
                <div key={item.id} className={styles.productCard}>
                  <div className={styles.imageBox}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className={styles.img}
                    />
                  </div>


                  <div className={styles.cardDetails}>
                    <div className={styles.cardTop}>
                      <h3 className={styles.productName}>Product name</h3>
                      <button
                        className={styles.removeBtn}
                        onClick={() => removeItem(item.id)}
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </button>
                    </div>


                  <div className={styles.variantInfo}>
                      <div className={styles.variantRow}>
                        <span>Size</span> <span>{item.size}</span>
                      </div>
                      <div className={styles.variantRow}>
                        <span>Colour</span> <span>{item.color}</span>
                      </div>
                    </div>


                    <div className={styles.cardBottom}>
                      <div className={styles.qtyWrapper}>
                        <button onClick={() => updateQuantity(item.id, -1)}>
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)}>
                          +
                        </button>
                      </div>


                      <div className={styles.itemPrice}>
                        {formatPrice(item.price * item.quantity)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>


            <div className={styles.packagingSection}>
              <div className={styles.columnHeader}>
                <span className={styles.colTitle}>Packaging & Gifting</span>
              </div>
              <div className={styles.packagingCard}>
                <div className={styles.packInfo}>
                  <div className={styles.packPlaceholder}></div>
                  <span className={styles.packName}>Standard Packaging</span>
                </div>
                <input
                  type="checkbox"
                  className={styles.packCheckbox}
                  checked={isPackagingChecked}
                  onChange={() => setIsPackagingChecked(!isPackagingChecked)}
                />
              </div>
            </div>
          </div>


          <div className={styles.rightColumn}>
            <div className={styles.columnHeader}>
              <span className={styles.colTitle}>Total</span>
            </div>


            <div className={styles.summaryCard}>
              <div className={styles.summaryRow}>
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className={styles.summaryRow}>
                <span>Taxes</span>
                <span>{formatPrice(taxes)}</span>
              </div>
              <div className={`${styles.summaryRow} ${styles.totalRow}`}>
                <span>Total</span>
                <span>{formatPrice(total)}</span>
              </div>


              <button className={styles.checkoutBtn}>
                Proceed to Checkout
              </button>
              <button className={styles.continueBtn}>Continue Shopping</button>


              <div className={styles.noteWrapper}>
                <label>Note</label>
                <textarea></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Cart;

