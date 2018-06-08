export const wizardTower = {
  name: '法师塔',
  profile: {
    image: { src: '/coc-docs/assets/images/defence/法师塔.png', alt: '法师塔' },
    info: {
      描述:
        'The Wizard Tower is a spiraling, cone-shaped tower of crystalline rock that has a Wizard on the top of it. It is capable of inflicting powerful splash damage to both Ground and Air Units, though it is limited to a relatively short range.',
    },
    infoTable: {
      content: [
        ['大本营等级', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        ['可建造数量上限', 0, 0, 0, 0, 1, 2, 2, 3, 4, 4, 5],
      ],
    },
  },
  description:
    'The Wizard Tower is a spiraling, cone-shaped tower of crystalline rock that has a Wizard on the top of it. It is capable of inflicting powerful splash damage to both Ground and Air Units, though it is limited to a relatively short range.',
  data: [
    {
      射程: '7',
      攻击速度: '1.3s',
      伤害类型: '溅射伤害 - 半径1',
      攻击单位类型: '地面和空中',
      占地面积: '3 * 3',
    },

    {
      图示: [
        {
          type: 'img',
          url: '/coc-docs/assets/images/defence/法师塔/法师塔-level-1.png',
          alt: '法师塔 level 1',
        },
        {
          type: 'img',
          url: '/coc-docs/assets/images/defence/法师塔/法师塔-level-2.png',
          alt: '法师塔 level 2',
        },
        {
          type: 'img',
          url: '/coc-docs/assets/images/defence/法师塔/法师塔-level-3.png',
          alt: '法师塔 level 3',
        },
        {
          type: 'img',
          url: '/coc-docs/assets/images/defence/法师塔/法师塔-level-4.png',
          alt: '法师塔 level 4',
        },
        {
          type: 'img',
          url: '/coc-docs/assets/images/defence/法师塔/法师塔-level-5.png',
          alt: '法师塔 level 5',
        },
        {
          type: 'img',
          url: '/coc-docs/assets/images/defence/法师塔/法师塔-level-6.png',
          alt: '法师塔 level 6',
        },
        {
          type: 'img',
          url: '/coc-docs/assets/images/defence/法师塔/法师塔-level-7.png',
          alt: '法师塔 level 7',
        },
        {
          type: 'img',
          url: '/coc-docs/assets/images/defence/法师塔/法师塔-level-8.jpg',
          alt: '法师塔 level 8',
        },
        {
          type: 'img',
          url: '/coc-docs/assets/images/defence/法师塔/法师塔-level-9.png',
          alt: '法师塔 level 9',
        },
        {
          type: 'img',
          url: '/coc-docs/assets/images/defence/法师塔/法师塔-level-10.png',
          alt: '师塔- evel- 0',
        },
      ],
      等级: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      每秒伤害: [11, 13, 16, 20, 24, 32, 40, 48, 54, 62],
      每次攻击伤害: [14, 17, 21, 26, 31, 42, 52, 62, 71, 81],
      生命值: [620, 650, 680, 730, 840, 960, 1200, 1440, 1680, 2000],
      建造所需资源: [
        180000,
        360000,
        700000,
        1200000,
        1700000,
        2200000,
        3700000,
        5200000,
        7200000,
        9200000,
      ],
      '建造/升级时间': [
        '12 小时',
        '1 天',
        '2 天',
        '3 天',
        '4 天',
        '5 天',
        '6 天',
        '8 天',
        '10 天',
        '12 天',
      ],
      所需大本营等级: [5, 5, 6, 7, 8, 8, 9, 10, 10, 11],
    },
  ],
};
