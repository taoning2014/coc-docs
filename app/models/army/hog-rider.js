export const hogRider = {
  name: '野猪骑士',
  profile: {
    image: { src: '/coc-docs/assets/images/army/野猪骑士.png', alt: '野猪骑士' },
    info: {
      描述:
        'The Hog Rider is a rugged, dark-skinned man with a mohawk, riding a large hog. He is bare-chested, wearing only a brown leather loincloth, a red belt and a pair of leather sandals. He has two large golden wristbands and a gold earring. His weapon of choice is a large warhammer.',
    },
  },
  description:
    'The Hog Rider is a rugged, dark-skinned man with a mohawk, riding a large hog. He is bare-chested, wearing only a brown leather loincloth, a red belt and a pair of leather sandals. He has two large golden wristbands and a gold earring. His weapon of choice is a large warhammer.',
  data: [
    {
      优先攻击目标: '防御设施',
      攻击类型: '地面',
      占据人口: '5',
      训练时间: '45 秒',
      移动速度: '24',
      攻击速度: '1s',
      所需暗黑训练营等级: '2',
      攻击距离: '0.6 格',
    },
    {
      图示: [
        {
          type: 'img',
          url: '/coc-docs/assets/images/army/野猪骑士/野猪骑士-level-1-and-2.png',
          alt: '野猪骑士',
        },
        {
          type: 'img',
          url: '/coc-docs/assets/images/army/野猪骑士/野猪骑士-level-1-and-2.png',
          alt: '野猪骑士',
        },
        {
          type: 'img',
          url: '/coc-docs/assets/images/army/野猪骑士/野猪骑士-level-3-and-4.png',
          alt: '野猪骑士',
        },
        {
          type: 'img',
          url: '/coc-docs/assets/images/army/野猪骑士/野猪骑士-level-3-and-4.png',
          alt: '野猪骑士',
        },
        {
          type: 'img',
          url: '/coc-docs/assets/images/army/野猪骑士/野猪骑士-level-5.png',
          alt: '野猪骑士',
        },
        {
          type: 'img',
          url: '/coc-docs/assets/images/army/野猪骑士/野猪骑士-level-6.png',
          alt: '野猪骑士',
        },
        {
          type: 'img',
          url: '/coc-docs/assets/images/army/野猪骑士/野猪骑士-level-7.png',
          alt: '野猪骑士',
        },
      ],
      等级: [1, 2, 3, 4, 5, 6, 7],
      每秒伤害: [60, 70, 80, 92, 105, 118, 135],
      生命值: [270, 312, 360, 415, 480, 590, 700],
      '建造所需资源（黑油）': [40, 45, 52, 58, 65, 90, 115],
      '升级所需资源（黑油）': [0, 20000, 30000, 40000, 50000, 100000, 150000],
      所需试验室等级: [0, 5, 6, 6, 7, 8, 9],
      所需大本营等级: [7, 7, 8, 8, 9, 10, 11],
      '建造/升级时间': ['0', '5 天', '6 天', '8 天', '10 天', '12 天', '14 天'],
    },
  ],
};
