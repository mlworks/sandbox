import React, {useEffect, useState} from 'react'

// Components
import ButtonPrimary from 'components/button-primary'
import Field from 'components/field'
import FieldRow from 'components/field-row'
import Select from 'components/select'

const Config = ({onLoadConfig}) => {
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

  if (!configList.length) return null

  return (
    <FieldRow alignItems="flex-end">
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
      <Field flex="0 0 120px">
        <ButtonPrimary
          disabled={!selectedConfig}
          onClick={() =>
            onLoadConfig(
              JSON.parse(localStorage.getItem('brewConfigs'))[selectedConfig]
            )
          }
        >
          Load Config
        </ButtonPrimary>
      </Field>
    </FieldRow>
  )
}

export default Config
