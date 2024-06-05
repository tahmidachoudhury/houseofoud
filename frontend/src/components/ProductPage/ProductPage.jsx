import React, { useState } from "react";
import allItems from "../../data/allItems";
import { useParams } from "react-router-dom";
import Box from "@mui/system/Box";
import { formatCurrency } from "../../utilities/formatCurrency";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function ProductPage() {
  const { id } = useParams();
  const product = allItems.find((item) => item.id.toString() === id);

  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);

  return (
    <Box sx={{ marginTop: "64px", padding: "22px 30px" }}>
      <Box>
        <h1>{product.name}</h1>
        <p>{product.type}</p>
        <p>{formatCurrency(product.price)}</p>
        <p>{product.description}</p>
      </Box>
      <Box>
        <Button
          variant="contained"
          size="small"
          onClick={() => increaseCartQuantity(id)}
        >
          <AddIcon />
        </Button>
        <span>{quantity}</span>
        <Button
          variant="contained"
          size="small"
          onClick={() => decreaseCartQuantity(id)}
        >
          <RemoveIcon />
        </Button>
      </Box>
      <Box>
        <Button
          Button
          variant="outlined"
          color="error"
          startIcon={<DeleteIcon />}
          onClick={() => removeFromCart(id)}
        >
          Remove from cart
        </Button>
      </Box>
    </Box>
  );
}

export default ProductPage;
