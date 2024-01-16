import FoodItem from "../components/FoodItem";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Marketplace() {
  
  const exampleFood = {food_name: "Fruits",
                       restaurant_name: "The ocean",
                       img_path: "../assets/test.jpg"}
  
  const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

  return (
    <Carousel responsive={responsive} 
    draggable={false}>
      <FoodItem name={exampleFood.food_name} img_path={exampleFood.img_path}/>
      <FoodItem name={exampleFood.food_name} img_path={exampleFood.img_path}/>
      <FoodItem name={exampleFood.food_name} img_path={exampleFood.img_path}/>
      <FoodItem name={exampleFood.food_name} img_path={exampleFood.img_path}/>
      <FoodItem name={exampleFood.food_name} img_path={exampleFood.img_path}/>
      <FoodItem name={exampleFood.food_name} img_path={exampleFood.img_path}/>
      <FoodItem name={exampleFood.food_name} img_path={exampleFood.img_path}/>
      <FoodItem name={exampleFood.food_name} img_path={exampleFood.img_path}/>
      <FoodItem name={exampleFood.food_name} img_path={exampleFood.img_path}/>
    </Carousel>
  )
}