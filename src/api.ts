import { Product } from "./types";
import product1 from './assets/1.png'
import product2 from "./assets/2.png";
import product3 from "./assets/3.png";
import product4 from "./assets/4.png";
import product5 from "./assets/5.png";
import product6 from "./assets/6.webp";
import product7 from "./assets/7.webp";
import product8 from "./assets/8.webp";

const api = {
  list: async (): Promise<Product[]> => [
    {
      id: 1,
      title: "IPhone",
      price: 999,
      image: product1,
      description: "Te ayuda a conseguir tu primer trabajo en IT"

    },
    {
      id: 2,
      title: "Macbook Pro 2022 (M1)",
      price: 1999.0,
      image: product2,
      description: "Te ayuda a conseguir tu primer trabajo en IT"
    },
    {
      id: 3,
      title: "Cannon M50 Camera",
      price: 699,
      image: product3,
      description: "Te ayuda a conseguir tu primer trabajo en IT"
    },
    {
      id: 4,
      title: "WLS Van Gogh Denim Jacket",
      price: 228,
      image: product4,
      description: "Te ayuda a conseguir tu primer trabajo en IT"
    },
    {
      id: 5,
      title: "LED Light Strips",
      price: 20,
      image: product5,
      description: "Te ayuda a conseguir tu primer trabajo en IT"
    },
    {
      id: 6,
      title: "SPECTRUM LS TEE",
      price: 68,
      image: product6,
      description: "Te ayuda a conseguir tu primer trabajo en IT"
    },
    {
      id: 7,
      title: "AUTO SERVICE SHIRT by GOLF WANG",
      price: 120,
      image: product7,
      description: "Te ayuda a conseguir tu primer trabajo en IT"
    },
    {
      id: 8,
      title: "DON'T TRIP UNSTRUCTURED HAT",
      price: 40,
      image: product8,
      description: "Te ayuda a conseguir tu primer trabajo en IT"
    },
  ]
}

export default api