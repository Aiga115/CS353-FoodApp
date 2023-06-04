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
              <FoodBox imgSrc={imgFood} title={"All 1"} price={"$20"} />
              <FoodBox imgSrc={imgFood} title={"All 2"} price={"$10"} />
              <FoodBox imgSrc={imgFood} title={"All 3"} price={"$5"} />
              <FoodBox imgSrc={imgFood} title={"All 4"} price={"$7"} />
              <FoodBox imgSrc={imgFood} title={"All 5"} price={"$10"} />
              <FoodBox imgSrc={imgFood} title={"All 6"} price={"$15"} />
            </main>
          </div>
        </div>
        <div className="right-side">
          <PaymentSect />
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