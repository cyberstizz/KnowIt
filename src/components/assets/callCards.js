import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}




export default class callCards extends Component {

    return (
        <div className ="CardBeamR">
            <Card style = 
            
        </div>
    )
}



// ===========================================================================
/*



*/
const CardBeamR = () => {
    const cardInfo = [
        {
            index#: 1,
            image: "https://i.insider.com/50f967f56bb3f7830a000019",
            title: "Lebron James",
            text: "THE GOAT",
        },
        {
            index#: 2,
            image:
                "https://cdn.vox-cdn.com/thumbor/M1qLla2h-V_2yV_Z4nF_NHH_tjA=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/18286450/usa_today_12495932.jpg",
            title: "Alex Caruso",
            text: "THE TRUE GOAT",
        },
        {
            index#: 3,
            image:
                "https://www.insidehook.com/wp-content/uploads/2020/03/steph-curry-nba-jam-e1583192954848.jpg?fit=734%2C488",
            title: "Steph Curry",
            text: "he good",
        },
        {
            index#: 4,
            image:
                "https://i.pinimg.com/originals/03/ce/01/03ce015ea85dc84a17fb4c24a96cd87e.jpg",
            title: "Michael Jordan",
            text: "he is very close to goat",
        },
        {
            index#: 5,
            image:
                "https://i.pinimg.com/originals/03/ce/01/03ce015ea85dc84a17fb4c24a96cd87e.jpg",
            title: "Michael Jordan",
            text: "he is very close to goat",
        },
  ];

// This function Renders the Cards ;  Hence: BeamR.
  const renderCard = (card, index#) => {
    return (
      <Card style={{ width: "18rem" }} key={index#} className="imageReel">
        <Card.Img variant="top" src="holder.js/100px180" src={card.image} />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>{card.text}</Card.Text>
        </Card.Body>
      </Card>
    );
  };

  //  Now to  map over array of objects

  return <div className="grid">{cardInfo.map(renderCard)}</div>;
};

export default MoreDeets;




