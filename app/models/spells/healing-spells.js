export const healingSpells = {
  name: '疗伤法术',
  profile: {
    image: { src: '/coc-docs/assets/images/spells/疗伤法术.png', alt: '疗伤法术' },
    info: {
      描述:
        'The Healing Spell is unlocked at Level 2 Spell Factory. It provides a medium ranged radius with yellow shades of glowing color representing the healing effect. Similar effect can be seen while the Healer is healing.',
    },
  },
  description:
    'The Healing Spell is unlocked at Level 2 Spell Factory. It provides a medium ranged radius with yellow shades of glowing color representing the healing effect. Similar effect can be seen while the Healer is healing.',
  data: [
    {
      半径: '5格',
      随机半径: '2',
      治疗次数: '40',
      攻击间隔: '0.3 秒',
      制作时间: '6 分钟',
      所需法术工厂等级: '2',
    },
    {
      等级: [1, 2, 3, 4, 5, 6, 7],
      总治疗: [600, 800, 1000, 1200, 1400, 1600, 1800],
      每下治疗补血量: [10, 15, 20, 25, 30, 40, 45],
      建造所需资源: [15000, 16500, 18000, 19000, 21000, 23000, 25000],
      升级所需资源: [0, 300000, 600000, 1200000, 2000000, 4000000, 6000000],
      升级所需时间: ['0', '1 天', '2 天', '3 天', '5 天', '7 天', '10 天'],
      所需试验室等级: [0, 2, 4, 5, 6, 7, 8],
      所需大本营等级: [6, 6, 6, 7, 8, 9, 10],
    },
  ],
};
