import React from "react";
import allItems from "../../data/allItems.json";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { Box, Stack, styled } from "@mui/system";
import { formatCurrency } from "../../utilities/formatCurrency";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

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

export function CartItem(props) {
  const { removeFromCart, increaseCartQuantity, decreaseCartQuantity } =
    useShoppingCart();
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
          {item.name}
          {/* {props.quantity > 1 && (
          )} */}
        </div>
        <div>{`Size: `}</div>
        <div className="text-muted">{formatCurrency(item.price)}</div>
        <div className="text-muted">
          <Box sx={{ border: 1, display: "inline-block" }}>
            <ColorButton
              size="small"
              onClick={() => increaseCartQuantity(props.id)}
            >
              <AddIcon style={{ color: "black" }} />
            </ColorButton>
            <span>{props.quantity}</span>
            <ColorButton
              size="small"
              onClick={() => decreaseCartQuantity(props.id)}
            >
              <RemoveIcon style={{ color: "black" }} />
            </ColorButton>
          </Box>
          <Button
            variant="outline-danger"
            size="sm"
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </Button>
        </div>
      </div>
      <div> {formatCurrency(item.price * props.quantity)}</div>
    </Stack>
  );
}
