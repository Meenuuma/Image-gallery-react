import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
const root = ReactDOM.createRoot(document.getElementById('root'));

 

function Gallery(props) {
  return (

    <div className="gallery">

      <img src={props.src} alt="scenicimage"></img>
      <h3>{props.title}</h3>


    </div>
  )
}
const images = [
  { title: "Nature image", src: "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=", alt: "scenic pic" },
  { title: "Sunrise image", src: "https://images.pexels.com/photos/163255/sunrise-sun-morgenrot-skies-163255.jpeg?cs=srgb&dl=pexels-pixabay-163255.jpg&fm=jpg", alt: "scenic pic" },
  { title: "Waterfalls image", src: "https://stateofwatourism.com/wp-content/uploads/2022/07/AdobeStock_212174534-snoqualmiefalls.jpg", alt: "scenic pic" },
  { title: "Mountain image", src: "https://hips.hearstapps.com/hmg-prod/images/best-scenic-drives-64d6aea400b2d.jpg", alt: "scenic pic" },
  { title: "Forest image", src: "https://t4.ftcdn.net/jpg/02/55/17/43/360_F_255174366_ojDuATz84e5h7lIlxh2moUJa9Kpd5wKk.jpg", alt: "scenic pic" },
  { title: "City image", src: "https://static.vecteezy.com/system/resources/thumbnails/026/189/823/small_2x/captivating-urban-city-skyline-building-and-clouds-background-ai-generated-photo.jpg", alt: "scenic pic" },
  { title: "Snowfall image", src: "https://images.pexels.com/photos/1797113/pexels-photo-1797113.jpeg?cs=srgb&dl=pexels-chaitaastic-1797113.jpg&fm=jpg", alt: "scenic pic" },
  { title: "Scenic image", src: "https://images.pexels.com/photos/158063/bellingrath-gardens-alabama-landscape-scenic-158063.jpeg?cs=srgb&dl=pexels-pixabay-158063.jpg&fm=jpg", alt: "scenic pic" }

]




root.render(
  <div className="gallery_wrapper">
    <div className="gallery_container">
      {images.map(function (item) {
        return <Gallery src={item.src} title={item.title}></Gallery>
      })}
    </div></div>
);


