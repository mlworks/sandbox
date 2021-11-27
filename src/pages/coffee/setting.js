import React from 'react'

// Components

import Field from 'components/field'
import FieldRow from 'components/field-row'
import FlexBox from 'components/flex-box'
import FlexItem from 'components/flex-item'
import Input from 'components/input'
import Ratio from 'components/ratio'
import Select from 'components/select'
import Spacing from 'components/spacing'

const Setting = ({
  currentGram,
  currentWaterRatio,
  currentSweetnessAcidityRatio,
  currentStrengthPourCount,
  pourList,
  totalGram,
  onChangeGram,
  onChangeWaterRatio,
  onChangeSweetnessAcidityRatio,
  onChangeStrengthPourCount,
}) => {
  return (
    <React.Fragment>
      <FieldRow>
        <Field label="Coffee Gram" id="gram">
          <Input
            id="gram"
            type="tel"
            value={currentGram}
            onChange={(event) => onChangeGram(event.target.value)}
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
            value={currentWaterRatio}
            onChange={(event) => onChangeWaterRatio(event.target.value)}
          />
        </Field>
      </FieldRow>
      <FieldRow>
        <FlexItem flex="0 0 40%">
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
              value={currentSweetnessAcidityRatio}
              onChange={(event) =>
                onChangeSweetnessAcidityRatio(event.target.valueAsNumber)
              }
            />
          </Field>
        </FlexItem>
        <FlexItem>
          <Field
            label={
              <FlexBox>
                <FlexItem>Light</FlexItem>
                <FlexItem flex="0 0 auto">Strong</FlexItem>
              </FlexBox>
            }
            id="60-pour"
          >
            <Input
              id="60-pour"
              type="range"
              min="1"
              max="5"
              step="1"
              value={currentStrengthPourCount}
              onChange={(event) =>
                onChangeStrengthPourCount(event.target.valueAsNumber)
              }
            />
          </Field>
        </FlexItem>
      </FieldRow>
      <Spacing marginTop="md">
        <Ratio
          items={pourList.map((item) => {
            return (item.currentGram / totalGram) * 100
          })}
        />
      </Spacing>
      <Spacing marginTop="lg">
        {pourList.map((pour, index) => (
          <div key={index}>
            Pour {1 + index}: {pour.currentGram}g. (Total: {pour.currentTotal}
            g)
          </div>
        ))}
      </Spacing>
    </React.Fragment>
  )
}

export default Setting
