import React, {useEffect, useState} from 'react'

// Components
import ButtonPrimary from 'components/button-primary'
import Card from 'components/card'
import Field from 'components/field'
import FieldRow from 'components/field-row'
import FlexBox from 'components/flex-box'
import FlexItem from 'components/flex-item'
import Input from 'components/input'
import Modal from 'components/modal'
import Ratio from 'components/ratio'
import Select from 'components/select'
import Spacing from 'components/spacing'
import StackItem from 'components/stack-item'
import Tabs from 'components/tabs'
import TabPaneSC from 'components/tabs/tab-pane-sc'

import BrewTimer from './brew-timer'

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
  const [configList, setConfigs] = useState([])
  const [selectedConfig, selectConfig] = useState('')

  useEffect(() => {
    const configs = localStorage.getItem('brewConfigs')
    if (configs) {
      const configOptions = Object.keys(JSON.parse(configs)).map((name) => ({
        label: name,
        value: name,
      }))

      setConfigs(configOptions)
    }
  }, [])

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
            {!!configList.length && (
              <FieldRow>
                <Field label="Saved Configs" id="configs">
                  <Select
                    id="configs"
                    options={configList}
                    value={selectedConfig}
                    onChange={(event) => {
                      selectConfig(event.target.value)
                    }}
                  />
                </Field>
                <Field label="Load Config">
                  <ButtonPrimary
                    disabled={!selectedConfig}
                    onClick={(event) => {
                      const {gram, ratio, ratio40, pourCount} = JSON.parse(
                        localStorage.getItem('brewConfigs')
                      )[selectedConfig]

                      setCoffeeGram(gram)
                      setWaterRatio(ratio)
                      setRatio40(ratio40)
                      setPour60(pourCount)
                    }}
                  >
                    Load Config
                  </ButtonPrimary>
                </Field>
              </FieldRow>
            )}
            <FieldRow>
              <Field label="Coffee Gram" id="gram">
                <Input
                  id="gram"
                  value={gram}
                  onChange={(event) => setCoffeeGram(event.target.value)}
                />
              </Field>
              <Field label="Water Ratio" id="water-ratio">
                <Select
                  id="water-ratio"
                  options={[
                    {
                      value: '15',
                      label: '15',
                    },
                    {
                      value: '16',
                      label: '16',
                    },
                    {
                      value: '17',
                      label: '17',
                    },
                  ]}
                  value={ratio}
                  onChange={(event) => setWaterRatio(event.target.value)}
                />
              </Field>
            </FieldRow>
            <FieldRow>
              <Field
                label={
                  <FlexBox>
                    <FlexItem>Sweetness</FlexItem>
                    <FlexItem flex="0 0 auto">Acidity</FlexItem>
                  </FlexBox>
                }
                id="40-ratio"
              >
                <Input
                  id="40-ratio"
                  type="range"
                  min="10"
                  max="90"
                  step="10"
                  value={ratio40}
                  onChange={(event) => setRatio40(event.target.valueAsNumber)}
                />
              </Field>
            </FieldRow>
            <FieldRow>
              <Field
                label={
                  <div>
                    <FlexBox>
                      <FlexItem>Light</FlexItem>
                      <FlexItem flex="0 0 auto">Strong</FlexItem>
                    </FlexBox>

                    <FlexBox marginTop="md" justifyContent="space-between">
                      <FlexItem flex="0 0 auto">1</FlexItem>
                      <FlexItem flex="0 0 auto">2</FlexItem>
                      <FlexItem flex="0 0 auto">3</FlexItem>
                      <FlexItem flex="0 0 auto">4</FlexItem>
                      <FlexItem flex="0 0 auto">5</FlexItem>
                    </FlexBox>
                  </div>
                }
                id="60-pour"
              >
                <Input
                  id="60-pour"
                  type="range"
                  min="1"
                  max="5"
                  step="1"
                  value={pourCount}
                  onChange={(event) => setPour60(event.target.valueAsNumber)}
                />
              </Field>
            </FieldRow>
            <Ratio
              items={pourList.map((item) => {
                return (item.currentGram / totalGram) * 100
              })}
            />

            <Spacing marginTop="lg">
              {pourList.map((pour, index) => (
                <div key={index}>
                  Pour {1 + index}: {pour.currentGram}g. (Total:{' '}
                  {pour.currentTotal}
                  g)
                </div>
              ))}
            </Spacing>
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
        <TabPaneSC label="Brew Timer" paddingTop="lg">
          <BrewTimer pourList={pourList} />
        </TabPaneSC>
      </Tabs>
    </Card>
  )
}

export default Coffee
