import React, {useState} from 'react'
import PropTypes from 'prop-types'

// Components
import Button from 'components/button'
import FlexBox from 'components/flex-box'
import FlexItem from 'components/flex-item'
import MaterialIcon from 'components/material-icon'

// Utils
import {normalizeLabel} from 'utils/misc'

const AccordionItem = React.forwardRef(({children, label, onKeyDown}, ref) => {
  const [isOpen, toggleItem] = useState(false)

  return (
    <div>
      <h3>
        <Button
          aria-expanded={isOpen}
          aria-controls={`${normalizeLabel(label)}-content`}
          id={`${normalizeLabel(label)}`}
          ref={ref}
          onClick={() => toggleItem(!isOpen)}
          onKeyDown={onKeyDown}
        >
          <FlexBox alignItems="center">
            <FlexItem>{label}</FlexItem>

            <FlexItem marginLeft="md" flex="0 0 auto">
              <MaterialIcon charCode={isOpen ? 'e5c7' : 'e5c5'} />
            </FlexItem>
          </FlexBox>
        </Button>
      </h3>

      <div
        id={`${normalizeLabel(label)}-content`}
        role="region"
        aria-labelledby={`${normalizeLabel(label)}`}
        hidden={!isOpen}
      >
        {children}
      </div>
    </div>
  )
})

AccordionItem.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  onKeyDown: PropTypes.func,
}

export default AccordionItem
