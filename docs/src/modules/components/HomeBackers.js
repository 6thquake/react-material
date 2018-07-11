import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'react-material/styles';
import NoSSR from '@material-ui/docs/NoSSR';
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

  return (
    <div className={classes.root}>
      <NoSSR>
        <MarkdownElement
          className={classes.markdownElement}
          text={`
<h2>Supporting React-Material</h2>

React-Material is an MIT-licensed open source project.
It's an independent project with ongoing development made possible entirely
thanks to the support of these awesome [backers](/discover-more/backers).

<h3>Maintainers</h3>

#### via [Sixthquake](http://git.dev.sh.ctripcorp.com/sixthquake/react-material)

<table cellspacing="0" cellspadding="0">
  <tbody>
      ${[
        [
          {
            id: 'liujc',
            name: '刘继超',
          },
          {
            id: 'honggc',
            name: '洪国超',
          },
          {
            id: 'wgshao',
            name: '邵文广',
          },
          {
            id: 'liubz',
            name: '刘必洲',
          },
          {
            id: 'jxzhuang',
            name: '庄嘉祥',
          },
          {
            id: 'wmhuang',
            name: '黄伟民',
          },
        ],
        [
          {
            id: 'liyn',
            name: '李雅男',
          },
          {
            id: 'yh.tang',
            name: '汤雨欢',
          },
          {
            id: 'sy.tang',
            name: '唐思雨',
          },
          {
            id: 'slfan',
            name: '范世丽',
          },
          {
            id: 'zhangzhea',
            name: '张哲',
          },
        ],
      ].map(users => {
        return [
          '<tr>',
          users
            .map(
              user =>
                `
              <td align="center" valign="middle" style="text-align: center; padding: 16px;">
                <a href="http://git.dev.sh.ctripcorp.com/u/${
                  user.id
                }" rel="noopener" target="_blank">
                  <img
                    width="80"
                    height="80"
                    src="https://www.ctripteam.com/avatar/${user.id}?_dc=0"
                    alt="${user.name}"
                    title="${user.name}"
                  ><p>${user.name}</p></a>
              </td>
              `,
            )
            .join(''),
          '</tr>',
        ].join('');
      })}
  </tbody>
</table>

`}
        />
      </NoSSR>
    </div>
  );
}

HomeBackers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeBackers);
