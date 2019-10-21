export const unit = 8

export const layout = {
  subUnit: `${unit / 2}px`,
  tapSize: `${unit * 6}px`,
  headerHeight: `${unit * 6}px`,
}

export const spacing = {
  sm: `${unit / 2}px`,
  md: `${unit}px`,
  lg: `${unit * 2}px`,
  xlg: `${unit * 3}px`,
}

export const fontSizes = {
  huge: `${unit * 2.5}px`, // 20px
  bigger: `${unit * 2.25}px`, // 18px
  big: `${unit * 2}px`, // 16px
  normal: `${unit * 1.75}px`, // 14px
  small: `${unit * 1.5}px`, // 12px
}

export const zIndex = {
  z1: 1,
  z2: 10,
  z3: 100,
  z4: 1000,
}

export const colors = {
  accentRed: '#bc1515',
  bodyColor: '#ececec',
}

export const neutrals = {
  neutral00: '#fff',
  neutral10: '#fafafa',
  neutral20: '#dfdfdf',
  neutral30: '#d4d4d4',
  neutral40: '#2c2c2c',
  neutral50: '#000',
}

export const border = {
  color: neutrals.neutral30,
  radius: layout.subUnit,
  shorthand: `1px solid ${neutrals.neutral30}`,
}
