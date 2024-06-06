import React, { useState } from "react";
import {
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Box, Stack } from "@mui/system";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { CartItem } from "./CartItem";

export function ShoppingCart(props) {
  const { closeCart, cartItems } = useShoppingCart();

  const DrawerList = (
    <Box sx={{ width: 400 }} role="presentation" onClick={closeCart}>
      <List>
        <ListItem>
          <h2>Cart</h2>
        </ListItem>

        <Stack>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </Stack>
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
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
