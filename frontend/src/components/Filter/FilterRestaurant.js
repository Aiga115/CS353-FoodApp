import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function FilterRestaurant() {
    return (
        <Box mt={2} ml={2}>
            <Autocomplete
                multiple
                size='small'
                limitTags={2}
                options={data}
                getOptionLabel={(option) => option.title}
                renderInput={(params) => (
                    <TextField {...params} placeholder="Restaurants" />
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
    { title: 'Bilka' },
    { title: 'Navat' },
    { title: 'Koreli' },
    { title: 'Uygur Lezzeetleri' },
    { title: 'Kacun' },
    { title: 'Secel' },
];

export default FilterRestaurant;