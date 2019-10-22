import React from 'react'

// Components
import Button from 'components/button'
import FlexBox from 'components/flex-box'
import FlexItem from 'components/flex-item'
import MaterialIcon from 'components/material-icon'

// Utils
import {normalizeLabel} from 'utils/misc'

const Accordion = ({children}) => (
  <div>
    {React.Children.map(children, (child, index) => (
      <div key={child.props.label}>
        <h3>
          <Button
            fullWidth
            aria-expanded="true"
            aria-controls={`${normalizeLabel(child.props.label)}-content`}
            id={`${normalizeLabel(child.props.label)}`}
          >
            <FlexBox alignItems="center">
              <FlexItem>{child.props.label}</FlexItem>

              <FlexItem marginLeft="md" flex="0 0 auto">
                <MaterialIcon charCode="e5c5" />
              </FlexItem>
            </FlexBox>
          </Button>
        </h3>

        <div
          id={`${normalizeLabel(child.props.label)}-content`}
          role="region"
          aria-labelledby={`${normalizeLabel(child.props.label)}`}
        >
          {child.props.children}
        </div>
      </div>
    ))}
  </div>
)

export default Accordion
