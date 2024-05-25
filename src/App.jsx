import './App.css'
import DayRate from './components/DayRate'
import DaysInBudget from './components/DaysInBudget'
// import PriceWithMonthlyDiscount from './components/PriceWithMonthlyDiscount'
import PriceTotal from './components/PriceTotal'

function App() {
  return (
    <main className='flex justify-center items-center w-full min-h-screen my-auto relative'>
      <div className="flex gap-4 flex-col mx-4">
        <div className="wrapper">
          <div className="container flex flex-col justify-center items-center">
            <p className='text-lg lg:text-2xl font-bold'>Live on the edge and get rich or get broken trying</p>
            <h1 className='text-center text-4xl lg:text-8xl font-black'>Your Freelacer calculator!</h1>
          </div>
        </div>
        <div className="flex gap-4 flex-col lg:flex-row">
          <DayRate />
          <DaysInBudget />
          {/* <PriceWithMonthlyDiscount /> */}
          <PriceTotal />
        </div>
      </div>
    </main>
  )
}

export default App
