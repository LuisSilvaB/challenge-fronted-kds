import { Order } from "../interfaces/order";
export const ordersData: Order[] = [
    {
      id: '1',
      date: '1704423766031',
      products: [{
        strMeal:"Shrimp Chow Fun", 
        strMealThumb:"https://www.themealdb.com/images/media/meals/7ttta31593350374.jpg", 
        idMeal:"53023", 
      }, {
        strMeal: "Cajun spiced fish tacos",
        strMealThumb: "https://www.themealdb.com/images/media/meals/uvuyxu1503067369.jpg",
        idMeal: "52819"
      }, {
        strMeal:"Shrimp Chow Fun", 
        strMealThumb:"https://www.themealdb.com/images/media/meals/7ttta31593350374.jpg", 
        idMeal:"53023", 
      }],
      state: 'Current', 
      timeStatus:'Just Created'
    },
    {
      id: '2',
      date: '1704423766037',
      products: [{
        strMeal:"Shrimp Chow Fun", 
        strMealThumb:"https://www.themealdb.com/images/media/meals/7ttta31593350374.jpg", 
        idMeal:"53023", 
      },],
      state: 'Current',
      timeStatus:'On Time'
    },
    {
      id: '3',
      date: '1704423766035',
      products: [    {
      strMeal: "Pate Chinois",
      strMealThumb: "https://www.themealdb.com/images/media/meals/yyrrxr1511816289.jpg",
      idMeal: "52930"
    },
    {
      strMeal: "Pouding chomeur",
      strMealThumb: "https://www.themealdb.com/images/media/meals/yqqqwu1511816912.jpg",
      idMeal: "52932"
    },
    {
      strMeal: "Poutine",
      strMealThumb: "https://www.themealdb.com/images/media/meals/uuyrrx1487327597.jpg",
      idMeal: "52804"
    },],
      state: 'Current',
      timeStatus:'Late', 
    },
    {
      id: '4',
      date: '1704423766035',
      products: [    {
        strMeal: "Rappie Pie",
        strMealThumb: "https://www.themealdb.com/images/media/meals/ruwpww1511817242.jpg",
        "idMeal": "52933"
      },
      {
        strMeal: "Split Pea Soup",
        strMealThumb: "https://www.themealdb.com/images/media/meals/xxtsvx1511814083.jpg",
        "idMeal": "52925"
      },
      {
        strMeal: "Sugar Pie",
        strMealThumb: "https://www.themealdb.com/images/media/meals/yrstur1511816601.jpg",
        "idMeal": "52931"
      },],
      state: 'In Progress',
      timeStatus:'Just Created', 
    },
    {
      id: '5',
      date: '1704423766035',
      products: [    {
        strMeal: "BeaverTails",
        strMealThumb: "https://www.themealdb.com/images/media/meals/ryppsv1511815505.jpg",
        idMeal: "52928"
      },
      {
        strMeal: "Breakfast Potatoes",
        strMealThumb: "https://www.themealdb.com/images/media/meals/1550441882.jpg",
        idMeal: "52965"
      },
      {
        strMeal: "Canadian Butter Tarts",
        strMealThumb: "https://www.themealdb.com/images/media/meals/wpputp1511812960.jpg",
        idMeal: "52923"
      },],
      state: 'Complete',
      timeStatus:'On Time', 
    },
    {
      id: '6',
      date: '1704423766035',
      products: [{
        strMeal:"Shrimp Chow Fun", 
        strMealThumb:"https://www.themealdb.com/images/media/meals/7ttta31593350374.jpg", 
        idMeal:"53023", 
      }, {
        strMeal:"Shrimp Chow Fun", 
        strMealThumb:"https://www.themealdb.com/images/media/meals/7ttta31593350374.jpg", 
        idMeal:"53023", 
      }, {
        strMeal:"Shrimp Chow Fun", 
        strMealThumb:"https://www.themealdb.com/images/media/meals/7ttta31593350374.jpg", 
        idMeal:"53023", 
      }],
      state: 'Complete',
      timeStatus:'Just Created', 
    },
    {
      id: '7',
      date: '1704423766035',
      products: [{
        strMeal:"Shrimp Chow Fun", 
        strMealThumb:"https://www.themealdb.com/images/media/meals/7ttta31593350374.jpg", 
        idMeal:"53023", 
      }, {
        strMeal:"Shrimp Chow Fun", 
        strMealThumb:"https://www.themealdb.com/images/media/meals/7ttta31593350374.jpg", 
        idMeal:"53023", 
      }, {
        strMeal:"Shrimp Chow Fun", 
        strMealThumb:"https://www.themealdb.com/images/media/meals/7ttta31593350374.jpg", 
        idMeal:"53023", 
      }],
      state: 'In Progress',
      timeStatus:'Late', 
    },
    {
      id: '8',
      date: '1704423766035',
      products: [{
        strMeal:"Shrimp Chow Fun", 
        strMealThumb:"https://www.themealdb.com/images/media/meals/7ttta31593350374.jpg", 
        idMeal:"53023", 
      }, {
        strMeal:"Shrimp Chow Fun", 
        strMealThumb:"https://www.themealdb.com/images/media/meals/7ttta31593350374.jpg", 
        idMeal:"53023", 
      }, {
        strMeal:"Shrimp Chow Fun", 
        strMealThumb:"https://www.themealdb.com/images/media/meals/7ttta31593350374.jpg", 
        idMeal:"53023", 
      }],
      state: 'Cancel',
      timeStatus:'Just Created', 
    },
    {
      id: '9',
      date: '1704423766035',
      products: [{
        strMeal:"Chickpea Fajitas", 
        strMealThumb:"https://www.themealdb.com/images/media/meals/7ttta31593350374.jpg", 
        idMeal:"53023", 
      }, {
        strMeal:"Shrimp Chow Fun", 
        strMealThumb:"https://www.themealdb.com/images/media/meals/7ttta31593350374.jpg", 
        idMeal:"53023", 
      },{
        strMeal: "Crock Pot Chicken Baked Tacos",
        strMealThumb: "https://www.themealdb.com/images/media/meals/ypxvwv1505333929.jpg",
        idMeal: "52830"
      },],
      state: 'Cancel',
      timeStatus:'On Time', 
    },
    {
      id: '10',
      date: '1704423766035',
      products: [{
        strMeal:"Shrimp Chow Fun", 
        strMealThumb:"https://www.themealdb.com/images/media/meals/7ttta31593350374.jpg", 
        idMeal:"53023", 
      }, {
        strMeal: "Stuffed Bell Peppers with Quinoa and Black Beans",
        strMealThumb: "https://www.themealdb.com/images/media/meals/b66myb1683207208.jpg",
        "idMeal": "53067"
      }, {
        strMeal:"Shrimp Chow Fun", 
        strMealThumb:"https://www.themealdb.com/images/media/meals/7ttta31593350374.jpg", 
        idMeal:"53023", 
      }],
      state: 'Cancel',
      timeStatus:'Late', 
    },
    
  ];