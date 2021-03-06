export const archerQueen = {
  name: '弓箭女王',
  profile: {
    image: { src: '/coc-docs/assets/images/heros/弓箭女王.png', alt: '弓箭女王' },
    info: {
      技能名称: '皇室披风',
      有效半径: '2.5格',
      召唤兵种: '弓箭手',
      初始女王等级: '5',
      技能类型: '女王瞬间隐身',
      技能描述:
        '皇室披风：女皇隐身，回复一定生命值并连续发射大量毁灭性、高伤害弓箭。防御工事无法瞄准她，同时一群弓箭手会出现分散防御工事的打击！',
    },
  },
  description:
    'This graceful huntress is a master of destructive force, though modest in health. She snipes targets in her territory when defending, and can summon stealth and terrifying damage when attacking once her Royal Cloak ability is unlocked!',
  data: [
    {
      优先攻击目标: '无',
      攻击类型: '远程地面和空中',
      移动速度: '24',
      攻击速度: '0.75s',
      攻击距离: '3 格',
      警戒半径: '13 格',
      巡逻半径: '3 格',
      所需大本营等级: 9,
    },
    {
      技能等级: [1, 2, 3, 4, 5, 6, 7, 8],
      要求女皇等级: [5, 10, 15, 20, 25, 30, 35, 40],
      持续时间: [
        '3.6秒',
        '3.8秒',
        '4.0秒',
        '4.2秒',
        '4.4秒',
        '4.6秒',
        '4.8秒',
        '5.0秒',
      ],
      召唤数量: [5, 6, 7, 8, 9, 10, 11, 12],
      恢复体力: [150, 175, 200, 225, 250, 275, 300, 325],
      伤害提升: [300, 355, 416, 483, 557, 638, 725, 819],
      所需大本营等级: [9, 9, 9, 9, 9, 9, 10, 10],
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
        160,
        164,
        168,
        172,
        176,
        181,
        185,
        190,
        194,
        199,
        204,
        209,
        215,
        220,
        226,
        231,
        237,
        243,
        249,
        255,
        262,
        268,
        275,
        282,
        289,
        296,
        304,
        311,
        319,
        327,
        335,
        344,
        352,
        361,
        370,
        379,
        389,
        398,
        408,
        419,
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
        725,
        740,
        755,
        771,
        787,
        804,
        821,
        838,
        856,
        874,
        892,
        911,
        930,
        949,
        969,
        990,
        1010,
        1032,
        1053,
        1076,
        1098,
        1121,
        1145,
        1169,
        1193,
        1218,
        1244,
        1270,
        1297,
        1324,
        1352,
        1380,
        1409,
        1439,
        1469,
        1500,
        1532,
        1564,
        1597,
        1630,
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
        40000,
        22500,
        25000,
        27500,
        30000,
        32500,
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
        195000,
        200000,
      ],
      升级时间: [
        '0',
        '12h',
        '1d',
        '1d 12h',
        '2d',
        '2d 12h',
        '3d',
        '3d 12h',
        '4d',
        '4d 12h',
        '5d',
        '5d 12h',
        '6d',
        '6d 12h',
        '7d',
        '7d',
        '7d',
        '7d',
        '7d',
        '7d',
        '7d',
        '7d',
        '7d',
        '7d',
        '7d',
        '7d',
        '7d',
        '7d',
        '7d',
        '7d',
        '7d',
        '7d',
        '7d',
        '7d',
        '7d',
        '7d',
        '7d',
        '7d',
        '7d',
        '7d',
      ],
      所需大本营等级: [
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
