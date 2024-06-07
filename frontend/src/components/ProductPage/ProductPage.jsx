import React, { useState } from "react";
import allItems from "../../data/allItems.json";
import { useParams } from "react-router-dom";
import Box from "@mui/system/Box";
import { formatCurrency } from "../../utilities/formatCurrency";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { styled } from "@mui/material/styles";

const ColorButton = styled(Button)({
  color: "white",
  borderRadius: 0,
  backgroundColor: "white",
  boxShadow: "none",
  "&:hover": {
    boxShadow: "none",
    backgroundColor: "white",
  },
});

function ProductPage() {
  const { id } = useParams();
  const product = allItems.find((item) => item.id.toString() === id);

  if (!product) {
    return (
      <Box sx={{ marginTop: "64px", padding: "22px 30px" }}>
        this doesn't exist
      </Box>
    );
  }

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
      <Box sx={{ border: 1, display: "inline-block" }}>
        <ColorButton size="small" onClick={() => increaseCartQuantity(id)}>
          <AddIcon style={{ color: "black" }} />
        </ColorButton>
        <span>{quantity}</span>
        <ColorButton size="small" onClick={() => decreaseCartQuantity(id)}>
          <RemoveIcon style={{ color: "black" }} />
        </ColorButton>
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
