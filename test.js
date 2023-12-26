const SIZE_PROPS = [
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  "marginTop",
  "marginLeft",
  "marginRight",
  "marginBottom",
  "paddingLeft",
  "paddingTop",
  "paddingRight",
  "paddingBottom",
  "fontSize",
  "lineHeight",
  "margin-top",
  "margin-left",
  "margin-right",
  "margin-bottom",
  "padding-left",
  "padding-top",
  "padding-right",
  "padding-bottom",
  "font-size",
  "line-height",
];

 const parseUnit = (value) => {
  if (typeof value === "number") return `${+value / 100}rem`;
  if (typeof value === "string") {
    return /^[\d-]*$/.test(value) ? `${+value / 100}rem` : value;
  }
  console.warning("Illegal value:", value);
  return `${parseInt(value) || 0}rem`;
};
/**
 * 属性值处理
 */
const valueHandler = SIZE_PROPS.reduce((ret, value) => {
  ret[value] = parseUnit;
  return ret;
}, {});

 const calculateStyle = (style) => {
  const _style = {
    width: 100,
    margin: 100
  }
  const { small = {}, ...rest } = _style;
  // 如果是小屏，小屏幕的属性覆盖
  return Object.entries(rest).reduce((ret, [prop, value]) => {
    ret[prop] = valueHandler[prop] ? valueHandler[prop](value) : value;
    return ret;
  }, {});
};
console.log(calculateStyle());