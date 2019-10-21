import React from 'react'

// Components
import Card from 'components/card'
import Tabs from 'components/tabs'
import TabPaneSC from 'components/tabs/tab-pane-sc'

const TabsPage = () => (
  <React.Fragment>
    <Card>
      <h2>Tabs Example</h2>
      <p>
        Keyboard accessible tabs component. Once tabbed to a tab item or tab
        pane, pressing left or right arrow keys will automatically cycle through
        the panes.
      </p>
    </Card>
    <Card>
      <Tabs>
        <TabPaneSC label="Tab 1" padding="lg">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            egestas condimentum aliquam. Donec nec libero magna. Nullam
            malesuada rhoncus purus vitae sagittis. Etiam bibendum venenatis
            nisi quis congue. Aenean porta, nulla et varius elementum, tortor
            tortor sagittis odio, id tincidunt lacus risus quis diam. Nunc id
            facilisis leo, at rhoncus nisl. Aenean tincidunt, sem vel commodo
            dapibus, lectus felis venenatis magna, quis mollis tellus dolor non
            augue. Morbi eget neque auctor diam luctus ullamcorper. Integer
            lacus risus, ullamcorper faucibus elementum et, accumsan eu turpis.
            Duis cursus ipsum sed tempor lobortis.
          </p>
        </TabPaneSC>
        <TabPaneSC label="Tab 2" padding="lg">
          <p>
            Donec tristique nulla a sem condimentum, id tincidunt nulla egestas.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Integer sollicitudin elementum dui, vitae
            efficitur nunc eleifend eget. Fusce sit amet ex ut nisl pulvinar
            feugiat. Aliquam in odio a lectus tincidunt aliquet. In tincidunt
            non ante non sollicitudin. In vitae purus nulla. In commodo arcu
            elit, nec semper orci sodales eget. Nunc nec velit rhoncus, gravida
            dolor eget, aliquet lorem. Nulla eget ultrices augue. Pellentesque
            ornare erat eu tristique ornare. Donec vitae vulputate orci, nec
            pulvinar dolor. Sed a efficitur lacus.
          </p>
        </TabPaneSC>
        <TabPaneSC label="Tab 3" padding="lg">
          <p>
            Sed posuere laoreet sem, id ultrices urna dignissim ut. Sed sit amet
            convallis ligula. Pellentesque aliquet felis quam, vitae volutpat
            enim accumsan et. Suspendisse nec libero et nisl imperdiet porta.
            Suspendisse fermentum velit ut egestas iaculis. Donec dignissim
            blandit lorem a semper. Suspendisse tellus nunc, accumsan a mauris
            at, ullamcorper lobortis quam. Aenean hendrerit tempor ligula, ac
            eleifend tellus laoreet ut. Nunc a nisi sed urna viverra accumsan.
            Aliquam sem nisl, aliquet ut massa vel, hendrerit facilisis eros.
            Suspendisse vitae convallis eros. Mauris quis vulputate nisi. Aenean
            luctus, nisi at feugiat sollicitudin, leo est tincidunt massa, quis
            vehicula massa elit vel libero. Ut efficitur augue vel orci molestie
            convallis.
          </p>
        </TabPaneSC>
      </Tabs>
    </Card>
  </React.Fragment>
)

export default TabsPage
