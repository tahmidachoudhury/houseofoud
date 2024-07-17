import React from "react"
import Grid from "@mui/system/Unstable_Grid"
import Box from "@mui/system/Box"
import Typography from "@mui/material/Typography"
import { themeOptions } from "../../../themes/Theme"
import { ThemeProvider } from "@mui/material"
import Rating from "@mui/material/Rating"
import FavoriteIcon from "@mui/icons-material/Favorite"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import { styled } from "@mui/material/styles"
import { Link } from "react-router-dom"
import { useLikedItems } from "../../../context/LikedItemsContext"

const StyledRating = styled(Rating)({
  zIndex: 2,
  position: "absolute",
  right: 10,
  top: 10,
  "& .MuiRating-iconFilled": {
    color: "#ff6d75",
  },
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
})

function Product(props) {
  const { addLikedItem, unlikeItem } = useLikedItems()
  const cntrStyle = {
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: `url(${props.url})`,
    overflow: "hidden",
    aspectRatio: "3/4",
  }

  const productInfo = {
    padding: "15px 0 ",
  }

  return (
    <Box position="relative" zIndex={1}>
      <StyledRating
        name="customized-color"
        getLabelText={(value) => `${value} Heart${value !== 1 ? "s" : ""}`}
        icon={<FavoriteIcon fontSize="inherit" />}
        max={1}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        onClick={() => addLikedItem(props.link)}
      />
      <Link to={`/product/${props.link}`} key={props.link}>
        <Box
          width="100%"
          height="100%"
          display="flex"
          flexDirection="column"
          position="relative"
          zIndex={0}
          sx={{ pb: 5 }}
        >
          <div className="image-container" style={{ ...cntrStyle }} />

          <div style={productInfo}>
            <ThemeProvider theme={themeOptions}>
              <Typography gutterBottom>{props.type}</Typography>
              <Typography variant="body2" gutterBottom>
                {props.name}
              </Typography>
              <Grid container>
                <Grid item xs={6}>
                  <Typography gutterBottom>{props.price}</Typography>
                </Grid>
                <Grid item xs={6} display="flex" justifyContent="right">
                  <Typography gutterBottom>{props.size}</Typography>
                </Grid>
              </Grid>
            </ThemeProvider>
          </div>
        </Box>
      </Link>
    </Box>
  )
}

export default Product
