import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setMovie, setSearch, setTheme } from "../../actions";
import searchMovie from "../../routes/api_routes";
import { Button, Form, FormContainer, Input, SearchButton } from "./searchStyles";

const Search = () => {
  const theme = useSelector((state) => state.theme)
  const search = useSelector((state) => state.search);
  const dispatch = useDispatch();

  const onSearchChange = (e) => {
    dispatch(setSearch(e.target.value));
  };

  const onSearchSubmit = (e) => {
    e.preventDefault();
    if(search === "") {
      return ''
    } else {
      searchMovie(search)
      .then((res) => dispatch(setMovie(res)));
      // dispatch(setSearch(''));
      dispatch(setSearch(e.target.value === ''))
      return search
    }
  };
  const onThemeClick = () => {
    dispatch(setTheme(!theme));
  }
  return (
    <FormContainer theme={theme}>
      <Button theme={theme}>Home</Button>
      <Form onSubmit={onSearchSubmit}>
        <Input theme={theme} onChange={onSearchChange} placeholder=" Search Movie Title" />
        <SearchButton theme={theme} type="submit">Search</SearchButton>
      </Form>
      <Button theme={theme} onClick={onThemeClick}>{theme ? "Light" : "Dark"}</Button>
    </FormContainer>
  );
};

export default Search;
