import React from 'react'

// Components
import Accordion from 'components/accordion'
import AccordionItem from 'components/accordion/accordion-item'
import Card from 'components/card'
import FormExample from 'components/form-example'
import Tabs from 'components/tabs'
import TabPaneSC from 'components/tabs/tab-pane-sc'

const AccordionPage = () => (
  <React.Fragment>
    <Card>
      <h2>Accordion Example</h2>
      <p>
        Tab to an accordion header and try up/down arrow keys. You will cycle
        through the headers.
      </p>
      <p>
        Tapping on space/enter key while focused on the header will open up the
        accordion item. You can then tab to focus elements in the content if
        there are focusable element(s).
      </p>
    </Card>
    <Card>
      <Accordion>
        <AccordionItem label="Accordion Item 1">
          <Tabs>
            <TabPaneSC label="Tab 1" padding="lg">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                egestas condimentum aliquam. Donec nec libero magna. Nullam
                malesuada rhoncus purus vitae sagittis. Etiam bibendum venenatis
                nisi quis congue. Aenean porta, nulla et varius elementum,
                tortor tortor sagittis odio, id tincidunt lacus risus quis diam.
                Nunc id facilisis leo, at rhoncus nisl. Aenean tincidunt, sem
                vel commodo dapibus, lectus felis venenatis magna, quis mollis
                tellus dolor non augue. Morbi eget neque auctor diam luctus
                ullamcorper. Integer lacus risus, ullamcorper faucibus elementum
                et, accumsan eu turpis. Duis cursus ipsum sed tempor lobortis.
              </p>
            </TabPaneSC>
            <TabPaneSC label="Tab 2" padding="lg">
              <p>
                Donec tristique nulla a sem condimentum, id tincidunt nulla
                egestas. Pellentesque habitant morbi tristique senectus et netus
                et malesuada fames ac turpis egestas. Integer sollicitudin
                elementum dui, vitae efficitur nunc eleifend eget. Fusce sit
                amet ex ut nisl pulvinar feugiat. Aliquam in odio a lectus
                tincidunt aliquet. In tincidunt non ante non sollicitudin. In
                vitae purus nulla. In commodo arcu elit, nec semper orci sodales
                eget. Nunc nec velit rhoncus, gravida dolor eget, aliquet lorem.
                Nulla eget ultrices augue. Pellentesque ornare erat eu tristique
                ornare. Donec vitae vulputate orci, nec pulvinar dolor. Sed a
                efficitur lacus.
              </p>
            </TabPaneSC>
          </Tabs>
        </AccordionItem>
        <AccordionItem label="Accordion Item 2">
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
        </AccordionItem>
        <AccordionItem label="Accordion Item 3">
          <FormExample />
        </AccordionItem>
      </Accordion>
    </Card>
  </React.Fragment>
)

export default AccordionPage
