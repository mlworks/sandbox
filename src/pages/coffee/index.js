import React, {useState} from 'react'

// Components
import ButtonPrimary from 'components/button-primary'
import Card from 'components/card'
import Field from 'components/field'
import FieldRow from 'components/field-row'
import Input from 'components/input'
import Modal from 'components/modal'
import Spacing from 'components/spacing'
import StackItem from 'components/stack-item'
import Tabs from 'components/tabs'
import TabPaneSC from 'components/tabs/tab-pane-sc'

// import BrewTimer from './brew-timer'
import Config from './config'
import Setting from './setting'

const buildPourList = (total40Gram, ratio40, total60Gram, pourCount) => {
  const pour40 = [
    Math.round((total40Gram * ratio40) / 100),
    Math.round((total40Gram * (100 - ratio40)) / 100),
  ]
  const pour60 = [...Array(Number(pourCount))].map((item, index) =>
    Math.round(total60Gram / pourCount)
  )

  const combinedArr = pour40.concat(pour60)
  return combinedArr.reduce((result, item, index) => {
    result.push({
      currentGram: item,
      currentTotal: result[index - 1]
        ? result[index - 1].currentTotal + item
        : item,
    })
    return result
  }, [])
}

const mergeAndSetLocalStorage = (key, value) => {
  const brewConfigs = localStorage.brewConfigs
    ? JSON.parse(localStorage.brewConfigs)
    : {}
  brewConfigs[key] = value

  localStorage.setItem('brewConfigs', JSON.stringify(brewConfigs))
}

const Coffee = () => {
  const [gram, setCoffeeGram] = useState('12')
  const [configName, setConfigName] = useState('')
  const [ratio, setWaterRatio] = useState('15')
  const [ratio40, setRatio40] = useState(50)
  const [pourCount, setPour60] = useState('3')
  const [isOpen, toggleModal] = useState(false)

  const totalGram = gram * ratio
  const total40Gram = totalGram * 0.4
  const total60Gram = totalGram * 0.6

  const pourList = buildPourList(total40Gram, ratio40, total60Gram, pourCount)

  const onSaveConfig = () => {
    mergeAndSetLocalStorage(configName, {
      gram,
      ratio,
      ratio40,
      pourCount,
    })

    toggleModal(false)
  }

  return (
    <Card>
      <h2>V60 4:6 Method</h2>
      <Tabs>
        <TabPaneSC label="Brew Config" paddingTop="lg">
          <StackItem>
            <Config
              onLoadConfig={({gram, ratio, ratio40, pourCount}) => {
                setCoffeeGram(gram)
                setWaterRatio(ratio)
                setRatio40(ratio40)
                setPour60(pourCount)
              }}
            />

            <Setting
              currentGram={gram}
              currentWaterRatio={ratio}
              currentSweetnessAcidityRatio={ratio40}
              currentStrengthPourCount={pourCount}
              pourList={pourList}
              totalGram={totalGram}
              onChangeGram={setCoffeeGram}
              onChangeWaterRatio={setWaterRatio}
              onChangeSweetnessAcidityRatio={setRatio40}
              onChangeStrengthPourCount={setPour60}
            />

            <Spacing marginTop="lg">
              <ButtonPrimary onClick={() => toggleModal(true)}>
                Save Brew Config
              </ButtonPrimary>
            </Spacing>

            <Modal
              coverage={80}
              isOpen={isOpen}
              effect="dialog"
              title="Save Brew Config"
              onDismiss={() => toggleModal(false)}
            >
              <Spacing padding="lg">
                <FieldRow>
                  <Field label="Config Name" id="name">
                    <Input
                      id="name"
                      maxLength={25}
                      value={configName}
                      onChange={(event) => setConfigName(event.target.value)}
                    />
                  </Field>
                </FieldRow>
                <FieldRow>
                  <ButtonPrimary onClick={onSaveConfig}>Save</ButtonPrimary>
                </FieldRow>
              </Spacing>
            </Modal>
          </StackItem>
        </TabPaneSC>
        {/*        <TabPaneSC label="Brew Timer" paddingTop="lg">
          <BrewTimer pourList={pourList} />
        </TabPaneSC>*/}
      </Tabs>
    </Card>
  )
}

export default Coffee
