import PropTypes from "prop-types";


function Food({name, picture, rating}){
  return (
    <div>
      <h1>I like {name}</h1>
      <img src={picture} alt="error"></img>
      <h4>{rating}/5.0</h4>
    </div>
  );

};

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number.isRequired
}

const foodILike = [
  {
    id :1,
    name: "kimchi",
    img : "https://cdn.imweb.me/thumbnail/20200415/6b6e035658bac.png",
    rating : 5.0
  },
  {
    id :2,
    name : "chicken",
    img : "https://rereco.co/wp-content/uploads/2018/02/best_menu09.jpg",
    rating : 4.8
  },
  {
    id :3,
    name : "pizza",
    img: "https://handmadepizza.co.kr/uploadFiles/TB_MENU_MAIN/img_pizza_%ED%8F%AC%ED%85%90%ED%94%BC%EC%9E%90.png",
    rating : 4.8
  }
];


function App() {
  return (
  <div>
    {foodILike.map(dish => (
      <Food 
        key={dish.id}
        name={dish.name} 
        picture={dish.img} 
        rating={dish.rating}
       />
    ))}
  </div>
  );
}

export default App;
