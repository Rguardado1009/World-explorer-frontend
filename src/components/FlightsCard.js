import React, {useState} from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { useHistory } from "react-router-dom";
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
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
 

export default function FlightsCard({flights}) {
  const history = useHistory();
    const [expanded, setExpanded] = useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
      };
      const [like, setLike] = useState(flights.likes);
      const [dislike, setDislike] = useState(flights.dislikes);
      const handleDelete = () =>{
        fetch(`http://localhost:3000/flights/${flights.id}`,{
        method: "DELETE"     
        }).then((res)=>{
          if (res.ok){
        history.push('/flights')
          }
        })
      };
      const handleLike = (e) =>{
        setLike(like+1);
        fetch(`http://localhost:3000/flights/${flights.id}/likes`,{
        method: "PATCH",
        headers:{"Content-Type": "application/json"},
          body: JSON.stringify(like),
        });
      };
      const handleDislike = (e) =>{
        setDislike(dislike+1);
        fetch(`http://localhost:3000/flights/${flights.id}/dislikes`,{
        method: "PATCH",
        headers:{"Content-Type": "application/json"},
          body: JSON.stringify(dislike),
        });
      };
      


    return (
        <div>
            <Card evelation={6}>
                <CardHeader avatar={
          <Avatar sx={{ bgcolor: "#ECCB9A" }} variant="square">
            {flights.flight_number}
          </Avatar>
        }
                action ={
                <IconButton>
                    <DeleteOutlined onClick={handleDelete}/>
                </IconButton>}
                title={flights.from}
                subheader={flights.to}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary">
                        {flights.description}
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
        <CardContent>
          <Typography paragraph>flight: {flights.flight_number} </Typography>
          <Typography paragraph>
              
          </Typography>
        </CardContent>
      </Collapse>

            </Card>
        </div>
    )
}
