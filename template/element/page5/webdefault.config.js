export default {
  name: 'page5',
  version: '0.0.1',
  page5: {
    template: require('raw-js!./Page'),
    dataSource: [
      {
        key: 'text',
        name: '文字区块',
        value: {
          title: {
            key: 'title',
            name: '标题',
            value: 'PAGE TITLE',
          },
          content: {
            key: 'content',
            name: '内容',
            value: 'Demo source from the network, please upload pictures to replace. ' +
            'Demo source from the network, please upload pictures to replace. ' +
            'Demo source from the network, please upload pictures to replace.',
          },
        },
      },
      {
        key: 'img1',
        name: '图片区块1',
        value: {
          img: {
            key: 'img',
            name: '图片',
            size: '150*150',
            value: 'https://os.alipayobjects.com/rmsportal/eHBUBcXxqzLRitB.png',
          },
          title: {
            key: 'title',
            name: '标题',
            value: 'SLIDERS',
          },
          content: {
            key: 'content',
            name: '内容',
            value: 'Image source from the network Demo, please upload pictures to replace.' +
            ' Image source from the network Demo',
          },
        },
      },
      {
        key: 'img2',
        name: '图片区块2',
        value: {
          img: {
            key: 'img',
            name: '图片',
            size: '150*150',
            value: 'https://os.alipayobjects.com/rmsportal/eHBUBcXxqzLRitB.png',
          },
          title: {
            key: 'title',
            name: '标题',
            value: 'SLIDERS',
          },
          content: {
            key: 'content',
            name: '内容',
            value: 'Image source from the network Demo, please upload pictures to replace.' +
            ' Image source from the network Demo',
          },
        },
      },
      {
        key: 'img3',
        name: '图片区块3',
        value: {
          img: {
            key: 'img',
            name: '图片',
            size: '150*150',
            value: 'https://os.alipayobjects.com/rmsportal/eHBUBcXxqzLRitB.png',
          },
          title: {
            key: 'title',
            name: '标题',
            value: 'SLIDERS',
          },
          content: {
            key: 'content',
            name: '内容',
            value: 'Image source from the network Demo, please upload pictures to replace.' +
            ' Image source from the network Demo',
          },
        },
      },
    ],
    variables: [
      {
        key: 'type',
        name: '样式',
        value: 'bottomPosition',
      },
      {
        key: 'ease',
        name: '缓动',
        value: 'easeInOutQuart',
      },
      {
        key: 'duration',
        name: '时长',
        value: 450,
      },
      {
        key: 'interval',
        name: '间隔',
        value: 100,
      },
      {
        key: 'delay',
        name: '延迟',
        value: 0,
      },
    ],
  },
};