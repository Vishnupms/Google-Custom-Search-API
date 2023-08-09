import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  StyledSearchPageHeaderContainer,
  StyledSearchHeader,
  StyledHeaderLeft,
  StyledLogo,
  StyledHeaderMiddle,
  StyledSubOptionsLeft,
  StyledOptions,
  StyledHeaderRight,
} from "./SearchPage.Styled";
import { Search } from "@mui/icons-material";
import { Feed } from "@mui/icons-material";
import { LocalOffer } from "@mui/icons-material";
import { Image } from "@mui/icons-material";
import { LocationOn } from "@mui/icons-material";
import { MoreVert } from "@mui/icons-material";
import { Settings } from "@mui/icons-material";
import { Apps } from "@mui/icons-material";
import { Tooltip, IconButton } from "@mui/material";
import SearchInput from "./SearchInput";
import Avatar from "@mui/material/Avatar";
import SearchResults from "./SearchResults";
import useSearch from "../Api/searchApi";

const SearchPage = () => {
  const { search } = useLocation();
  const searchTerm = search?.split("?")[1];
  const { data } = useSearch(searchTerm);
  console.log(data,"hoi")
  return (
    <StyledSearchPageHeaderContainer>
      <StyledSearchHeader>
        <StyledHeaderLeft>
          <Link to='/'>
            <StyledLogo
              src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png'
              alt='googlelogo'
            />
          </Link>
          <StyledHeaderMiddle>
            <SearchInput />
            <StyledSubOptionsLeft>
              <StyledOptions>
                <Search />
                <Link to='/all'>All</Link>
              </StyledOptions>
              <StyledOptions>
                <Feed />
                <Link to='/news'>News</Link>
              </StyledOptions>
              <StyledOptions>
                <LocalOffer />
                <Link to='/shopping'>Shopping</Link>
              </StyledOptions>
              <StyledOptions>
                <Image/>
                <Link to='/images'>Images</Link>
              </StyledOptions>
              <StyledOptions>
                <LocationOn />
                <Link to='/maps'>Maps</Link>
              </StyledOptions>
              <StyledOptions>
                <MoreVert />
                <Link to='/more'>More</Link>
              </StyledOptions>
            </StyledSubOptionsLeft>
          </StyledHeaderMiddle>
        </StyledHeaderLeft>
        <StyledHeaderRight>
          <StyledOptions>
            <Tooltip title='Settings'>
              <IconButton>
                <Settings />
              </IconButton>
            </Tooltip>
          </StyledOptions>
          <StyledOptions>
            <Tooltip title='Google apps'>
              <IconButton>
                <Apps/>
              </IconButton>
            </Tooltip>
          </StyledOptions>
          <StyledOptions>
            <Tooltip title='Google Account'>
              <Avatar
                sx={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  backgroundColor: "#8ab4f8",
                  color: "white",
                  cursor: "pointer",
                  marginRight: "8px",
                }}
              >
              </Avatar>
            </Tooltip>
          </StyledOptions>
        </StyledHeaderRight>
      </StyledSearchHeader>
      {!!data && <SearchResults data={data} />}
    </StyledSearchPageHeaderContainer>
  );
};;

export default SearchPage;