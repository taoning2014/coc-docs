export const barbarianKing = {
  name: '野蛮人之王',
  profile: {
    image: { src: '/assets/images/heros/野蛮人之王.png', alt: '野蛮人之王' },
    info: {
      技能名称: '铁拳出击',
      有效时间: '10秒',
      有效半径: '2.5格',
      召唤兵种: '野蛮人',
      初始国王等级: '5',
      技能类型: '狂暴（速度伤害提升）',
      技能描述:
        '铁拳出击：能大量恢复生命值，短暂提高自己和周围野蛮人的速度和攻击力。',
    },
  },
  description:
    'This colossal menace soaks up huge amounts of damage and bashes anything in his path. He guards his territory fiercely when defending, and can launch into a devastating rage when attacking once his Iron Fist ability is unlocked!',
  data: [
    {
      优先攻击目标: '无',
      攻击类型: '地面',
      移动速度: '16',
      攻击速度: '1.2s',
      攻击距离: '3 格',
      警戒半径: '12 格',
    },
    {
      技能等级: [1, 2, 3, 4, 5, 6, 7, 8],
      要求国王等级: [5, 10, 15, 20, 25, 30, 35, 40],
      增加速度: [18, 19, 20, 21, 22, 23, 24, 25],
      伤害提升: [56, 101, 147, 195, 245, 298, 354, 414],
      召唤数量: [6, 8, 10, 12, 14, 16, 18, 20],
      恢复体力: [500, 620, 752, 899, 1063, 1247, 1455, 1692],
      所需大本营等级: [7, 8, 9, 9, 9, 9, 10, 10],
    },
    {
      等级: [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
        31,
        32,
        33,
        34,
        35,
        36,
        37,
        38,
        39,
        40,
      ],
      每秒伤害: [
        120,
        122,
        124,
        127,
        129,
        132,
        135,
        137,
        140,
        143,
        146,
        149,
        152,
        155,
        158,
        161,
        164,
        168,
        171,
        174,
        178,
        181,
        185,
        189,
        193,
        196,
        200,
        204,
        208,
        213,
        217,
        221,
        226,
        230,
        235,
        239,
        244,
        249,
        254,
        259,
      ],
      技能等级: [
        0,
        0,
        0,
        0,
        1,
        1,
        1,
        1,
        1,
        2,
        2,
        2,
        2,
        2,
        3,
        3,
        3,
        3,
        3,
        4,
        4,
        4,
        4,
        4,
        5,
        5,
        5,
        5,
        5,
        6,
        6,
        6,
        6,
        6,
        7,
        7,
        7,
        7,
        7,
        8,
      ],
      生命值: [
        1700,
        1742,
        1786,
        1830,
        1876,
        1923,
        1971,
        2020,
        2071,
        2123,
        2176,
        2230,
        2286,
        2343,
        2402,
        2462,
        2523,
        2586,
        2651,
        2717,
        2785,
        2855,
        2926,
        2999,
        3074,
        3151,
        3230,
        3311,
        3394,
        3478,
        3565,
        3655,
        3746,
        3840,
        3936,
        4034,
        4135,
        4238,
        4344,
        4453,
      ],
      重生时间: [
        '30分钟',
        '32分钟',
        '34分钟',
        '36分钟',
        '38分钟',
        '40分钟',
        '42分钟',
        '44分钟',
        '46分钟',
        '48分钟',
        '50分钟',
        '52分钟',
        '54分钟',
        '56分钟',
        '58分钟',
        '60分钟',
        '62分钟',
        '64分钟',
        '66分钟',
        '68分钟',
        '70分钟',
        '72分钟',
        '74分钟',
        '76分钟',
        '78分钟',
        '80分钟',
        '82分钟',
        '84分钟',
        '86分钟',
        '88分钟',
        '90分钟',
        '92分钟',
        '94分钟',
        '96分钟',
        '98分钟',
        '100分钟',
        '102分钟',
        '104分钟',
        '106分钟',
        '108分钟',
      ],
      升级所需资源: [
        10000,
        12500,
        15000,
        17500,
        20000,
        22500,
        25000,
        30000,
        35000,
        40000,
        45000,
        50000,
        55000,
        60000,
        65000,
        70000,
        75000,
        80000,
        85000,
        90000,
        95000,
        100000,
        105000,
        110000,
        115000,
        120000,
        125000,
        130000,
        135000,
        140000,
        145000,
        150000,
        155000,
        160000,
        165000,
        170000,
        175000,
        180000,
        185000,
        190000,
      ],
      升级时间: [
        '0',
        '12小时',
        '1天',
        '1天12小时',
        '2天',
        '2天12小时',
        '3天',
        '3天12小时',
        '4天',
        '4天12小时',
        '5天',
        '5天12小时',
        '6天',
        '6天12小时',
        '7天',
        '7天',
        '7天',
        '7天',
        '7天',
        '7天',
        '7天',
        '7天',
        '7天',
        '7天',
        '7天',
        '7天',
        '7天',
        '7天',
        '7天',
        '7天',
        '7天',
        '7天',
        '7天',
        '7天',
        '7天',
        '7天',
        '7天',
        '7天',
        '7天',
        '7天',
      ],
      所需大本营等级: [
        7,
        7,
        7,
        7,
        7,
        8,
        8,
        8,
        8,
        8,
        9,
        9,
        9,
        9,
        9,
        9,
        9,
        9,
        9,
        9,
        9,
        9,
        9,
        9,
        9,
        9,
        9,
        9,
        9,
        9,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
      ],
    },
  ],
};
