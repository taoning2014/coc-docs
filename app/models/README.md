# README

## Data format for the table

1, Regular format, key is string, value is either number, string or an array with same type

```json
{
  射程: '7',
  攻击速度: '1.3s',
  伤害类型: '溅射伤害 - 半径1',
  攻击单位类型: '地面和空中',
  占地面积: '3 * 3',
}
```

2, With image, key is string, value is an object with type, url and alt

```json
{
  图示: [
      {
        type: 'img',
        url: '/coc-docs/assets/images/defence/法师塔/法师塔-level-1.png',
        alt: '法师塔 level 1',
      },
    ]
}
```