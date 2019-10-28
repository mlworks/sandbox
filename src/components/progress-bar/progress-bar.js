import React from 'react'

// SC
import ProgressBarLoaderSC from './progress-bar-loader-sc'
import ProgressBarLoaderBarSC from './progress-bar-loader-bar-sc'
import ProgressBarPulseSC from './progress-bar-pulse-sc'
import ProgressBarWrapperSC from './progress-bar-wrapper-sc'

const ProgressBar = ({currentValue}) => (
  <ProgressBarWrapperSC
    role="progressbar"
    aria-valuenow={currentValue}
    aria-valuemin="0"
    aria-valuemax="100"
  >
    <ProgressBarLoaderSC marginBottom="md" role="presentation">
      <ProgressBarLoaderBarSC currentValue={currentValue}>
        <ProgressBarPulseSC />
      </ProgressBarLoaderBarSC>
    </ProgressBarLoaderSC>

    {`${currentValue}%`}
  </ProgressBarWrapperSC>
)
export default ProgressBar
