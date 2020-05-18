import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginLeft:'25%',
    marginRigth:'25%',
  },
  media: {
    height: '100%',
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function QuerryReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="querry" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Knowing Project Chater"
        subheader="{Get Date+Time Stamp} May 17, 2020"
      />
      <CardMedia
        className={classes.media}
        image="../img/projectChater.jpeg"
        title="Project Chater"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        In project management, a project charter, project definition, or project statement is a statement of the scope, objectives, and participants in a project.
        It provides a preliminary delineation of roles and responsibilities, outlines the project's key goals, identifies the main stakeholders, and defines the authority of the project manager.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>A Project Chater Should:</Typography>
          <Typography paragraph>
            
            Contain the essence of the project.
            Provide a shared understanding of the project.
            Act as a contract between the project sponsor, key stakeholders and the project team.
            The project charter is usually a short document that refers to more detailed documents such as a new offering request or a request for proposal.
          </Typography>
          <Typography paragraph>
            In Initiative for Policy Dialogue (IPD), this document is known as the project charter. In customer relationship management (CRM), it is known as the project definition report. Both IPD and CRM require this document as part of the project management process.

            The project charter establishes the authority assigned to the project manager, especially in a matrix management environment. It is considered industry best practice.
          </Typography>
          <Typography paragraph>
            The purpose of the project charter is to document:
            ø Reasons for undertaking the project
            ø Objectives and constraints of the project
            ø Directions concerning the solution
            ø Identities of the main stakeholders
            ø In-scope and out-of-scope items
            ø Risks identified early on (A risk management plan should be part of the ø overall project management plan)
            ø Target project benefits
            ø High level budget and spending authority.
          </Typography>
          <Typography>
            The three main uses of the project charter are:...  (MORE)
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
