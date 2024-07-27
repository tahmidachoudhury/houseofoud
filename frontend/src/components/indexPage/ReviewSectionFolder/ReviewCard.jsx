import React from "react"
import { Box, Card, CardContent, Typography } from "@mui/material"
import StarIcon from "@mui/icons-material/Star"

function ReviewCard(props) {
  return (
    <Box
      sx={{
        pr: 2,
        py: 4,
      }}
    >
      <Card
        sx={{
          p: "24px",
          backgroundColor: `#fafafa`,
        }}
      >
        <CardContent style={{ minHeight: "150px" }}>
          {[...Array(props.stars)].map((index) => (
            <StarIcon key={index} sx={{ color: "#daa520" }} />
          ))}

          <Typography
            gutterBottom
            variant="h7"
            component="div"
            style={{ paddingBottom: "10px" }}
          >
            {props.subject}
          </Typography>

          <Typography variant="body2">{props.content}</Typography>

          <Typography variant="overline" color="text.secondary">
            {props.name}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}

export default ReviewCard
