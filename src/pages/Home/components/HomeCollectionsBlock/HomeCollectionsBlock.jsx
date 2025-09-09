import React from "react";
import clsx from "clsx";
import Card from "~/components/UI/Card/Card";

import styles from "./HomeCollectionsBlock.module.scss";
import Button from "~/components/UI/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const HomeCollectionsBlock = ({ products, collection }) => {
  return (
    <div className={clsx(styles.collection_wrap)}>
      <div className={clsx(styles.collection_banner)}>
        <img src={collection.image} alt="banner" />
        <h2 className={clsx(styles["collection_banner-title"])}>
          {collection.description}
        </h2>
      </div>

      <div className={clsx("grid", "wide", styles.collection_item_wrap)}>
        <div className={clsx("row", styles["item-row"], "small-gutter")}>
          {products.map((product) => {
            return (
              <div className={clsx("col", "lg-3", styles["home-item"])}>
                <Card key={product.id} className={clsx(styles.item_in_col)}>
                  <div className={clsx(styles["collection_item-img"])}>
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      loading="lazy"
                    />
                  </div>
                  <div className={clsx(styles.name_price_wrap)}>
                    <h4 className={clsx(styles["collection_item-price"])}>
                      {product.price}
                    </h4>
                    <h4>{product.name}</h4>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>

      <Button outlined rounded size="large" className={clsx(styles.more_btn)}>
        Shop now <FontAwesomeIcon icon={faArrowRight} />
      </Button>
    </div>
  );
};

export default HomeCollectionsBlock;
