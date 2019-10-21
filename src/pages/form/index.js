import React, {useState} from 'react'

// Components
import Button from 'components/button'
import Card from 'components/card'
import Field from 'components/field'
import FieldRow from 'components/field-row'
import Modal from 'components/modal'
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

const Form = () => {
  const [isOpen, toggleModal] = useState(false)
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
    <React.Fragment>
      <Card>
        <h2>Form Example</h2>
        <form
          onSubmit={event => {
            event.preventDefault()
            toggleModal(true)
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
            <Field label="Country" id="country" flex="0 0 200px">
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
            <Button
              disabled={
                !address.length ||
                !firstName.length ||
                !lastName.length ||
                !country.length
              }
              type="submit"
            >
              Submit
            </Button>
          </Spacing>
        </form>
      </Card>

      <Modal
        title="Form submitted"
        isOpen={isOpen}
        onDismiss={() => {
          toggleModal(false)
          resetFirstName()
          resetLastName()
          resetAddress()
          resetCountry()
        }}
      >
        <Spacing padding="lg">
          <ul>
            <li>First name: {firstName}</li>
            <li>Last name: {lastName}</li>
            <li>Address: {address}</li>
            <li>Country: {country.toUpperCase()}</li>
          </ul>
        </Spacing>
      </Modal>
    </React.Fragment>
  )
}

export default Form
