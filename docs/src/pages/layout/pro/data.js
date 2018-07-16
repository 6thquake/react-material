import React from 'react';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';
import MailIcon from '@material-ui/icons/Mail';
import ReportIcon from '@material-ui/icons/Report';
const routes = [
  {
    name: '中国',
    key: '1',
    children: [
      {
        name: '北京',
        key: '1-1',
        children: [
          {
            name: '朝阳区',
            key: '1-1-1',
          },
          {
            name: '丰台区',
            key: '1-1-2',
          },
          {
            name: '石景山区',
            key: '1-1-3',
          },
        ],
      },
      {
        name: '上海',
        key: '1-2',
        children: [
          {
            name: '长宁区',
            key: '1-2-1',
          },
          {
            name: '普陀区',
            key: '1-2-2',
          },
        ],
      },
      {
        name: '山东',
        key: '1-3',
        children: [
          {
            name: '济南',
            key: '1-3-1',
          },
          {
            name: '青岛',
            key: '1-3-2',
          },
          {
            name: '日照',
            key: '1-3-3',
          },
          {
            name: '威海',
            key: '1-3-4',
          },
        ],
      },
      {
        name: '浙江',
        key: '1-4',
        children: [
          {
            name: '杭州',
            key: '1-4-1',
          },
          {
            name: '宁波',
            key: '1-4-2',
          },
        ],
      },
      {
        name: '陕西',
        key: '1-5',
        children: [
          {
            name: '西安',
            key: '1-5-1',
          },
        ],
      },
    ],
    icon: <StarIcon />,
  },
  {
    name: '美国',
    key: '2',
    icon: <SendIcon />,
    children: [
      {
        name: '纽约市',
        key: '2-1',
        children: [
          {
            name: '曼哈顿区',
            key: '2-1-1',
          },
          {
            name: '皇后区',
            key: '2-1-2',
          },
          {
            name: '布鲁克林区',
            key: '2-1-3',
          },
          {
            name: '布朗克斯区',
            key: '2-1-4',
          },
        ],
      },
      {
        name: '洛杉矶',
        key: '2-2',
        children: [
          {
            name: '洛杉矶县',
            key: '2-2-1',
          },
          {
            name: '橙县',
            key: '2-2-2',
          },
          {
            name: '河滨县',
            key: '2-2-3',
          },
          {
            name: '圣伯纳丁县',
            key: '2-2-4',
          },
          {
            name: '文图拉县',
            key: '2-2-5',
          },
        ],
      },
    ],
  },
  {
    name: '俄罗斯',
    icon: <MailIcon />,
    key: '3',
    children: [
      {
        name: '莫斯科',
        key: '3-1',
        children: [
          {
            name: '中央行政区',
            key: '3-1-1',
          },
          {
            name: '北行政区',
            key: '3-1-2',
          },
          {
            name: '东北行政区',
            key: '3-1-3',
          },
          {
            name: '东南行政区',
            key: '3-1-4',
          },
          {
            name: '南行政区',
            key: '3-1-5',
          },
        ],
      },
    ],
  },
  {
    name: '英国',
    key: '4',
    icon: <ReportIcon />,
    children: [
      {
        name: '伦敦',
        key: '4-1',
      },
      {
        name: '伯明翰',
        key: '4-2',
      },
      {
        name: '曼切斯特',
        key: '4-3',
      },
      {
        name: '利兹',
        key: '4-4',
      },
      {
        name: '格拉斯哥',
        key: '4-5',
      },
      {
        name: '纽卡斯尔',
        key: '4-6',
      },
    ],
  },
  {
    name: '法国',
    icon: <InboxIcon />,
    key: '5',
  },
];
export { routes };
