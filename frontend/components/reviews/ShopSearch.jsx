import { Button, Paper, FormControl, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllReviews } from '../../actions/review_actions';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        height: "20vw",
        margin: "0 auto",
        padding: 32,
        position: 'relative',
        top: '10vh'
    },

    header: {
        fontSize: 24,
        padding: 24
    },

    input: {
        paddingRight: 24
    },

    formInputs: {
        display: 'flex',
        justifyContent: 'space-around',
        margin: '0 auto',
        maxWidth: 500
    },

    searchButton: {
        marginTop: 24
    },

    stateDropdown: {
        width: 55
    }

});


export default function ShopSearch({}) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const STATES = ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL',
                    'IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT',
                    'NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI',
                    'SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'];

    function search() {
        const location = `${city},${state}`;
        if (name || location) {
            dispatch(fetchAllReviews({ filters: { name, location } }));
        }
    }


    return(
        <Paper className={classes.root}>
            <h1 className={classes.header}>Begin by searching for a shop, city, or state:</h1>
            <form onSubmit={search} className='reviews-index-search-form'>
                <div className={classes.formInputs}>
                    <TextField className={classes.input} value={name} onChange={e => setName(e.target.value)} label='Shop Name' />
                    <TextField className={classes.input} value={city} onChange={e => setCity(e.target.value)} label='City' />
                    <FormControl>
                        <InputLabel>State</InputLabel>
                        <Select
                            className={classes.stateDropdown}
                            value={state}
                            onChange={e=> setState(e.target.value)}>
                                {STATES.map((state, idx) => {
                                    return <MenuItem key={idx} value={state}>{state}</MenuItem>
                                })}
                        </Select>
                    </FormControl>
                </div>
                <Button className={classes.searchButton} variant='contained' size="medium" color="primary" type='submit'>Search</Button>
            </form>
        </Paper>
    )
}
