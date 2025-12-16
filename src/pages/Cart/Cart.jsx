import React, { useState } from "react";
import styles from "./Cart.module.scss";
import { Link } from "react-router-dom";
import clsx from "clsx";

const Cart = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Sweater Loose Fit",
      size: "XL",
      color: "Black",
      price: 2500.0,
      quantity: 1,
      image: "assets/Him/Sweater/loose_blk1.png?w=400&h=400&fit=crop",
    },
    {
      id: 2,
      name: "Polyester Shirt",
      size: "32",
      color: "White",
      price: 1800.0,
      quantity: 1,
      image: "assets/Him/SoMi/polyeste/somipoly.png?w=400&h=400&fit=crop",
    },
    {
      id: 3,
      name: "Knit Socks",
      size: "L",
      color: "Blue",
      price: 3200.0,
      quantity: 2,
      image: "assets/Him/SoMi/KeSoc/kexanh1.png?w=400&h=400&fit=crop",
    },
    {
      id: 4,
      name: "Boxy T-Shirt",
      size: "M",
      color: "Black",
      price: 4500.0,
      quantity: 1,
      image:
        "assets/Him/AoThun/ThunInBoxy/thunBoxy-black.png?w=400&h=400&fit=crop",
    },
    {
      id: 5,
      name: "Puffer Jacket",
      size: "L",
      color: "Black",
      price: 890.0,
      quantity: 3,
      image:
        "assets/Him/AoPhao/ChanBongCoTuiFormLose/chanBong-black.png?w=400&h=400&fit=crop",
    },
    {
      id: 6,
      name: "Hoodie Boxy",
      size: "XL",
      color: "Grey",
      price: 3800.0,
      quantity: 1,
      image: "assets/Him/Hoodie/Boxy/hoodieboxy.webp?w=400&h=400&fit=crop",
    },
  ]);
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
    setShowDeleteModal(false);
    setItemToDelete(null);
  };

  const handleDeleteClick = (id) => {
    setItemToDelete(id);
    setShowDeleteModal(true);
  };

  const cancelDelete = () => {
    setShowDeleteModal(false);
    setItemToDelete(null);
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
                      <h3 className={styles.productName}>{item.name}</h3>
                      <button
                        className={styles.removeBtn}
                        onClick={() => handleDeleteClick(item.id)}
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
          </div>

          <div className={styles.rightColumn}>
            <div className={styles.stickyWrapper}>
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
                <Link to="/checkout" className={clsx(styles.checkoutBtn)}>
                  Proceed to Checkout
                </Link>
                <button className={styles.continueBtn}>
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showDeleteModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <h3 className={styles.modalTitle}>Remove Item</h3>
            <p className={styles.modalText}>
              Are you sure you want to remove this item from your cart?
            </p>
            <div className={styles.modalActions}>
              <button className={styles.modalCancelBtn} onClick={cancelDelete}>
                Cancel
              </button>
              <button
                className={styles.modalConfirmBtn}
                onClick={() => removeItem(itemToDelete)}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
