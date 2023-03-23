import React, { type FC } from 'react'
import { KeypadValuesDefault } from '../../constants'
import { getButtonType } from '../../helpers/mix'
import { Button } from './Button'
import './NumericKeypad.css'
import { type INumericKeypadProps } from './types'

export const NumericKeypad: FC<INumericKeypadProps> = React.memo(
  ({ handleOnClick, isAllClear = true, operator = '' }) => {
    return (
      <div className="keypad-wrapper">
        {KeypadValuesDefault.flat().map((btn, index) => {
          return (
            <Button
              key={index}
              type={getButtonType(btn)}
              onClick={() => {
                handleOnClick(!isAllClear && btn === 'AC' ? 'C' : btn)
              }}
              isActive={operator === btn}
              className={btn === '0' ? 'keypad-button-0' : ''}
            >
              {!isAllClear && btn === 'AC' ? 'C' : btn}
            </Button>
          )
        })}
      </div>
    )
  }
)
