import React from "react";
import "./FoodCont.css";
import FoodBox from "./FoodBox";
import imgFood from "../assets/food.jpg";
import PaymentSect from "./PaymentSect";

import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';



function FoodCont() {
  return (
    <>
      <div className="foodcontainer">
        <div className="left-side">
          <div className="cards">
            <Box className="varieties" gap={2} display="flex" mb={3} mt={3} ml={2}>
              <Autocomplete
                multiple
                size='small'
                limitTags={2}
                options={foodOptions}
                getOptionLabel={(option) => option.title}
                renderInput={(params) => (
                  <TextField {...params} placeholder="Ingredients" />
                )}
                sx={{
                  width: '300px',
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#fff'
                  },
                  '& .MuiButtonBase-root': {
                    color: '#fff'
                  },
                  '& .MuiInputBase-root': {
                    color: '#fff'
                  }
                }}
              />
              <Autocomplete
                multiple
                size='small'
                limitTags={2}
                width={300}
                options={restaurants}
                getOptionLabel={(option) => option.title}
                renderInput={(params) => (
                  <TextField {...params} placeholder="Restaurants" />
                )}
                sx={{
                  width: '300px',
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#fff'
                  },
                  '& .MuiButtonBase-root': {
                    color: '#fff'
                  },
                  '& .MuiInputBase-root': {
                    color: '#fff'
                  }
                }}
              />
            </Box>

            <main>
              {
                foods.map((food) => {
                  return <FoodBox key={food.id} imgSrc={imgFood} title={food.name} price={food.price} />
                })
              }
            </main>
          </div>
        </div>
        <div className="right-side">
          <PaymentSect data={foods} />
        </div>
      </div>
    </>
  );
}

export default FoodCont;

const restaurants = [
  { title: 'Bilka' },
  { title: 'Navat' },
  { title: 'Koreli' },
  { title: 'Uygur Lezzeetleri' },
  { title: 'Kacun' },
  { title: 'Secel' },
];

const foodOptions = [
  { title: 'Eggs, milk and milk products' },
  { title: 'Fruits' },
  { title: 'Grain, nuts and baking products' },
  { title: 'Vegetables' },
  { title: 'Fats and oils' },
  { title: 'Herbs and Spices' },
  { title: 'Meat, sausage and fish' },
  { title: 'Others' },
];

const foods = [
  {
    id:1,
    name: 'kebab', 
    price: 100, 
  },
  {
    id:2,
    name: 'durum', 
    price: 120, 
  },
  {
    id:3, 
    name: 'gozleme', 
    price: 90
  },
  {
    id:4, 
    name: 'simit', 
    price: 10
  }
]