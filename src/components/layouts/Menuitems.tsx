import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { MenuItem ,Divider,Grid } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 'fit-content',
      padding:'15px',
      display:'flex',
      border:`1px solid ${theme.palette.divider}`,
      borderLeft: '0 !important',
      borderRight: '0 !important',
      color: '#A4A5A4',
     
      '& hr': {
        margin: theme.spacing(0, 2),
      },
    
    },

    menuItem:{
        fontSize:'15px',
        fontFamily: 'Poppins-Regular',
        
        '&:hover': {
            color: '#ADD8E6',
            backgroundColor: 'transparent'
          },
    },


  }),
);

export default function Menuitems() {
  const classes = useStyles();

 

  return (
  
      <Grid container alignItems="center" className={classes.root}>
     
      <MenuItem  className={classes.menuItem}>Graphic & Design </MenuItem> 
      
        <Divider orientation="vertical" flexItem />
    
        <MenuItem className={classes.menuItem}>Data Management</MenuItem> 
        <Divider orientation="vertical" flexItem />
        
        <MenuItem className={classes.menuItem}>Web Development</MenuItem> 
        <Divider orientation="vertical" flexItem />
        
        <MenuItem className={classes.menuItem}>Buisness</MenuItem> 
        <Divider orientation="vertical" flexItem />
        
        <MenuItem className={classes.menuItem}>Content Writing</MenuItem> 
        <Divider orientation="vertical" flexItem />
       
        <MenuItem className={classes.menuItem}>Digital Marketing </MenuItem> 
        
        <Divider orientation="vertical" flexItem />
       
        <MenuItem className={classes.menuItem}>Music & Audio</MenuItem> 

        <Divider orientation="vertical" flexItem />

        <MenuItem className={classes.menuItem}> Video Editing </MenuItem> 
       
        
       
      </Grid>
    
  );
}
