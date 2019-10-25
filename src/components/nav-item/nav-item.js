import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

// Constants
import {colors, layout, spacing} from 'constants/styles'

const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: ${spacing.md} ${spacing.lg};
  min-height: ${layout.headerHeight};
  border-left: ${layout.subUnit} solid transparent;
  color: inherit;
  text-decoration: none;

  &.active {
    border-left-color: ${colors.accentRed};
    font-weight: bold;
  }

  &:active,
  &:focus,
  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }

  &:visited {
    color: inherit;
  }
`

export default NavItem
