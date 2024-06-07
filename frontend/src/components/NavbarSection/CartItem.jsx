import React from "react";
import allItems from "../../data/allItems.json";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { Stack } from "@mui/system";
import { formatCurrency } from "../../utilities/formatCurrency";
import { Button } from "@mui/material";

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
      <div className="me-auto">
        <div>
          {item.name}{" "}
          {props.quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              x{props.quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {formatCurrency(item.price)}
        </div>
      </div>
      <div> {formatCurrency(item.price * props.quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </Button>
    </Stack>
  );
}
