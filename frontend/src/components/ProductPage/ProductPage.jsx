import React, { useState } from "react";
import allItems from "../../data/allItems";
import { useParams } from "react-router-dom";
import Box from "@mui/system/Box";
import { formatCurrency } from "../../utilities/formatCurrency";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

function ProductPage() {
  const quantity = 1;

  const { id } = useParams();
  const product = allItems.find((item) => item.id.toString() === id);

  return (
    <Box sx={{ marginTop: "64px", padding: "22px 30px" }}>
      <Box>
        <h1>{product.name}</h1>
        <p>{product.type}</p>
        <p>{formatCurrency(product.price)}</p>
        <p>{product.description}</p>
      </Box>
      <Box>
        <Button variant="contained" size="small">
          +
        </Button>
        <span>{quantity}</span>
        <Button variant="contained" size="small">
          -
        </Button>
      </Box>
      <Box>
        <Button variant="contained" color="secondary" startIcon={<SendIcon />}>
          Add to cart
        </Button>
      </Box>
    </Box>
  );
}

export default ProductPage;
