import React from 'react'
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from '@mui/material';
import FilterListIcon from "@mui/icons-material/FilterList";



        const Search = styled("div")(({ theme }) => ({
          position: "relative",
          borderRadius: theme.shape.borderRadius,
          backgroundColor: alpha(theme.palette.common.white, 0.15),
          marginLeft: 0,
          width: "100%",
          [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing(1),
            width: "100%",
            backgroundColor: "#F0F2F5",
            borderRadius: "6px",
          },
        }));
        const SearchIconWrapper = styled("div")(({ theme }) => ({
          padding: theme.spacing(0, 2),
          height: "100%",
          position: "absolute",
          pointerEvents: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }));
        const StyledInputBase = styled(InputBase)(({ theme }) => ({
          color: "inherit",
          "& .MuiInputBase-input": {
            padding: theme.spacing(1, 1, 1, 0),
            paddingLeft: `calc(1em + ${theme.spacing(5)})`,
            fontSize: "14px",
            color: "#667781",
            width: "100%",
          },
        }));


function SearchField() {
  return (
    <div>
      <Search>
        <SearchIconWrapper>
            <SearchIcon sx={{ color: "#54656F" }} />

        </SearchIconWrapper>
        <StyledInputBase
          sx={{
            color: "#667781",
            width: "100%",
            "&::placeholder": { color: "#667781" },
          }}
        //   onFocus={handleFocus}
        //   onBlur={handleBlur}
          placeholder="Search or Start a new Chat"
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
      {/* <IconButton>
        <FilterListIcon sx={{ cursor: "pointer", color: "#8696A0" }} />
      </IconButton> */}
    </div>
  );
}

export default SearchField