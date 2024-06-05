import React from "react";
import allItems from "../../data/allItems";
import { useParams } from "react-router-dom";
import Box from "@mui/system/Box";
import { formatCurrency } from "../../utilities/formatCurrency";

function ProductPage() {
  const { id } = useParams();
  const product = allItems.find((item) => item.id.toString() === id);

  return (
    <Box sx={{ marginTop: "64px", padding: "22px 30px" }}>
      <h1>{product.name}</h1>
      <p>{product.type}</p>
      <p>{formatCurrency(product.price)}</p>
      <p>{product.description}</p>
    </Box>
  );
}

export default ProductPage;
