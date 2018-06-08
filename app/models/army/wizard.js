export const wizard = {
  name: '法师',
  profile: {
    image: { src: '/coc-docs/assets/images/army/法师.png', alt: '法师' },
    info: {
      描述:
        'The Wizard is a magical man that wears a hooded cloak, a leather belt with golden buckle and matching boots.',
    },
  },
  description:
    'The Wizard is a magical man that wears a hooded cloak, a leather belt with golden buckle and matching boots.',
  data: [
    {
      优先攻击目标: '无',
      攻击类型: '区域溅射 半径 0.3(地面和空中)',
      占据人口: '4',
      训练时间: '30 秒',
      移动速度: '16',
      攻击速度: '1.5 秒',
      所需训练营等级: '7',
      攻击距离: '3 格',
    },
    {
      图示: [
        {
          type: 'img',
          url: '/coc-docs/assets/images/army/法师/法师-level-1-and-2.png',
          alt: '法师',
        },
        {
          type: 'img',
          url: '/coc-docs/assets/images/army/法师/法师-level-1-and-2.png',
          alt: '法师',
        },
        {
          type: 'img',
          url: '/coc-docs/assets/images/army/法师/法师-level-3-and-4.png',
          alt: '法师',
        },
        {
          type: 'img',
          url: '/coc-docs/assets/images/army/法师/法师-level-3-and-4.png',
          alt: '法师',
        },
        {
          type: 'img',
          url: '/coc-docs/assets/images/army/法师/法师-level-5.png',
          alt: '法师',
        },
        {
          type: 'img',
          url: '/coc-docs/assets/images/army/法师/法师-level-6.png',
          alt: '法师',
        },
        {
          type: 'img',
          url: '/coc-docs/assets/images/army/法师/法师-level-7.png',
          alt: '法师',
        },
        {
          type: 'img',
          url: '/coc-docs/assets/images/army/法师/法师-level-8.png',
          alt: '法师',
        },
      ],
      等级: [1, 2, 3, 4, 5, 6, 7, 8],
      每秒伤害: [50, 70, 90, 125, 170, 185, 200, 215],
      每次伤害: [75, 105, 135, 187, 255, 278, 300, 323],
      生命值: [75, 90, 108, 130, 156, 175, 190, 210],
      建造所需资源: [1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000],
      升级所需资源: [
        0,
        150000,
        450000,
        1350000,
        2500000,
        5000000,
        7000000,
        9000000,
      ],
      所需试验室等级: [0, 3, 4, 5, 6, 7, 8, 9],
      所需大本营等级: [0, 5, 6, 7, 8, 9, 10, 11],
      '建造/升级时间': [
        '0',
        '1 天',
        '2 天',
        '3 天',
        '5 天',
        '9 天',
        '12 天',
        '14 天',
      ],
    },
  ],
};
