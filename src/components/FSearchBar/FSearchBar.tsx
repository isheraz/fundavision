import React from 'react';
import { SearchRounded } from '@material-ui/icons';
import { Theme, createStyles, withStyles, Input } from '@material-ui/core';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      marginTop: '2%',
      fontFamily: 'Poppins-Regular'
    },
    searchBar: {
      border: '1px solid',
      borderRadius: '25px',
      padding: `${theme.spacing(0.7)}px ${theme.spacing(1)}px`,
      fontSize: 12,
      minWidth: theme.spacing(30),
      '&:before': {
        display: 'none'
      }
    }
  });

type FSearchBarProps = {
  classes: any;
  searchActions: any;
  results: Array<any>;
};

const FSearchBar: React.FC<FSearchBarProps> = ({
  classes,
  searchActions,
  results
}) => {
  const debounceHandleSearch = async (e: any) => {
    if (e.target.value.length > 3)
      console.log(await searchActions.search({ keyword: e.target.value }));
  };

  return (
    <article>
      <Input
        id="search-businesses"
        className={classes.searchBar}
        onChange={debounceHandleSearch}
        placeholder="Search Business Or Organization"
        endAdornment={<SearchRounded />}
        aria-describedby="search-business"
        inputProps={{ 'aria-label': 'search' }}
      />
    </article>
  );
};

export default withStyles(styles)(FSearchBar);
