/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";


const Item = ( {perfume} ) => {
  return (
    <div className="prod">
    <Card sx={{ maxWidth: 345, minWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          image={perfume.imagen}
          alt={perfume.nombre}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {perfume.nombre}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {perfume.diseñador}
          </Typography>
          <div style={{ marginTop: "20px" }}>
            <Typography variant="h6" color="div">
              ${perfume.precio}
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Comprar
        </Button>
      </CardActions>
      <CardActions>
        <Button size="small" color="primary">
        <Link to={`/item/${perfume.id}`}>Ver Más</Link>
        </Button>
        <Link/>
      </CardActions>
    </Card>
    </div>
  )
}

export default Item