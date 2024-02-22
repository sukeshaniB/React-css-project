import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';

import './ProductGrid1.css'; // Import the CSS file for styling


const products = [
  
    {
        "id": 7,
        "title": "White Gold Plated Princess",
        "price": 9.99,
        "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
        "category": "jewelery",
        "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
        "rating": {
        "rate": 3,
        "count": 400
        }
        },
        {
        "id": 8,
        "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
        "price": 10.99,
        "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
        "category": "jewelery",
        "image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
        "rating": {
        "rate": 1.9,
        "count": 100
        }
        },
        {
        "id": 9,
        "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
        "price": 64,
        "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
        "rating": {
        "rate": 3.3,
        "count": 203
        }
        },
        {
        "id": 10,
        "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
        "price": 109,
        "description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
        "rating": {
        "rate": 2.9,
        "count": 470
        }
        },
        {
        "id": 11,
        "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
        "price": 109,
        "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
        "rating": {
        "rate": 4.8,
        "count": 319
        }
        },
        {
        "id": 12,
        "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
        "price": 114,
        "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
        "rating": {
        "rate": 4.8,
        "count": 400
        }
        },
     
  
];
const ProductGrid1 = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleDetailsClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <Grid container spacing={2}>
      {products.map((product, index) => (
        <Grid key={index} item xs={12} sm={4}>
          <Card className="product-card">
            <img src={product.image} alt={product.title} className="product-image" />
            <CardContent className="product-content">
              <h2>{product.title}</h2>
              <p>${product.price}</p>
              <p>Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
              <Button variant="contained" color="primary" onClick={() => handleDetailsClick(product)}>
                Details
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}

      {/* Details Modal */}
      <Modal
        open={!!selectedProduct}
        onClose={handleCloseModal}
        aria-labelledby="product-details-modal"
        aria-describedby="product-details-description"
      >
        <div className="product-details-modal">
          {selectedProduct && (
            <>
              <h2>{selectedProduct.title}</h2>
              <p>${selectedProduct.price}</p>
              <p>Rating: {selectedProduct.rating.rate} ({selectedProduct.rating.count} reviews)</p>
              <p>{selectedProduct.description}</p>
              <Button variant="contained" color="primary" onClick={handleCloseModal}>
                Close
              </Button>
            </>
          )}
        </div>
      </Modal>
    </Grid>
  );
};

export default ProductGrid1;