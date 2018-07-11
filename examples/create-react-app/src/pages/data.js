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
    name: '中国',
    selected: true,
    icon: <StarIcon />,
    children: [
      {
        name: '山东',
        selected: true,
        icon: <InboxIcon />,
        onHandle: () =>
          new Promise(function(resolve, reject) {
            setTimeout(function() {
              resolve('ok');
              console.log(1);
            }, 2000);
          }),
        children: [
          {
            name: '日照',
            icon: <DraftsIcon />,
            children: [
              {
                name: '莒县',
                icon: <SendIcon />,
                selected: true,
              },
            ],
          },
          {
            name: '青岛',
            icon: <MailIcon />,
          },
        ],
      },
      {
        name: '上海',
        icon: <ReportIcon />,
        beforeChildren: function() {
          //子节点要不要显示
          return true;
        },
        children: [
          {
            name: '长宁',
            icon: <MailIcon />,
            children: [
              {
                name: '长宁支路',
                icon: <InboxIcon />,
              },
              {
                // id:'',
                // level:'', //私有属性
                name: '江苏路',
                icon: <InboxIcon />,
                before: function() {
                  //当前节点要不要显示
                },
              },
            ],
          },
          {
            name: '普陀',
            icon: <InboxIcon />,
          },
        ],
      },
    ],
  },
  {
    name: '美国',
    icon: <DeleteIcon />,
    children: [
      {
        name: '华盛顿',
        icon: <MenuIcon />,
        children: [
          {
            name: '华盛顿',
            icon: <MenuIcon />,
          },
          {
            name: '纽约',
            icon: <MenuIcon />,
          },
        ],
      },
      {
        name: '纽约',
        icon: <MenuIcon />,
      },
    ],
  },
];
