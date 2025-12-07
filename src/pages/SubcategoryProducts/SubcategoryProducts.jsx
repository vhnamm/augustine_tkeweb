import React, { useEffect, useState } from 'react';
import { useParams, useOutletContext } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styles from "./SubcategoryProducts.module.scss";
import clsx from 'clsx';

const SubcategoryProducts = () => {
  const { subcategorySlug } = useParams();
  const { category } = useOutletContext();
  const [subcategory, setSubcategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSubcategoryData = async () => {
      try {
        // Fetch subcategory with embedded products
        const res = await fetch(`http://localhost:3000/subcategories?slug=${subcategorySlug}&_embed=products`);
        const subs = await res.json();
        
        const currentSub = subs[0];
        if (!currentSub) {
          throw new Error('Subcategory not found');
        }
        setSubcategory(currentSub);

        // Filter products by categoryId (to ensure they belong to parent category)
        const filtered = (currentSub.products || []).filter(
          p => p.categoryId === category.id
        );
        setProducts(filtered);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching subcategory:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchSubcategoryData();
  }, [subcategorySlug, category.id]);

  if (loading) return <div className={clsx(styles.loading)}>Loading...</div>;
  if (error) return <div className={clsx(styles.error)}>Error: {error}</div>;
  if (!subcategory) return <div className={clsx(styles.error)}>Subcategory not found</div>;

  return (
    <div className={clsx(styles.products_section)}>
      <h2>{subcategory.name}</h2>

      {products.length > 0 ? (
        <div className={clsx(styles.products_grid)}>
          {products.map(prod => (
            <Link key={prod.id} to={`/product/${prod.slug}`} className={clsx(styles.product_card_link)}>
              <div className={clsx(styles.product_card)}>
                <div className={clsx(styles.product_image)}>
                  <img src={prod.images[0]} alt={prod.name} />
                </div>
                <div className={clsx(styles.product_info)}>
                  <h4>{prod.name}</h4>
                  <p className={clsx(styles.price)}>
                    {prod.price.toLocaleString('vi-VN')}đ
                  </p>
                  {prod.rating && (
                    <p className={clsx(styles.rating)}>
                      ⭐ {prod.rating} ({prod.reviewCount} đánh giá)
                    </p>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className={clsx(styles.empty_message)}>
          Không có sản phẩm trong danh mục này.
        </p>
      )}
    </div>
  );
};

export default SubcategoryProducts;