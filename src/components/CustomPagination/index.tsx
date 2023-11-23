import React from "react";

import { Box,Pagination, PaginationItem } from "@mui/material";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

export default function CustomPagination() {
  return (
    <div>
      <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',
    '& .MuiPagination-root':{
      'button' :{
        color: '#1FCC2F !important',
        fontWeight: 600,

     },
     '& .MuiPaginationItem-root':{
      color: '#1FCC2F !important',
     },
     '& .MuiPaginationItem-icon':{
      fill: '#FFF',
     },
     color: '#1FCC2F !important',
    }
    }}>
      <Pagination  sx={{color:'#1FCC2F'}} size="large" 
      renderItem={(item) => (
        <PaginationItem
          slots={{ first: KeyboardDoubleArrowLeftIcon, last: KeyboardDoubleArrowRightIcon }}
          {...item}
        />
      )}
      count={10} showFirstButton showLastButton  color="secondary"/>
      </Box>
    </div>
  );
}
