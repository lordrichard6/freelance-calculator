import { useState } from 'react';
import moneyCash from '../assets/money-cash-bill.svg'
import Tooltip from './Tooltip';

function daysInBudget(budget, hourRate, hoursDay) {
    const totalHours = budget / hourRate;
    return Math.floor(totalHours / hoursDay);
}

const DaysInBudget = () => {
    const [budget, setBudget] = useState(0);
    const [hourRate, setHourRate] = useState(0);
    const [hoursDay, setHoursDay] = useState(0);
    const [daysResult, setDaysResult] = useState(null);

    const handleCalculate = () => {
        const budgetVal = parseFloat(budget);
        const rate = parseFloat(hourRate);
        const hours = parseFloat(hoursDay);
        if (!isNaN(budgetVal) && !isNaN(rate) && !isNaN(hours)) {
            if (budgetVal > 0 && rate < budgetVal && hours > 0) {
                setDaysResult(daysInBudget(budgetVal, rate, hours));
            } if (budgetVal > 0 && rate > budgetVal) {
                setDaysResult("You need to ask more 💰");
            } if (budgetVal === 0) {
                setDaysResult("No budget?");
            } if (budgetVal > 0 && rate < budgetVal && hours === 0) {
                setDaysResult('How many hours a day?');
            } if (hours > 24) {
                setDaysResult("You live on Mars?");
            }
        } else {
            setDaysResult('Just numbers!');
        }
    };

    return (
        <div className='card-group bg-[#f1b211]'>
            <img className='top-16 left-4 -rotate-45' src={moneyCash} alt="money bag" />
            <Tooltip text="You want to know how many days you work with your limited budget?" />
            <div className="card-group_in">
                <h2 className='text-[#272121]'>How many days?</h2>
                <div className='results-container'>
                    {/* <h3>Days in Budget</h3> */}
                    <span className='rounded-md py-2 px-2 text-4xl font-bold w-full h-24 bg-slate-950 text-center flex justify-center items-center'>
                        {daysResult ? daysResult : "Enter the values"}
                    </span>
                </div>
                <div className="input-group">
                    <div>
                        <label>
                            <span className='text-[#272121]'>Budget💰</span>
                            <input
                                type="text"
                                value={budget}
                                onChange={(e) => setBudget(e.target.value)}
                            />
                            <span>$</span>
                        </label>
                    </div>
                    <div>
                        <label>
                            <span className='text-[#272121]'>💰 / hour</span>
                            <input
                                type="text"
                                value={hourRate}
                                onChange={(e) => setHourRate(e.target.value)}
                            />
                            <span>$</span>
                        </label>
                    </div>
                    <div>
                        <label>
                            <span className='text-[#272121]'>🕙h / Day</span>
                            <input
                                type="text"
                                value={hoursDay}
                                onChange={(e) => setHoursDay(e.target.value)}
                            />
                            <span>h</span>
                        </label>
                    </div>
                </div>
                <button className='ui-btn' onClick={handleCalculate}><span>Calculate</span></button>
            </div>
        </div>
    )
}

export default DaysInBudget