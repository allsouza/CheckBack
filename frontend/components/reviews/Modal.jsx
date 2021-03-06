import ReviewShow from './Show';
import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Graphs from '../chart/chart';

export default function ReviewModal({ onClick, review, avgWage, avgSalary, displayedReviews }) {
    const theme=  useTheme();
    const useStyles = makeStyles({
        background: {
            display: 'flex',
            flexDirection: 'column',
            position: 'fixed',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            width: '100vw',
            background: 'rgba(0,0,0,.8)',
            top: 0,
            left: 0,
            zIndex: 1000,
        },
        
        container: {
            background: '#fff',
            borderRadius: 5,
            padding: 8,
            backgroundColor: theme.palette.cardColor,
            color: theme.palette.textColor
        }
    });
    const classes = useStyles();
    
    return (
        <div onClick={onClick} className={classes.background}>
            <div className={classes.container}>
                <ReviewShow review={review} expanded={true} />
                <Graphs review={review} expanded={true} avgSalary={avgSalary} avgWage={avgWage} displayedReviews={displayedReviews} />
            </div>
        </div>
    )

}