import React, { useState } from "react";
import { Button, Divider, Drawer, List, ListItem } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { CartItem } from "./CartItem";
import { formatCurrency } from "../../utilities/formatCurrency";
import allItems from "../../data/allItems.json";

export function ShoppingCart(props) {
  const { closeCart, cartItems } = useShoppingCart();

  const DrawerList = (
    <Box sx={{ width: 600 }} role="presentation" onClick={closeCart}>
      <List>
        <ListItem>
          <h2>Cart</h2>
        </ListItem>

        <Stack>
          {cartItems.map((item) => (
            <>
              <CartItem key={item.id} {...item} />
              <Divider />
            </>
          ))}
        </Stack>
      </List>
      <div className="ms-auto fw-bold fs-5">
        Total{" "}
        {formatCurrency(
          cartItems.reduce((total, cartItem) => {
            const item = allItems.find((i) => i.id === Number(cartItem.id));
            return total + (item?.price || 0) * cartItem.quantity;
          }, 0)
        )}
      </div>
    </Box>
  );

  return (
    <div>
      <Drawer open={props.open} onClose={closeCart} anchor="right">
        {DrawerList}
      </Drawer>
    </div>
  );
}
