import { type FC } from 'react'
import { CALCULATION_HISTORY_KEY } from '../../constants'
import { getLocalStorage } from '../../helpers/localStorage'
import { formatCalculation } from '../../helpers/mix'
import './CalculationHistory.css'
import { type ICalculationHistory, type IcalculationProp } from './type'

export const CalculationHistory: FC<ICalculationHistory> = ({ className }) => {
  const calculations: IcalculationProp[] = getLocalStorage(
    CALCULATION_HISTORY_KEY
  )

  const renderCalculations = () => {
    if (!calculations) {
      return (
        <div className="calculation-history__empty">
          Calculation history is empty
        </div>
      )
    }
    return (
      <div className="calculation-history__items">
        {calculations.map((element, index) => {
          return <div key={index}>{formatCalculation(element)}</div>
        })}
      </div>
    )
  }

  return (
    <div className={`calculation-history-container ${className}`}>
      <h2 className="calculation-history__title">History</h2>
      {renderCalculations()}
    </div>
  )
}
