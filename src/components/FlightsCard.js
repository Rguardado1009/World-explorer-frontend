import React, {useState} from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import FavoriteIcon from '@mui/icons-material/Favorite';

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
    const [expanded, setExpanded] = useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
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
                    <DeleteOutlined/>
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
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
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
