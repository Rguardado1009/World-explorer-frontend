import React, {useState} from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {makeStyles} from '@material-ui/core'
import ThumbUp from '@mui/icons-material/ThumbUp';
import ThumbDown from '@mui/icons-material/ThumbDown';
import { Badge } from '@material-ui/core';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { DeleteOutlined } from '@material-ui/icons';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;

  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));


 

  const useStyles = makeStyles({
    image: {
        width:'100%',
      },
      card: {
        background:'#ECCB9A',
        width:'100%',
        paddingTop: '5%',
        paddingBottom: 'auto',
        color:'#292929',
      }
})

export default function AirlinesCard({airline}) {
    const classes = useStyles()
    const [expanded, setExpanded] = useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
      };
      const [like, setLike] = useState(airline.likes);
      const [dislike, setDislike] = useState(airline.dislikes);

      const handleLike = (e) =>{
        setLike(like+1);
        fetch(`http://localhost:3000/airlines/${airline.id}/likes`,{
        method: "PATCH",
        headers:{"Content-Type": "application/json"},
          body: JSON.stringify(like),
        });
      };
      const handleDislike = (e) =>{
        setDislike(dislike+1);
        fetch(`http://localhost:3000/airlines/${airline.id}/dislikes`,{
        method: "PATCH",
        headers:{"Content-Type": "application/json"},
          body: JSON.stringify(dislike),
        });
      };


    return (
        <div>
            <Card evelation={2} >
                <CardHeader
                action ={
                <IconButton>
                    {/* <DeleteOutlined/> */}
                </IconButton>}
                title={airline.airline_name}
                subheader={airline.founded}
                />
                 <CardMedia className={classes.image}
                    component="img"
                    height="100%"
                    image={airline.logo}
                    alt="airline logo"
                  />
                <CardContent>
                    <Typography variant="body2" color="textSecondary">
                        {airline.description}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites" 
                    >
                    <Badge color="secondary" badgeContent={like} showZero>
                      <ThumbUp onClick={handleLike} />
                      </Badge>
                    </IconButton>
                    <IconButton aria-label="add to favorites" 
                    onClick={handleDislike}>
                    <Badge color="secondary" badgeContent={dislike} showZero>
                      <ThumbDown />
                      </Badge>
                    </IconButton>
                    
                     <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                    <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent >
          <Typography paragraph>flights:</Typography>
          <Typography paragraph>
          {airline.bag_information}
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
        </CardContent>
      </Collapse>

            </Card>
        </div>
    )
}
