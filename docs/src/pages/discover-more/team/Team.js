import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@6thquake/react-material/styles';
import CardMedia from '@6thquake/react-material/CardMedia';
import Grid from '@6thquake/react-material/Grid';
import Paper from '@6thquake/react-material/Paper';
import Typography from '@6thquake/react-material/Typography';
import IconButton from '@6thquake/react-material/IconButton';
import Github from '@material-ui/docs/svgIcons/GitHub';
import Twitter from '@material-ui/docs/svgIcons/Twitter';
import Weibo from '../../../svgIcons/Weibo';

const members = [
  {
    name: '洪国超<gc.hong>',
    github: 'Hahet',
    flag: 'developer',
    city: 'shanghai, China',
  },
  {
    name: '黄伟民<wm.huang>',
    github: 'tykdn',
    flag: 'developer',
    city: 'shanghai, China',
  },
  {
    name: '刘必洲<bz.liu>',
    github: 'HelloLove',
    flag: 'developer',
    city: 'shanghai, China',
  },
  {
    name: '李丹阳<dy.li>',
    github: 'JaneLee0324',
    twitter: 'Danyang0324',
    flag: 'developer',
    city: 'shanghai, China',
  },
  {
    name: '刘继超<lico.liu>',
    github: 'licoliu',
    twitter: 'lico_liu',
    weibo: '3608313977',
    flag: 'master',
    city: 'shanghai, China',
  },
  {
    name: '李雅男<yn.ya>',
    github: 'liyanangrace',
    flag: 'developer',
    city: 'shanghai, China',
  },
  {
    name: '邵文广<wg.shao>',
    github: 'GrumpyOnes',
    twitter: 'tomatocd',
    flag: 'developer',
    city: 'shanghai, China',
  },
  {
    name: '唐可珂<kk.tang>',
    github: 'vvke',
    flag: 'developer',
    city: 'shanghai, China',
  },
  {
    name: '唐思雨<sy.tang>',
    github: 'atangsy',
    flag: 'developer',
    city: 'shanghai, China',
  },
  {
    name: '汤雨欢<yh.tang>',
    github: 'tangyuhuan',
    twitter: 'yuhuan13235884',
    flag: 'developer',
    city: 'shanghai, China',
  },
  {
    name: '袁锁云<sy.yuan>',
    github: 'everyapple',
    flag: 'developer',
    city: 'shanghai, China',
  },
  {
    name: '庄嘉祥<jx.zhuang>',
    github: 'JX-Zhuang',
    weibo: '2253567214',
    flag: 'developer',
    city: 'shanghai, China',
  },
];

const styles = theme => ({
  details: {
    display: 'flex',
    flexDirection: 'column',
    margin: `${theme.spacing.unit}px 0`,
  },
  cover: {
    width: theme.spacing.unit * 10,
    height: theme.spacing.unit * 10,
    margin: theme.spacing.unit * 2,
    borderRadius: '50%',
    flexShrink: 0,
    backgroundColor: theme.palette.background.default,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    margin: theme.spacing.unit,
    fontSize: 18,
    width: 22,
    height: 22,
  },
});

function Team(props) {
  const { classes } = props;
  return (
    <Grid container spacing={16}>
      {members.map(member => (
        <Grid key={member.name} item xs={12} md={6}>
          <Paper>
            <Grid container>
              <Grid item>
                <CardMedia
                  className={classes.cover}
                  image={`https://github.com/${member.github}.png`}
                  title="Picture"
                />
              </Grid>
              <Grid item>
                <div className={classes.details}>
                  <Typography variant="headline">{member.name}</Typography>
                  <Typography variant="subheading" color="textSecondary">
                    {member.flag}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {member.city}
                  </Typography>
                  <div className={classes.controls}>
                    {member.github && (
                      <IconButton
                        aria-label="github"
                        component="a"
                        href={`https://github.com/${member.github}`}
                        className={classes.icon}
                      >
                        <Github />
                      </IconButton>
                    )}
                    {member.twitter && (
                      <IconButton
                        aria-label="twitter"
                        component="a"
                        href={`https://twitter.com/${member.twitter}`}
                        className={classes.icon}
                      >
                        <Twitter />
                      </IconButton>
                    )}
                    {member.weibo && (
                      <IconButton
                        aria-label="twitter"
                        component="a"
                        href={`https://weibo.com/${member.weibo}`}
                        className={classes.icon}
                      >
                        <Weibo />
                      </IconButton>
                    )}
                  </div>
                </div>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}

Team.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Team);
