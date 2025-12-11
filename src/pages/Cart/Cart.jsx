import React, { useState } from "react";
import styles from "./Cart.module.scss";

const Cart = () => {
  // Dữ liệu mẫu (Shopping Bag)
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Augustine Silk Shirt",
      size: "XL",
      color: "Black",
      price: 2500.00,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop" 
    },
    {
      id: 2,
      name: "Premium Denim Jeans",
      size: "32",
      color: "Blue",
      price: 800.00,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop"
    }
  ]);

  const [isPackagingChecked, setIsPackagingChecked] = useState(false);

  // --- Logic Xử lý ---
  const updateQuantity = (id, change) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = item.quantity + change;
        return { ...item, quantity: newQty < 1 ? 1 : newQty };
      }
      return item;
    }));
  };

  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const formatPrice = (num) => "$" + num.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const taxes = subtotal * 0.09; // Thuế giả định 9%
  const total = subtotal + taxes;

  // --- TRẠNG THÁI 1: GIỎ HÀNG TRỐNG ---
  if (cartItems.length === 0) {
    return (
      <div className={styles.pageContainer}>
        {/* Thêm class "grid wide" vào container ruột */}
        <div className={`${styles.emptyStateWrapper} grid wide`}>
          <div className={styles.emptyIconBox}>
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            <span className={styles.plusSign}>+</span>
          </div>
          <h2 className={styles.emptyTitle}>Your shopping bag is currently empty</h2>
          <p className={styles.emptyText}>Add items to place an order or log in to retrieve your shopping bag</p>
        </div>
      </div>
    );
  }

  // --- TRẠNG THÁI 2: CÓ SẢN PHẨM ---
  return (
    <div className={styles.pageContainer}>
      {/* Thêm class "grid wide" vào container ruột */}
      <div className={`${styles.mainContent} grid wide`}>
        
        {/* Header Section */}
        <div className={styles.header}>
          {/* Logo/Menu ở trên header chung của Layout, đây là phần body */}
        </div>

        <div className={styles.layoutGrid}>
          
          {/* --- CỘT TRÁI: DANH SÁCH SẢN PHẨM --- */}
          <div className={styles.leftColumn}>
            <div className={styles.columnHeader}>
              <span className={styles.colTitle}>Products</span>
              <span className={styles.colCount}>{cartItems.length} product{cartItems.length > 1 ? 's' : ''}</span>
            </div>

            <div className={styles.productList}>
              {cartItems.map((item) => (
                <div key={item.id} className={styles.productCard}>
                  {/* Ảnh sản phẩm (Hình vuông lớn) */}
                  <div className={styles.imageBox}>
                    <img src={item.image} alt={item.name} className={styles.img} />
                  </div>

                  {/* Thông tin chi tiết */}
                  <div className={styles.cardDetails}>
                    <div className={styles.cardTop}>
                      <h3 className={styles.productName}>{item.name}</h3>
                      <button className={styles.removeBtn} onClick={() => removeItem(item.id)}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                      </button>
                    </div>

                    <div className={styles.variantInfo}>
                      <div className={styles.variantRow}><span>Size</span> <span>{item.size}</span></div>
                      <div className={styles.variantRow}><span>Colour</span> <span>{item.color}</span></div>
                    </div>

                    <div className={styles.cardBottom}>
                      {/* Bộ chọn số lượng */}
                      <div className={styles.qtyWrapper}>
                        <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                      </div>
                      
                      <div className={styles.itemPrice}>{formatPrice(item.price * item.quantity)}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Packaging & Gifting */}
            <div className={styles.packagingSection}>
              <div className={styles.columnHeader}>
                <span className={styles.colTitle}>Packaging & Gifting</span>
              </div>
              <div className={styles.packagingCard}>
                <div className={styles.packInfo}>
                  <div className={styles.packPlaceholder}></div> {/* Khối xám trong hình */}
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

          {/* --- CỘT PHẢI: TỔNG TIỀN --- */}
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

              <button className={styles.checkoutBtn}>Proceed to Checkout</button>
              <button className={styles.continueBtn}>Continue Shopping</button>

              <div className={styles.noteWrapper}>
                <label>Note</label>
                <textarea placeholder="Add a note..."></textarea>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Cart;