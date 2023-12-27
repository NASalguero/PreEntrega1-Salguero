/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const ItemDetail = ({item}) => {
  return (
    <div>
        <Card sx={{ maxWidth: 345, minWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          image={item.imagen}
          alt={item.nombre}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.nombre}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.diseñador}
          </Typography>
          <div style={{ marginTop: "20px" }}>
            <Typography variant="h6" color="div">
              {item.precio}
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Comprar
        </Button>
      </CardActions>
    </Card>
    </div>
  )
}

export default ItemDetail