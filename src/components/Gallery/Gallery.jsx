import Gym1 from "../../assets/img/GYM-1.jpg";
import Gym2 from "../../assets/img/GYM-2.jpg";
import Gym3 from "../../assets/img/GYM-3.jpg";
import Gym4 from "../../assets/img/GYM-4.jpg";
import Gym5 from "../../assets/img/GYM-5.jpg";
import Gym6 from "../../assets/img/GYM-6.jpg";
import Gym7 from "../../assets/img/GYM-7.jpg";
import Gym8 from "../../assets/img/GYM-8.jpg";
import "./Gallery.css";
import "./GalleryQueries.css";
const Gallery = () => {
  const img = [Gym1, Gym2, Gym3, Gym4, Gym5, Gym6, Gym7, Gym8];

  const renderedImg = img.map((src, index) => {
    return (
      <img
        src={src}
        alt=""
        srcset=""
        key={index}
        className="max-w-[100%] max-h-[100%] object-cover rounded-sm gallery-img"
      />
    );
  });
  return (
    <section className="gallery-section  bg-black py-[90px] ">
      <div className="container-wrapper mb-14">
        <h1 className="text-custom-gym text-xl inline-block font-semibold tracking-widest heading-underline-animate">
          Gallery
        </h1>
      </div>
      <div className="container-wrapper gallery-container text-white flex justify-between items-start min-h-[33vh]  ">
        {renderedImg}
      </div>
    </section>
  );
};

export default Gallery;
