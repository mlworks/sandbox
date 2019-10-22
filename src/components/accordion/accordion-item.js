import React, {useState} from 'react'
import PropTypes from 'prop-types'
import AnimateHeight from 'react-animate-height'

// Components
import Button from 'components/button'
import FlexBox from 'components/flex-box'
import FlexItem from 'components/flex-item'
import MaterialIcon from 'components/material-icon'

// SC
import AccordionHeaderSC from './accordion-header-sc'
import AccordionItemSC from './accordion-item-sc'
import AccordionPanelSC from './accordion-panel-sc'

// Utils
import {normalizeLabel} from 'utils/misc'

const AccordionItem = React.forwardRef(({children, label, onKeyDown}, ref) => {
  const [isOpen, toggleItem] = useState(false)

  return (
    <AccordionItemSC>
      <AccordionHeaderSC>
        <Button
          aria-expanded={isOpen}
          aria-controls={`${normalizeLabel(label)}-content`}
          fullWidth
          id={`${normalizeLabel(label)}`}
          ref={ref}
          onClick={() => toggleItem(!isOpen)}
          onKeyDown={onKeyDown}
        >
          <FlexBox alignItems="center">
            <FlexItem>{label}</FlexItem>

            <FlexItem marginLeft="md" flex="0 0 auto">
              <MaterialIcon charCode={isOpen ? 'e15b' : 'e145'} />
            </FlexItem>
          </FlexBox>
        </Button>
      </AccordionHeaderSC>

      <AnimateHeight
        duration={250}
        easing="ease-out"
        height={isOpen ? 'auto' : 0}
      >
        <AccordionPanelSC
          id={`${normalizeLabel(label)}-content`}
          role="region"
          aria-labelledby={`${normalizeLabel(label)}`}
        >
          {children}
        </AccordionPanelSC>
      </AnimateHeight>
    </AccordionItemSC>
  )
})

AccordionItem.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  onKeyDown: PropTypes.func,
}

export default AccordionItem
