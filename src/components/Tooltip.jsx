// eslint-disable-next-line react/prop-types
const Tooltip = ({ text }) => {
    return (
        <section className="absolute top-4 right-4 z-50">
            <div className="relative flex justify-center items-center">

                <div className="group flex justify-center transition-all rounded-full bg-gray-200 p-1 cursor-pointer">
                    <svg viewBox="0 0 320 512" className="w-4 h-4">
                        <path
                            d="M80 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74V320c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7V160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"
                        ></path>
                    </svg>
                    <span className="absolute -top-6 opacity-0 group-hover:opacity-100 group-hover:-translate-y-10 duration-700 text-lg w-[400px] bg-slate-50 rounded-xl p-1"><p className="text-slate-800">{text}</p></span>
                </div>
            </div>
        </section>
    )
}

export default Tooltip