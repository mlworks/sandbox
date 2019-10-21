import React, {useEffect, useState} from 'react'

import TabButton from './tab-button'
import TabPane from './tab-pane'

const sanitizeLabel = label => label.replace(/ /g, '-').toLowerCase()

const Tabs = ({children}) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div>
      <div role="tablist">
        {React.Children.map(children, (child, index) => (
          <TabButton
            id={`${sanitizeLabel(child.props.label)}`}
            isActive={index === activeTab}
            label={child.props.label}
            targetId={`${sanitizeLabel(child.props.label)}-tab`}
            onClick={() => setActiveTab(index)}
          />
        ))}
      </div>
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          isActive: index === activeTab,
          id: `${sanitizeLabel(child.props.label)}-tab`,
          labelledBy: `${sanitizeLabel(child.props.label)}`,
        })
      )}
    </div>
  )
}

export default Tabs
