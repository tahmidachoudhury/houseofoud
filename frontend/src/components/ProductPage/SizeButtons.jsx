import React, { useState } from "react"
import { Button } from "@mui/material"

const ToggleButton = ({ isActive, onClick, children }) => {
  return (
    <Button
      disableRipple
      onClick={onClick}
      sx={{
        color: isActive ? "white" : "#adb5bd",
        borderColor: "black",
        border: 1.2,
        borderRadius: "1.5rem",
        display: "inline-block",
        px: 2,
        py: 0.6,
        mx: 0.5,
        fontSize: "12px",
        backgroundColor: isActive ? "#013220" : "transparent",
        "&:hover": isActive
          ? { backgroundColor: "#013220" }
          : {
              color: "#013220",
              backgroundColor: "white",
            },
      }}
    >
      {children}
    </Button>
  )
}

function ButtonGroup({ onSizeSelect, onPriceSelect, id }) {
  const [activeButton, setActiveButton] = useState(1)

  const handleClick = (buttonId, size, price) => {
    setActiveButton(buttonId)
    onSizeSelect(size)
    onPriceSelect(price)
  }

  return (
    <div>
      <ToggleButton
        isActive={activeButton === 1}
        onClick={() => handleClick(1, "3ml", 6)}
      >
        3ml
      </ToggleButton>
      <ToggleButton
        isActive={activeButton === 2}
        onClick={() => handleClick(2, "6ml", 10)}
      >
        6ml
      </ToggleButton>
      <ToggleButton
        isActive={activeButton === 3}
        onClick={() => handleClick(3, "12ml", 18)}
      >
        12ml
      </ToggleButton>
      <ToggleButton
        isActive={activeButton === 4}
        onClick={() => handleClick(4, "24ml", 35)}
      >
        24ml
      </ToggleButton>
    </div>
  )
}

export default ButtonGroup
