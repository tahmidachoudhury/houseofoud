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

const ButtonGroup = () => {
  const [activeButton, setActiveButton] = useState(null)

  const handleClick = (buttonId) => {
    setActiveButton(buttonId)
  }

  return (
    <div>
      <ToggleButton
        isActive={activeButton === 1}
        onClick={() => handleClick(1)}
      >
        6ml
      </ToggleButton>
      <ToggleButton
        isActive={activeButton === 2}
        onClick={() => handleClick(2)}
      >
        12ml
      </ToggleButton>
      <ToggleButton
        isActive={activeButton === 3}
        onClick={() => handleClick(3)}
      >
        15ml
      </ToggleButton>
    </div>
  )
}

export default ButtonGroup
