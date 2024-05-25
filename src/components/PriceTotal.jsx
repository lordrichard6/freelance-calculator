import { useState } from 'react';
import moneyBag from '../assets/currency-bag-bath.svg'
import Tooltip from './Tooltip';

const PriceTotal = () => {
    const [pricePerHour, setPricePerHour] = useState(0);
    const [hoursPerDay, setHoursPerDay] = useState(0);
    const [totalDays, setTotalDays] = useState(0);

    const [totalCost, setTotalCost] = useState(0);
    const [totalMonths, setTotalMonths] = useState(0);

    const calculateCostAndMonths = () => {
        const daysInMonth = 22;
        const totalMonths = totalDays / daysInMonth;
        const totalCost = Math.ceil(pricePerHour * hoursPerDay * totalDays);
        if (!isNaN(totalCost) && !isNaN(totalMonths)) {
            setTotalMonths(totalMonths.toFixed(2));
            setTotalCost(totalCost);
        } else {
            setTotalMonths("No nr?");
            setTotalCost("No nr?");
        }
    };

    return (
        <div className='card-group bg-[#186cb8]'>
            <img className='top-8 left-4 -rotate-12' src={moneyBag} alt="money bag" />
            <Tooltip text="How much it costs you employer and how many months(22days) it takes?" />
            <div className="card-group_in">
                <h2>Cost and Months Calculator</h2>
                <div className='results-container-last flex flex-col gap-2 mb-2'>
                    <div className="flex flex-row justify-center items-stretch w-full">
                        <h3 className='text-right'>Total Cost </h3>
                        <span className='rounded-md py-2 px-2 text-2xl font-bold w-full bg-[#121212] text-center'>{totalCost}</span>
                    </div>
                    <div className="flex flex-row justify-center items-stretch w-full">
                        <h3 className='text-right'>Total Months </h3>
                        <span className='rounded-md py-2 px-2 text-2xl font-bold w-full bg-[#121212] text-center'>{totalMonths}</span>
                    </div>
                </div>
                <div className="input-group">
                    <div>
                        <label>
                            <span>💰 / hour</span>
                            <input
                                type="text"
                                value={pricePerHour}
                                onChange={(e) => setPricePerHour(parseFloat(e.target.value))}
                            />
                            <span>$</span>
                        </label>
                    </div>
                    <div>
                        <label>
                            <span>🕙h / Day</span>
                            <input
                                type="text"
                                value={hoursPerDay}
                                onChange={(e) => setHoursPerDay(parseFloat(e.target.value))}
                            />
                            <span>h</span>
                        </label>
                    </div>
                    <div>
                        <label>
                            <span>Days</span>
                            <input
                                type="text"
                                value={totalDays}
                                onChange={(e) => setTotalDays(parseFloat(e.target.value))}
                            />
                            <span>D</span>
                        </label>
                    </div>
                </div>
                <button className='ui-btn' onClick={calculateCostAndMonths}><span>Calculate</span></button>
            </div>
        </div>
    )
}

export default PriceTotal;