// Component
import FlexBox from 'components/flex-box'
import FlexItem from 'components/flex-item'
import RatioSC from './ratio-sc'

const Ratio = ({items}) => {
  return (
    <FlexBox>
      {items.map((item, index) => (
        <FlexItem key={`${item}_${index}`} flex={`0 1 ${item}%`}>
          <RatioSC index={index} />
        </FlexItem>
      ))}
    </FlexBox>
  )
}

export default Ratio
