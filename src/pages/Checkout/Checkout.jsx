import React, { useState } from "react";
import styles from "./Checkout.module.scss";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faTruck } from "@fortawesome/free-solid-svg-icons";

const formatPrice = (num) =>
  num.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }) + " đ";

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

const Checkout = () => {
  const [selectedShipping, setSelectedShipping] = useState("door-to-door");
  const [selectedPayment, setSelectedPayment] = useState("cod");
  const [selectedPackaging, setSelectedPackaging] = useState("standard");
  const [showPackagingDropdown, setShowPackagingDropdown] = useState(false);

  const subtotal = 2500.0;
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
          <div className={styles.leftColumn}>
            {/* Shipping Method */}
            <div className={styles.section}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionTitle}>Shipping Method</span>
              </div>
              <div className={styles.optionsList}>
                <div
                  className={
                    selectedShipping === "pick-up"
                      ? styles.optionCardSelected
                      : styles.optionCard
                  }
                  onClick={() => setSelectedShipping("pick-up")}
                >
                  <div className={styles.optionDetails}>
                    <span className={styles.optionIcon}>
                      <FontAwesomeIcon icon={faBagShopping} />
                    </span>
                    <span className={styles.optionName}>Pick up in Store</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={selectedShipping === "pick-up"}
                    readOnly
                  />
                </div>

                <div
                  className={
                    selectedShipping === "door-to-door"
                      ? styles.optionCardSelected
                      : styles.optionCard
                  }
                  onClick={() => setSelectedShipping("door-to-door")}
                >
                  <div className={styles.optionDetails}>
                    <span className={styles.optionIcon}>
                      <FontAwesomeIcon icon={faTruck} />
                    </span>
                    <span className={styles.optionName}>
                      Door to Door Delivery
                    </span>
                  </div>
                  <input
                    type="checkbox"
                    checked={selectedShipping === "door-to-door"}
                    readOnly
                  />
                </div>
              </div>
            </div>

            <div className={styles.section}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionTitle}>Shipping Address</span>
              </div>
              <div className={styles.addressCard}>
                <div className={styles.addressDetails}>
                  <div className={styles.addressName}>Your Name</div>
                  <div className={styles.addressPhone}>(+84) 0123456789</div>
                  <div className={styles.addressStreet}>
                    123, Nguyen Trai Street, Ha Dong District, Ha Noi
                  </div>
                </div>
                <ChevronRightIcon />
              </div>
            </div>

            <div className={styles.section}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionTitle}>Order Summary</span>
                <span className={styles.colCount}>1 product</span>
              </div>

              <div className={styles.orderSummaryCard}>
                <div className={styles.orderItemImage}>
                  <img
                    src="/assets/áo1.jpg"
                    alt="Product"
                    className={styles.img}
                  />
                </div>
                <div className={styles.orderItemDetails}>
                  <div className={styles.productInfo}>
                    <div className={styles.productNameSmall}>Product name</div>
                    <div className={styles.productVariant}>Black</div>
                    <div className={styles.productPriceSmall}>
                      {formatPrice(2500.0)}
                    </div>
                  </div>
                </div>
                <div className={styles.sizeQuantity}>
                  <div className={styles.productSize}>XL</div>
                  <div className={styles.itemQuantity}>x1</div>
                </div>
              </div>

              <div className={styles.packagingSection}>
                <div
                  className={styles.packagingCard}
                  onClick={() =>
                    setShowPackagingDropdown(!showPackagingDropdown)
                  }
                >
                  <div className={styles.packagingLabel}>
                    <img
                      className={styles.img}
                      src={
                        selectedPackaging === "standard"
                          ? "/assets/pack2.png"
                          : "/assets/id-11134207-7r98s-lrwr71lvzgp28f.jpg"
                      }
                      alt="Packaging"
                    />
                    {selectedPackaging === "standard"
                      ? "Standard Packaging"
                      : "Gift Packaging"}
                  </div>

                  <div
                    className={`${styles.packagingArrow} ${
                      showPackagingDropdown ? styles.arrowOpen : ""
                    }`}
                  >
                    <ChevronRightIcon />
                  </div>
                </div>

                {showPackagingDropdown && (
                  <div className={styles.packagingDropdown}>
                    <div
                      className={
                        selectedPackaging === "standard"
                          ? styles.packagingOptionSelected
                          : styles.packagingOption
                      }
                      onClick={() => {
                        setSelectedPackaging("standard");
                        setShowPackagingDropdown(false);
                      }}
                    >
                      <span>Standard Packaging</span>
                    </div>
                    <div
                      className={
                        selectedPackaging === "gift"
                          ? styles.packagingOptionSelected
                          : styles.packagingOption
                      }
                      onClick={() => {
                        setSelectedPackaging("gift");
                        setShowPackagingDropdown(false);
                      }}
                    >
                      <span>Gift Packaging</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className={styles.section}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionTitle}>Payment Method</span>
              </div>
              <div className={styles.optionsList}>
                <div
                  className={
                    selectedPayment === "cod"
                      ? styles.optionCardSelected
                      : styles.optionCard
                  }
                  onClick={() => setSelectedPayment("cod")}
                >
                  <div className={styles.optionDetails}>
                    <DollarSignIcon />
                    <span className={styles.optionName}>Cash on Delivery</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={selectedPayment === "cod"}
                    readOnly
                  />
                </div>

                <div
                  className={
                    selectedPayment === "credit-card"
                      ? styles.optionCardSelected
                      : styles.optionCard
                  }
                  onClick={() => setSelectedPayment("credit-card")}
                >
                  <div className={styles.optionDetails}>
                    <CreditCardIcon />
                    <span className={styles.optionName}>Credit/Debit Card</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={selectedPayment === "credit-card"}
                    readOnly
                  />
                </div>

                <div
                  className={
                    selectedPayment === "bank-transfer"
                      ? styles.optionCardSelected
                      : styles.optionCard
                  }
                  onClick={() => setSelectedPayment("bank-transfer")}
                >
                  <div className={styles.optionDetails}>
                    <BankIcon />
                    <span className={styles.optionName}>Bank Transfer</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={selectedPayment === "bank-transfer"}
                    readOnly
                  />
                </div>
              </div>
            </div>
          </div>

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
