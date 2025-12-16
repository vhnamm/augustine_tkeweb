import React, { useEffect, useState } from 'react';
import styles from './ProductDetail.module.scss'
import clsx from 'clsx';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faMinus, faPlus, faSpinner } from '@fortawesome/free-solid-svg-icons';

import Button from '../../components/UI/Button/Button';
import DetailTab from './DetailTab';

const listInfo = [
  {name: "Description", id: 1},
  {name: "Composition", id: 2},
  {name: "Reviews", id: 3},
  {name: "Delivery & Return", id: 4}

]

const Product = () => {
  const {slug} = useParams()
  
  const [product, setProduct] = useState({})
  const [variantId, setVariantId] = useState(0)
  const [size, setSize] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [tab, setTab] = useState("Composition")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let timeId;
    async function fetchProduct(){
      try {
        const rawRes = await fetch(`http://localhost:3000/products?slug=${slug}`)
        const res = await rawRes.json()

        setProduct(res[0])
        timeId = setTimeout(() => {
          setLoading(false)
        }, 1000)
        
      } catch (error) {
        console.log(error)
      }
    }
    fetchProduct()

    return (() => clearTimeout(timeId))
  }, [slug])
  console.log(product)

  if(loading) return <div className={styles.loading}><FontAwesomeIcon icon={faSpinner} className={styles.iconLoading}/></div>

  function handleChangeVariant(variantId) {
    setVariantId(variantId)
  }

  function handleInputQuantity(e){
    let userInput = e.target.value.trim()
    if(userInput == ""){
      setQuantity(1)
      return
    }
    setQuantity(Number(userInput))
  }
  return (
       <div className={clsx("grid wide")}>
         <div className={styles.container}>
            <div className={clsx("row large-gutter")}>
              <div className={clsx(styles.image_col, "col lg-6")}>
                
                <div className={styles.prod_main_img}>
                  {product && <img src={`${product.variants[variantId].images[0]}`} alt="anh" />}
                </div>
              </div>

              <div className={clsx(styles.info_col, "col lg-6")}>
                <div className={styles.info_wrap}>
                  <div className={styles.info_header}>
                    <h3 className={styles.product_name}>{product.name}</h3>
                    <FontAwesomeIcon icon={faHeart} className={styles.icon}/>
                  </div>
                  {/* SKU */}
                  <p className={styles.product_sku}>{product.variants[variantId].sizes[size].sku}</p>

                  <h3 className={styles.price}>{product.price + " VND"}</h3>

                  <div className={styles.color_wrap}>
                    <span>Color</span>
                    {/* render color */}
                    <ul className={styles.color_list}>
                        {product.variants.map((variant, index) => {
                          return <li 
                            key={variant.id} className={styles.color_item} style={{backgroundColor: `${variant.colorHex}`}}
                            onClick={() => handleChangeVariant(index)}
                          ></li>
                        })}
                    </ul>
                  </div>

                  <div className={styles.size_wrap}>
                    <div className={styles.size_header}>
                        <span>Size</span>
                        <span className={styles.size_chart}>Size chart</span>
                    </div>
                    <ul>
                      {
                        product.variants[variantId].sizes.map((sizeItem, index) => {
                          return <li className={styles.size_item} key={index}>{sizeItem.size}</li>
                        })
                      }
                    </ul>
                  </div>

                  <div className={styles.quantity_form}>
                    <p>Quantity</p>
                    <div className={styles.spinner_wrap}>
                      <Button disabled = {quantity === 1} className={styles.minus} onClick={() => setQuantity(quantity - 1)}>
                      <FontAwesomeIcon icon={faMinus} />

                      </Button>

                      
                      <input type="number"
                        className={styles.input_quan}
                        value={quantity}
                        
                        onChange={(e) => handleInputQuantity(e)}
                      />
                      <Button className={styles.plus} onClick={() => setQuantity(quantity + 1)}>
                        <FontAwesomeIcon icon={faPlus} />
                      </Button>
                    </div>
                  </div>

                  <Button primary className={clsx(styles.btn_cta)}>Add to Bag</Button>

                    <ul className={styles.tab_container}>
                    {listInfo.map((tab) => {
                      return <li key={tab.id} onClick={() => setTab(tab.name)}>{tab.name}</li>
                    })}
                  </ul>
                  <DetailTab title={tab} prod={product}></DetailTab>
                </div>

                

               

              </div>
            </div>
            {/* row ảnh phụ */}
            <div className={clsx("row medium-gutter", styles.sub_img_wrapper)}>
              <div className={clsx("col lg-6")}>
                <div className={styles.img_des}>
                  <p >{product.description}</p>
                </div>
                
              </div>

              {product.variants[variantId].images.map((img) => {
                return <div className={clsx("col lg-6", styles.container_col)}>
                  <div className={styles.prod_main_img}>
                    <img src={`${img}`} alt="anh" />
                  </div>
                </div>
              })}
              <div className={clsx("col lg-6")}>
                <div className={styles.img_last_des}>
                  <p >{product.shortDescription}</p>
                </div>
              </div>
            </div>
         </div>
         
       </div>
  );
};

export default Product;