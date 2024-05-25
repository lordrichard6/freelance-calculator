import { useState } from 'react';
import moneyCard from '../assets/credit-card-smartphone.svg'
import Tooltip from './Tooltip';

function dayRate(hourRate, hoursPerDay) {
    const totalDay = hourRate * hoursPerDay;
    return totalDay;
}

const DayRate = () => {
    const [hourRate, setHourRate] = useState(0);
    const [hoursPerDay, setHoursPerDay] = useState(0);
    const [dayRateResult, setDayRateResult] = useState(null);

    const handleCalculate = () => {
        const rate = parseFloat(hourRate);
        const hours = parseFloat(hoursPerDay);
        if (!isNaN(rate) && !isNaN(hours)) {
            if (rate > 0 && hours > 0) {
                setDayRateResult(dayRate(rate, hours));
            } if (rate === 0 && hours === 0) {
                setDayRateResult("Enter some numbers");
            } if (rate < 0) {
                setDayRateResult("You pay to work?");
            } if (rate < 5 && rate > 0) {
                setDayRateResult("You're that cheap?");
            } if (rate > 2000) {
                setDayRateResult("You can't make that much");
            } if (rate === 0 && hours > 0) {
                setDayRateResult("You work for free?");
            } if (hours === 0 && rate > 0) {
                setDayRateResult("Put some hours?");
            } if (hours < 0 && rate > 0) {
                setDayRateResult("You go back in time?");
            }
        } else {
            setDayRateResult("🤦‍♂️");
        }
    };

    return (
        <div className='card-group bg-[#e83611]'>
            <img className='top-40 left-4 -rotate-12' src={moneyCard} alt="money card" />
            <Tooltip text="Calculate the total of 💸 you earn." />
            <div className="card-group_in">
                <h2>Hour Rate</h2>
                <div className='results-container'>
                    {/* <h3>Total</h3> */}
                    <span>
                        {dayRateResult ? dayRateResult : "Enter the values"}
                    </span>
                </div>
                <div className="input-group">
                    <div>
                        <label>
                            <span>💰 / hour</span>
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
                            <span>🕙Hours</span>
                            <input
                                type="text"
                                value={hoursPerDay}
                                onChange={(e) => setHoursPerDay(e.target.value)}
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

export default DayRate