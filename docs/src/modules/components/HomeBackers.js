import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@6thquake/react-material/styles';
import NoSsr from '@6thquake/react-material/NoSsr';
import MarkdownElement from '@material-ui/docs/MarkdownElement';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    minHeight: 600,
  },
  markdownElement: {
    maxWidth: theme.spacing.unit * 110,
    margin: 'auto',
    padding: theme.spacing.unit * 2,
  },
});

function HomeBackers(props) {
  const classes = props.classes;
  let backers = [
    [
      {
        name: '刘继超<lico.liu>',
        github: 'licoliu',
        twitter: 'lico_liu',
        weibo: '3608313977',
        flag: 'master',
        city: 'shanghai, China',
      },
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
        name: '邵文广<wg.shao>',
        github: 'GrumpyOnes',
        twitter: 'tomatocd',
        flag: 'developer',
        city: 'shanghai, China',
      },
      {
        name: '庄嘉祥<jx.zhuang>',
        github: 'JX-Zhuang',
        flag: 'developer',
        city: 'shanghai, China',
      },
    ],
    [
      {
        name: '李丹阳<dy.li>',
        github: 'JaneLee0324',
        twitter: 'Danyang0324',
        flag: 'developer',
        city: 'shanghai, China',
      },
      {
        name: '李雅男<yn.ya>',
        github: 'liyanangrace',
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
    ],
  ]
    .map(users => {
      return [
        '<tr>',
        users
          .map(
            user =>
              `<td align="center" valign="middle" style="text-align: center; padding: 16px;">
              <a href="https://github.com/${user.github}" rel="noopener" target="_blank">
                <img
                  width="80"
                  height="80"
                  src="https://github.com/${user.github}.png"
                  alt="${user.name}"
                  title="${user.name}"
                />
                <p>${user.name}</p>
              </a>
            </td>`,
          )
          .join(''),
        '</tr>',
      ].join('');
    })
    .join('');
  console.log(backers);
  return (
    <div className={classes.root}>
      <NoSsr>
        <MarkdownElement
          className={classes.markdownElement}
          text={`
<h2>Supporting React-Material</h2>

React-Material is an MIT-licensed open source project.
It's an independent project with ongoing development made possible entirely
thanks to the support of these awesome [backers](/discover-more/backers).

<h3>Maintainers</h3>

#### via [6thquake](https://github.com/6thquake/react-material)

<table cellspacing="0" cellspadding="0">
  <tbody>
      ${backers}
  </tbody>
</table>
`}
        />
      </NoSsr>
    </div>
  );
}

HomeBackers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeBackers);
