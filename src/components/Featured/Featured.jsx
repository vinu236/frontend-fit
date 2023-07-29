import featured1 from "../../assets/img/featured-1.png"
import featured2 from "../../assets/img/featured-2.png"
import featured3 from "../../assets/img/featured-3.png"
import featured4 from "../../assets/img/featured-4.png"
import "./FeaturedQueries.css"

const Featured=()=>{
    const FeatureImgs=[featured1,featured2,featured3,featured4];
    const renderImgs=(
        FeatureImgs.map((imgs,index)=>{
            return(
                <img src={imgs} key={index} className="w-[150px] featured-img"></img>
            )
        })
    )
    return(
        <section className="featured-section  bg-black py-[90px]">
            <div className="container-wrapper">
            <div className="flex flex-col gap-[19px] justify-between items-center featured-container">
                <h2 className="text-white text-lg uppercase ">As Featured in</h2>
                <div className="flex justify-around gap-[130px] items-center flex-wrap featured-img-container">
                {renderImgs}
                </div>
            </div>
            </div>
           
        </section>
    )
}

export default Featured;