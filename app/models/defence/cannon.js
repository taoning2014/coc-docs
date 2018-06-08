export const cannon = {
  name: '加农炮',
  profile: {
    image: { src: '/coc-docs/assets/images/defence/加农炮.png', alt: '加农炮' },
    info: {
      描述:
        'The Cannon is a single target defense that deals moderate damage. Cannons are both cheap and quick to upgrade at lower levels.',
    },
    infoTable: {
      content: [
        ['大本营等级', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        ['可建造数量上限', 2, 2, 2, 2, 3, 3, 5, 5, 5, 6],
      ],
    },
  },
  description:
    'The Cannon is a single target defense that deals moderate damage. Cannons are both cheap and quick to upgrade at lower levels.',
  data: [
    {
      射程: '9',
      攻击速度: '0.8s',
      伤害类型: '单体伤害',
      攻击单位类型: '地面',
      占地面积: '3 * 3',
    },
    {
      优先攻击目标: '无',
      攻击类型: '地面',
      移动速度: '16',
      攻击速度: '1.2s',
      攻击距离: '3 格',
      警戒半径: '12 格',
    },
    {
      等级: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
      每秒伤害: [9, 11, 15, 19, 25, 31, 40, 48, 56, 65, 75, 86, 98],
      每次攻击伤害: [7, 9, 12, 15, 20, 25, 32, 38, 45, 52, 60, 69, 78],
      生命值: [
        420,
        470,
        520,
        570,
        620,
        670,
        720,
        770,
        830,
        890,
        970,
        1070,
        1170,
      ],
      建造所需资源: [
        250,
        1000,
        4000,
        16000,
        50000,
        100000,
        200000,
        400000,
        800000,
        1600000,
        3200000,
        6400000,
        7500000,
      ],
      '建造/升级时间': [
        '1分钟',
        '15分钟',
        '45分钟',
        '2小时',
        '6小时',
        '12小时',
        '1天',
        '2天',
        '3天',
        '4天',
        '5天',
        '6天',
        '7天',
      ],
      获得经验: [7, 17, 51, 84, 146, 207, 293, 415, 509, 587, 657, 720, 777],
      所需大本营等级: [1, 1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 10, 10],
    },
  ],
};
