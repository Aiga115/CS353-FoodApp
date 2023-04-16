import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Filter() {
    return (
        <Box mt={2} ml={2}>
            <Autocomplete
                multiple
                size='small'
                limitTags={2}
                options={data}
                getOptionLabel={(option) => option.title}
                renderInput={(params) => (
                    <TextField {...params} placeholder="Ingredients" />
                )}
                sx={{ 
                    width: '500px', 
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#000'
                    }
                 }}
            />
        </Box>
    );
}

const data = [
    { title: 'Eggs, milk and milk products' },
    { title: 'Fruits' },
    { title: 'Grain, nuts and baking products' },
    { title: 'Vegetables' },
    { title: 'Fats and oils' },
    { title: 'Herbs and Spices' },
    { title: 'Meat, sausage and fish' },
    { title: 'Others' },
];

export default Filter;