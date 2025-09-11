import React, { useEffect, useState } from "react";

import HomeCollectionsBlock from "../HomeCollectionsBlock/HomeCollectionsBlock";

const HomeProducts = () => {
  const [products, setProducts] = useState([]);
  const [collections, setCollections] = useState([]);

  

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const rawRes = await fetch("http://localhost:3000/products");
        const res = await rawRes.json();

        setProducts(res);
      } catch (err) {
        throw new Error("err:", err);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchCollection = async () => {
      try {
        const rawRes = await fetch("http://localhost:3000/collections");
        const res = await rawRes.json();
        setCollections(res);
      } catch (err) {
        throw new Error(err);
      }
    };

    fetchCollection();
  }, []);

  console.log(products)
  return (
    <>
      {collections.map((collection) => {
        const productsWithCollection = products.filter((product) => {
          return collection.productIds.includes(Number(product.id));
        });
        console.log(productsWithCollection)
        return (
          <HomeCollectionsBlock
            key={collection.id}
            products={productsWithCollection}
            collection={collection}
          />
        );
      })}
    </>
  );
};

export default HomeProducts;
