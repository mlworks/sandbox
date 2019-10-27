import React, {useState} from 'react'

// Components
import ButtonPrimary from 'components/button-primary'
import Field from 'components/field'
import FieldRow from 'components/field-row'
import Input from 'components/input'
import Select from 'components/select'
import Spacing from 'components/spacing'

// https://rangle.io/blog/simplifying-controlled-inputs-with-hooks/
const useInput = initialValue => {
  const [value, setValue] = useState(initialValue)

  return {
    value,
    setValue,
    reset: () => setValue(''),
    bind: {
      value,
      onChange: event => {
        setValue(event.target.value)
      },
    },
  }
}

const FormExample = () => {
  const {
    value: firstName,
    bind: bindFirstName,
    reset: resetFirstName,
  } = useInput('')
  const {value: lastName, bind: bindLastName, reset: resetLastName} = useInput(
    ''
  )
  const {value: address, bind: bindAddress, reset: resetAddress} = useInput('')
  const {value: country, bind: bindCountry, reset: resetCountry} = useInput('')

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        console.log({
          address,
          firstName,
          lastName,
          country,
        })
        resetFirstName()
        resetLastName()
        resetAddress()
        resetCountry()
      }}
    >
      <FieldRow>
        <Field label="First Name" id="firstName">
          <Input id="firstName" maxLength={25} {...bindFirstName} />
        </Field>
        <Field label="Last Name" id="lastName">
          <Input id="lastName" maxLength={25} {...bindLastName} />
        </Field>
      </FieldRow>

      <FieldRow>
        <Field label="Address" id="address">
          <Input
            id="address"
            placeholder="E.g. 123 Fake Street"
            {...bindAddress}
          />
        </Field>
        <Field label="Country" id="country" flex="0 0 30%">
          <Select
            id="country"
            options={[
              {
                label: 'Canada',
                value: 'ca',
              },
              {
                label: 'United States',
                value: 'us',
              },
            ]}
            {...bindCountry}
          />
        </Field>
      </FieldRow>

      <Spacing marginTop="lg">
        <ButtonPrimary
          disabled={
            !address.length ||
            !firstName.length ||
            !lastName.length ||
            !country.length
          }
          type="submit"
        >
          Submit
        </ButtonPrimary>
      </Spacing>
    </form>
  )
}

export default FormExample
