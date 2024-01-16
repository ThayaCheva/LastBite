import { Restaurant, User } from "@/utils/types";
import DelliRestaurant from "../../public/Delhi-Streets-logo-colour-details.png";
import Mac from "../../public/McDonalds-Logo.png";
import Nene from "../../public/neneLogo.png";
import Sushi from "../../public/Sushi_Hub-01_680x450.jpg";
import Jorno from "../../public/jorno.jpg";
import { StaticImageData } from "next/image";
import Delhi1 from "../../public/delhi1.png";
import Delhi2 from "../../public/delhi2.png";

import Mac1 from "../../public/mac1.png";

import Mac2 from "../../public/mac2.png";
import Nene2 from "../../public/nene1.png";
import Nene3 from "../../public/nene2.png";
import Sushi1 from "../../public/sushi1.png";
import Sushi2 from "../../public/sushi2.png";

export const users: User[] = [
  {
    id: "user1",
    address: "random address",
    name: "Dmitri",
    role: "USER",
    avatarUrl: Jorno,
  },
  {
    id: "user2",
    address: "random address",
    name: "Ivan",
    role: "USER",
    avatarUrl: Jorno,
  },
  {
    id: "user3",
    address: "random address",
    name: "Aaron",
    role: "ADMIN",
    avatarUrl: Jorno,
  },
  {
    id: "user4",
    address: "random address",
    name: "Jerry",
    role: "ADMIN",
    avatarUrl: Jorno,
  },
  {
    id: "user5",
    address: "random address",
    name: "Rohit",
    role: "ADMIN",
    avatarUrl: Jorno,
  },
];
export const restaurants: Restaurant[] = [
  {
    id: "restaurant1",
    address: "random address",
    name: "Sushi hub",
    role: "RESTAURANT",
    avatarUrl: Sushi,
  },
  {
    id: "restaurant2",
    address: "random address",
    name: "Nene chicken",

    role: "RESTAURANT",
    avatarUrl: Nene,
  },
  {
    id: "restaurant3",
    avatarUrl: Mac,
    address: "random address",
    name: "Mcdonalds",
    role: "RESTAURANT",
  },
  {
    id: "restaurant4",
    address: "random address",
    name: "Delhi",
    avatarUrl: DelliRestaurant,
    role: "RESTAURANT",
  },
];
export const foodImages: {
  restaurantName: string;
  images: StaticImageData[];
}[] = [
  {
    restaurantName: "Delhi",
    images: [Delhi1, Delhi2],
  },
  {
    restaurantName: "Mcdonalds",
    images: [Mac1, Mac2],
  },
  {
    restaurantName: "Nene chicken",
    images: [Nene2, Nene3],
  },
  {
    restaurantName: "Sushi hub",
    images: [Sushi1, Sushi2],
  },
];
