import React, { useState } from "react";
import styles from "./Checkout.module.scss";
import clsx from "clsx";

const MOCK_CART_ITEMS = [
  {
    id: 1,
    name: "Product name",
    color: "Black",
    size: "XL",
    price: 2500.0,
    quantity: 1,
    image: "https://via.placeholder.com/400x400/808080/808080",
  },
];

const SHIPPING_METHODS = [
  { id: "pick-up", name: "Pick up in Store" },
  { id: "door-to-door", name: "Door to Door Delivery" },
];

const PAYMENT_METHODS = [
  { id: "cod", name: "Cash on Delivery", icon: "DollarSign" },
  { id: "credit-card", name: "Credit/Debit Card", icon: "CreditCard" },
  { id: "bank-transfer", name: "Bank Transfer", icon: "Bank" },
];

const PACKAGING_OPTIONS = [
  { id: "standard", name: "Standard Packaging" },
  { id: "gift", name: "Gift Packaging" },
];

const MOCK_ADDRESS = {
  name: "Your Name",
  phone: "(+84) 0123456789",
  street: "123, Nguyen Trai Street, Ha Dong District, Ha Noi",
};

const formatPrice = (num) =>
  "$" +
  num.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

// Icons
const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const ChevronRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

const DollarSignIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="12" y1="1" x2="12" y2="23"></line>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
  </svg>
);

const CreditCardIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
    <line x1="1" y1="10" x2="23" y2="10"></line>
  </svg>
);

const BankIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="10" width="18" height="12" rx="2" ry="2"></rect>
    <line x1="12" y1="22" x2="12" y2="10"></line>
    <path d="M2 10l10-8 10 8"></path>
  </svg>
);

const getPaymentIcon = (iconName) => {
  switch (iconName) {
    case "DollarSign":
      return <DollarSignIcon />;
    case "CreditCard":
      return <CreditCardIcon />;
    case "Bank":
      return <BankIcon />;
    default:
      return null;
  }
};

const Checkout = () => {
  const [selectedShipping, setSelectedShipping] = useState(
    SHIPPING_METHODS[1].id
  );
  const [selectedPayment, setSelectedPayment] = useState(PAYMENT_METHODS[0].id);
  const [selectedPackaging, setSelectedPackaging] = useState(
    PACKAGING_OPTIONS[0].id
  );
  const [showPackagingDropdown, setShowPackagingDropdown] = useState(false);

  const subtotal = MOCK_CART_ITEMS.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const taxes = 227.27;
  const total = subtotal + taxes;

  const Header = () => (
    <header className={styles.header}>
      <div className={styles.logo}>augustine</div>
      <nav className={styles.nav}>
        <div className={styles.navItem}>Menu</div>
        <div className={styles.navItem}>Collections</div>
      </nav>
      <div className={styles.search}>
        <input type="text" placeholder="Search" />
      </div>
      <button className={styles.contactBtn}>Contact Us</button>
      <div className={styles.icons}>
        <button className={styles.iconBtn}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </button>
        <button className={styles.iconBtn}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
        </button>
      </div>
    </header>
  );

  return (
    <div className={styles.pageContainer}>
      <Header />
      <div className={styles.mainContent}>
        <div className={styles.checkoutLayoutGrid}>
          {/* Left Column */}
          <div className={styles.leftColumn}>
            {/* Shipping Method */}
            <div className={styles.section}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionTitle}>Shipping Method</span>
              </div>
              <div className={styles.optionsList}>
                {SHIPPING_METHODS.map((method) => (
                  <div
                    key={method.id}
                    className={
                      selectedShipping === method.id
                        ? styles.optionCardSelected
                        : styles.optionCard
                    }
                    onClick={() => setSelectedShipping(method.id)}
                  >
                    <span className={styles.optionName}>{method.name}</span>
                    {selectedShipping === method.id ? (
                      <CheckIcon />
                    ) : (
                      <span className={styles.checkboxPlaceholder}></span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Shipping Address */}
            <div className={styles.section}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionTitle}>Shipping Address</span>
              </div>
              <div className={styles.addressCard}>
                <div className={styles.addressDetails}>
                  <div className={styles.addressName}>{MOCK_ADDRESS.name}</div>
                  <div className={styles.addressPhone}>{MOCK_ADDRESS.phone}</div>
                  <div className={styles.addressStreet}>{MOCK_ADDRESS.street}</div>
                </div>
                <ChevronRightIcon />
              </div>
            </div>

            {/* Order Summary */}
            <div className={styles.section}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionTitle}>Order Summary</span>
                <span className={styles.colCount}>
                  {MOCK_CART_ITEMS.length} product
                </span>
              </div>
              
              {/* Product Items */}
              {MOCK_CART_ITEMS.map((item) => (
                <div key={item.id} className={styles.orderSummaryCard}>
                  <div className={styles.orderItemImage}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className={styles.img}
                    />
                  </div>
                  <div className={styles.orderItemDetails}>
                    <div className={styles.productInfo}>
                      <div className={styles.productNameSmall}>
                        {item.name}
                      </div>
                      <div className={styles.productVariant}>{item.color}</div>
                      <div className={styles.productSize}>{item.size}</div>
                    </div>
                  </div>
                  <div className={styles.productPriceSmall}>
                    {formatPrice(item.price)}
                  </div>
                  <div className={styles.itemQuantity}>x{item.quantity}</div>
                </div>
              ))}

              {/* Packaging Dropdown */}
              <div className={styles.packagingSection}>
                <div
                  className={styles.packagingCard}
                  onClick={() =>
                    setShowPackagingDropdown(!showPackagingDropdown)
                  }
                >
                  <div className={styles.packagingLabel}>
                    {PACKAGING_OPTIONS.find((p) => p.id === selectedPackaging)
                      ?.name}
                  </div>
                  <ChevronRightIcon />
                </div>

                {showPackagingDropdown && (
                  <div className={styles.packagingDropdown}>
                    {PACKAGING_OPTIONS.map((option) => (
                      <div
                        key={option.id}
                        className={
                          selectedPackaging === option.id
                            ? styles.packagingOptionSelected
                            : styles.packagingOption
                        }
                        onClick={() => {
                          setSelectedPackaging(option.id);
                          setShowPackagingDropdown(false);
                        }}
                      >
                        <span>{option.name}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Payment Method */}
            <div className={styles.section}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionTitle}>Payment Method</span>
              </div>
              <div className={styles.optionsList}>
                {PAYMENT_METHODS.map((method) => (
                  <div
                    key={method.id}
                    className={
                      selectedPayment === method.id
                        ? styles.optionCardSelected
                        : styles.optionCard
                    }
                    onClick={() => setSelectedPayment(method.id)}
                  >
                    <div className={styles.optionDetails}>
                      {getPaymentIcon(method.icon)}
                      <span className={styles.optionName}>{method.name}</span>
                    </div>
                    {selectedPayment === method.id ? (
                      <CheckIcon />
                    ) : (
                      <span className={styles.checkboxPlaceholder}></span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className={styles.rightColumn}>
            <div className={styles.columnHeader}>
              <span className={styles.colTitle}>Total</span>
            </div>
            <div className={styles.totalSummaryCard}>
              <div className={styles.totalSummaryRow}>
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className={styles.totalSummaryRow}>
                <span>Taxes</span>
                <span>{formatPrice(taxes)}</span>
              </div>
              <div
                className={clsx(
                  styles.totalSummaryRow,
                  styles.totalSummaryTotalRow
                )}
              >
                <span>Total</span>
                <span>{formatPrice(total)}</span>
              </div>

              <button className={styles.checkoutBtn}>
                Proceed to Checkout
              </button>
              <button className={styles.continueBtn}>Continue Shopping</button>

              <p className={styles.agreementText}>
                By placing your order, you agree to the{" "}
                <a href="#">Terms of Services</a>
              </p>

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

export default Checkout;