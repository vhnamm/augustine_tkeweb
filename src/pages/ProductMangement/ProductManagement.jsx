import React from 'react';
import styles from './ProductManagement.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt, faPlus, faSave, faCheck, faSearch, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';

const ProductManagement = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Add New Product</h1>
                <div className={styles.actions}>
                    <button className={styles.btnDraft}> 
                        <FontAwesomeIcon icon={faSave} style={{marginRight: '8px'}} /> Draft 
                    </button>
                    <button className={styles.btnAdd}> 
                        <FontAwesomeIcon icon={faCheck} style={{marginRight: '8px'}} /> Publish 
                    </button>
                </div>
            </div>

            <div className={styles.grid}>
                <div className={styles.leftCol}>
                    <div className={styles.card}>
                        <h3>General Information</h3>
                        <div className={styles.formGroup}>
                            <label>Name Product</label>
                            <input type="text" placeholder="e.g. Puffer Jacket With Pocket Detail" />
                        </div>

                        <div className={styles.formGroup}>
                            <label>Description Product</label>
                            <textarea placeholder="Description of the product..." />
                        </div>

                        <div className={styles.row2}>
                            <div className={styles.formGroup}>
                                <label>Size</label>
                                <div className={styles.sizeSelector}>
                                    <div className={styles.sizeOption}>XS</div>
                                    <div className={styles.sizeOption}>S</div>
                                    <div className={clsx(styles.sizeOption, styles.active)}>M</div>
                                    <div className={styles.sizeOption}>L</div>
                                    <div className={styles.sizeOption}>XL</div>
                                    <div className={styles.sizeOption}>XXL</div>
                                </div>
                            </div>

                            <div className={styles.formGroup}>
                                <label>Gender</label>
                                <div className={styles.genderSelector}>
                                    <label><input type="radio" name="gender" defaultChecked /> Men</label>
                                    <label><input type="radio" name="gender" /> Women</label>
                                    <label><input type="radio" name="gender" /> Unisex</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <h3>Pricing And Stock</h3>
                        <div className={styles.row2}>
                            <div className={styles.formGroup}>
                                <label>Base Pricing ($)</label>
                                <input type="number" placeholder="47.55" />
                            </div>
                            <div className={styles.formGroup}>
                                <label>Stock</label>
                                <input type="number" placeholder="77" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.rightCol}>
                    <div className={styles.card}>
                        <h3>Upload Img</h3>
                        <div className={styles.uploadArea}>
                             <FontAwesomeIcon icon={faCloudUploadAlt} style={{fontSize: '2rem', marginBottom: '10px'}} />
                             <span>Upload Image</span>
                        </div>
                        <div className={styles.thumbnailList}>
                            <div className={styles.thumb}></div>
                            <div className={styles.thumb}></div>
                            <div className={styles.thumb}></div>
                            <div className={clsx(styles.thumb, styles.addThumb)}>
                                <FontAwesomeIcon icon={faPlus} />
                            </div>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <h3>Category</h3>
                        <div className={styles.formGroup}>
                            <label>Product Category</label>
                            <select>
                                <option>Jacket</option>
                                <option>Dress</option>
                                <option>Pants</option>
                                <option>Accessories</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className={styles.sectionDivider}>
                <h2>Recent Products</h2>
            </div>

            <div className={styles.controlBar}>
                <div className={styles.searchBox}>
                    <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} />
                    <input type="text" placeholder="Search product..." />
                </div>
                
                <select className={styles.filterSelect}>
                    <option>All Status</option>
                    <option>Active</option>
                    <option>Out of Stock</option>
                </select>
            </div>

            <div className={styles.tableWrapper}>
                <table>
                    <thead>
                        <tr>
                            <th style={{width: '40%'}}>Product Name</th>
                            <th>Category</th>
                            <th>Stock</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className={styles.colProduct}>
                                    <img src="/assets/Collections/summer/ethical_summer_clothing_idea_large.jpg" alt="" />
                                    <div className={styles.productInfo}>
                                        <span className={styles.productName}>Modern Muse Trench</span>
                                        <span className={styles.productID}>#8763</span>
                                    </div>
                                </div>
                            </td>
                            <td>Jacket</td>
                            <td>77 in stock</td>
                            <td>$47.55</td>
                            <td><span className={clsx(styles.statusBadge, styles.active)}>Active</span></td>
                            <td>
                                <div className={styles.actions}>
                                    <button title="Edit"><FontAwesomeIcon icon={faEdit} /></button>
                                    <button title="Delete" className={styles.btnDelete}><FontAwesomeIcon icon={faTrashAlt} /></button>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div className={styles.colProduct}>
                                    <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=100" alt="" />
                                    <div className={styles.productInfo}>
                                        <span className={styles.productName}>Linen Summer Dress</span>
                                        <span className={styles.productID}>#8764</span>
                                    </div>
                                </div>
                            </td>
                            <td>Dress</td>
                            <td>12 in stock</td>
                            <td>$120.00</td>
                            <td><span className={clsx(styles.statusBadge, styles.active)}>Active</span></td>
                            <td>
                                <div className={styles.actions}>
                                    <button title="Edit"><FontAwesomeIcon icon={faEdit} /></button>
                                    <button title="Delete" className={styles.btnDelete}><FontAwesomeIcon icon={faTrashAlt} /></button>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div className={styles.colProduct}>
                                    <img src="https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=100" alt="" />
                                    <div className={styles.productInfo}>
                                        <span className={styles.productName}>Velvet Evening Gown</span>
                                        <span className={styles.productID}>#8765</span>
                                    </div>
                                </div>
                            </td>
                            <td>Dress</td>
                            <td>0 in stock</td>
                            <td>$250.00</td>
                            <td><span className={clsx(styles.statusBadge, styles.outstock)}>Out Stock</span></td>
                            <td>
                                <div className={styles.actions}>
                                    <button title="Edit"><FontAwesomeIcon icon={faEdit} /></button>
                                    <button title="Delete" className={styles.btnDelete}><FontAwesomeIcon icon={faTrashAlt} /></button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <div style={{height: '50px'}}></div>
        </div>
    );
};

export default ProductManagement;