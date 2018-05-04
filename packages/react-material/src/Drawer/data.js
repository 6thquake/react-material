export default [
  {
    name:'中国',
    children:[
      {
        name:'山东',
        children:[
          {
            name:'日照',
            children:[
              {
                name:'莒县',
                open:true
              }
            ]
          },
          {
            name:'青岛',
          }
        ]
      },
      {
        name:'上海',
        beforeChildren:function () {
          //子节点要不要显示
        },
        children:[
          {
            name:'长宁',
            children:[
              {
                name:'长宁支路'
              },
              {
               // id:'',
                // level:'', //私有属性
                name:'江苏路',
                onClick:'http',
                icon:'',      //icon
                onHandle:'',
                before:function () {
                //当前节点要不要显示
                },
                style:'',
                className:''
              }
            ]
          },
          {
            name:'普陀',
          }
        ]
      }
    ]
  },
  {
    name:'美国',
    children:[
      {
        name:'华盛顿',
      },
      {
        name:'纽约'
      }
    ]
  }
]
