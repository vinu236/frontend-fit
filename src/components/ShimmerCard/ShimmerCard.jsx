import "./Shimmer.css";


const ShimmerCard = ()=>{
    const shimmerItems = Array.from({ length: 3 }, (_, index) => (
        <div key={index} className="text-white bg-[#222] animate-pulse rounded-lg flex flex-col gap-6 justify-center items-center">
            <div className="animate-pulse bg-[#333] h-[10px] w-[80%] "></div>
            <div className="animate-pulse bg-[#333] h-[10px] w-[80%] "></div>
            <div className="animate-pulse bg-[#333] h-[10px] w-[80%] "></div>
        </div>
    ));

    return(
        <div className="grid grid-cols-3 containr gap-8"  style={{ gridTemplateRows: '400px' }}>
           {shimmerItems}
        </div>
    )
}

export default ShimmerCard