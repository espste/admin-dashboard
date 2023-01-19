import { Search } from "@mui/icons-material";
import { 
    IconButton,
    TextField,
    InputAdornment
} from '@mui/material';
import {
    GridToolbarDensitySelector,
    GridToolbarContainer,
    GridToolbarColumnsButton,
    GridToolbarExport,

} from '@mui/x-data-grid';

import FlexBetween from "./flexBetween";


const DataGridCustomToolbar = ({ searchInput, setSearchInput, setSearch }) => {
  return (
    <GridToolbarContainer>
        <FlexBetween width='100%'>
            <FlexBetween>
                <GridToolbarColumnsButton />
                <GridToolbarDensitySelector />
                <GridToolbarExport />
            </FlexBetween>    
            <TextField 
                label='Search...'
                onChange={e => setSearchInput(e.target.value)}
                value={searchInput}
                variant='standard'
                InputProps={{
                    endAdornment: (
                        <InputAdornment position='end'>
                            <IconButton
                                onClick={() => {
                                    setSearch(searchInput);
                                    setSearchInput('');
                                }}
                            >
                                <Search />
                            </IconButton>
                        </InputAdornment>
                    )
                }}
                sx={{ 
                    mb: '0.5rem', 
                    width: '15rem', 
                }}
            />
        </FlexBetween>        
    </GridToolbarContainer>
  )
}

export default DataGridCustomToolbar