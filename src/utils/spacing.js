import {spacing} from 'constants/styles'

const setSpacingValue = unit => spacing[unit] || unit || 0

const calcSpacingValues = ({custom, top, right, bottom, left}) => {
  if (custom) {
    return custom
      .split(' ')
      .map(unit => setSpacingValue(unit))
      .join(' ')
  }

  const topDirection = setSpacingValue(top)
  const rightDirection = setSpacingValue(right)
  const bottomDirection = setSpacingValue(bottom)
  const leftDirection = setSpacingValue(left)

  return `${topDirection} ${rightDirection} ${bottomDirection} ${leftDirection}`
}

export const paddingSpacing = ({
  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
}) =>
  calcSpacingValues({
    custom: padding,
    top: paddingTop,
    right: paddingRight,
    bottom: paddingBottom,
    left: paddingLeft,
  })

export const marginSpacing = ({
  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
}) =>
  calcSpacingValues({
    custom: margin,
    top: marginTop,
    right: marginRight,
    bottom: marginBottom,
    left: marginLeft,
  })
