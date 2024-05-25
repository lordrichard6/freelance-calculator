import { useState } from 'react';
import Tooltip from './Tooltip';

function priceWithMonthlyDiscount(ratePerHour, numDays, discount, hoursDay, daysInMonth) {
    const fullMonths = Math.floor(numDays / daysInMonth);
    const remainDays = numDays % daysInMonth;

    const monthCost = fullMonths * daysInMonth * hoursDay * ratePerHour * (1 - discount);

    const remainDaysCost = remainDays * hoursDay * ratePerHour;

    const totalCost = Math.ceil(monthCost + remainDaysCost);
    return totalCost;
}

const PriceWithMonthlyDiscount = () => {
    const [ratePerHour, setRatePerHour] = useState('');
    const [numDays, setNumDays] = useState('');
    const [discount, setDiscount] = useState('');
    const [hoursDay, setHoursDay] = useState(0);
    const [totalCost, setTotalCost] = useState(null);

    const handleCalculate = () => {
        const rate = parseFloat(ratePerHour);
        const days = parseInt(numDays);
        const hoursADay = parseInt(hoursDay);
        const discountVal = parseFloat(discount);

        if (!isNaN(rate) && !isNaN(discountVal) && !isNaN(days) && !isNaN(discountVal)) {
            if(!isNaN(hoursADay) && hoursADay > 24) {
                setTotalCost('Your days are bigger than ususal.');
            }
            const cost = priceWithMonthlyDiscount(rate, days, discountVal, hoursADay, 22); // Default values for hoursDay and daysInMonth
            setTotalCost(cost);
        } else {
            setTotalCost('Please enter valid numbers');
        }
    };

    return (
        <div className='rounded-xl bg-gray-900 py-10 px-8 max-w-[406px] flex flex-col'>
            <h2 className='text-2xl font-bold mb-6'>Lets say you offer a discount for full months and full rate the remander days of the last month.</h2>
            <Tooltip />
            <div className="flex flex-col justify-end items-end gap-4 mb-4">
                <div>
                    <label>
                        <span className='text-xl mr-2'>Rate Per Hour</span>
                        <input
                            className='rounded-md py-4 px-2 text-2xl font-bold w-40'
                            type="text"
                            value={ratePerHour}
                            onChange={(e) => setRatePerHour(e.target.value)}
                        />
                    </label>
                    <span className='text-3xl font-bold ml-2'>$</span>
                </div>
                <div>
                    <label>
                        <span className='text-xl mr-2'>Hours Per Day</span>
                        <input
                            className='rounded-md py-4 px-2 text-2xl font-bold w-40'
                            type="text"
                            value={hoursDay}
                            onChange={(e) => setHoursDay(e.target.value)}
                        />
                    </label>
                    <span className='text-3xl font-bold ml-2'>h</span>
                </div>
                <div>
                    <label>
                        <span className='text-xl mr-2'>Total Days</span>
                        <input
                            className='rounded-md py-4 px-2 text-2xl font-bold w-40'
                            type="text"
                            value={numDays}
                            onChange={(e) => setNumDays(e.target.value)}
                        />
                    </label>
                    <span className='text-3xl font-bold ml-2'>D</span>
                </div>
                <div>
                    <label>
                        <span className='text-xl mr-2'>Discount</span>
                        <input
                            className='rounded-md py-4 px-2 text-2xl font-bold w-40'
                            type="text"
                            value={discount}
                            onChange={(e) => setDiscount(e.target.value)}
                        />
                    </label>
                    <span className='text-3xl font-bold ml-2'>%</span>
                </div>
            </div>
            <button className='delete-button' onClick={handleCalculate}>Calculate</button>
            <div className='flex items-center justify-first mt-4'>
                <h3 className='text-2xl font-bold'>Total Cost: <span className='rounded-md py-2 px-2 text-2xl font-bold w-20 bg-slate-950'>{totalCost}</span></h3>
            </div>
        </div>
    )
}

export default PriceWithMonthlyDiscount;