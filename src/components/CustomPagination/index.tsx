import React, { useEffect } from "react";

import { Box, Pagination, PaginationItem } from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";

export default function CustomPagination(props: any) {
  const { pagenatedTxnHistory, setPage, page } = props;
  const handleChange = (event: any, value: any) => {
    setPage(value);
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          "& .MuiPagination-root": {
            button: {
              color: "#1FCC2F !important",
              fontWeight: 600,
            },
            "& .MuiPaginationItem-root": {
              color: "#1FCC2F !important",
              width: "20px",
              minWidth: "unset",
              padding: "0",
              margin: "0",
            },
            "& .MuiPaginationItem-icon": {
              fill: "#FFF",
            },
            color: "#1FCC2F !important",
          },
        }}
      >
        <Pagination
          sx={{ color: "#1FCC2F" }}
          size="large"
          renderItem={(item) => (
            <PaginationItem
              slots={{
                first: KeyboardDoubleArrowLeftIcon,
                last: KeyboardDoubleArrowRightIcon,
              }}
              {...item}
            />
          )}
          page={page}
          onChange={handleChange}
          count={pagenatedTxnHistory.length}
          showFirstButton
          showLastButton
          color="secondary"
        />
      </Box>
    </div>
  );
}
