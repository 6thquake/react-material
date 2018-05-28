import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';
import MailIcon from '@material-ui/icons/Mail';
import DeleteIcon from '@material-ui/icons/Delete';
import ReportIcon from '@material-ui/icons/Report';

export default [
  {
    //path: '/',
    component: 'App',
    icon: <StarIcon/>,
    indexRoute: {component: 'Dashboard'},
    childRoutes: [
      {
        //path: 'about',
        icon: <SendIcon/>,
        component: 'About'
      },
      {
        path: 'inbox11',
        component: 'Inbox',
        icon: <ReportIcon/>,
        // beforeChildren:function () {
        //   return false
        // },

        childRoutes: [
          {
            path: '/messages/123',
            icon:<MailIcon />,
            component: 'Message',
            before:function () {
              return false
            },
          },
          {
            icon:<MailIcon />,
            component: 'Message',
          },
          {
            path: '/messages/222',
            component: 'DeleteIcon',
            icon: <DeleteIcon/>,
            onEnter: function (nextState, replaceState) {
              replaceState(null, '/messages/' + nextState.params.id)
            }
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: 'App',
    icon: <StarIcon/>,
    indexRoute: {component: 'Dashboard'},
    childRoutes: [
      {
        path: 'about',
        icon: <SendIcon/>,
        component: 'About'
      },
      {
        path: 'inbox',
        component: 'Inbox',
        icon: <ReportIcon/>,
        childRoutes: [
          {
            path: '/messages/:id',
            icon:<MailIcon />,
            component: 'Message'
          },
          {
            path: 'messages/:id',
            component: 'DeleteIcon',
            icon: <DeleteIcon/>,
            onEnter: function (nextState, replaceState) {
              replaceState(null, '/messages/' + nextState.params.id)
            }
          }
        ]
      }
    ]
  }
]
