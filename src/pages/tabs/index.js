import React from 'react'

// Components
import Tabs from 'components/tabs'
import TabPane from 'components/tabs/tab-pane'

const TabsPage = () => (
  <Tabs>
    <TabPane label="Tab 1">content 1</TabPane>
    <TabPane label="Tab 2">content 2</TabPane>
    <TabPane label="Tab 3">content 3</TabPane>
  </Tabs>
)

export default TabsPage
