import React from "react";
import allItems from "../../data/allItems.json";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { Stack } from "@mui/system";

export function CartItem(props) {
  const { removeFromCart } = useShoppingCart();
  const item = allItems.find((i) => i.id === Number(props.id));
  if (item == null) return null;

  return (
    <Stack direction="horizontal" gap={2}>
      <img
        src={`../public/${item.url}`}
        style={{ width: "125px", height: "125px", objectFit: "cover" }}
      />
    </Stack>
  );
}
