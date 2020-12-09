import React, { useEffect } from 'react';
import Review from './Show';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllReviews } from '../../actions/review_actions';

export default function ReviewIndex() {
    const reviews = Object.values(useSelector(({entities}) => entities.reviews));
    const dispatch = useDispatch();

    useEffect(() => {
        async function loadContent() {
            await dispatch(fetchAllReviews({ filters: { } }));
        }

        loadContent();
    }, []);

    return (
        reviews ? reviews.map(review => <Review review={review} />) : <div>Loading...</div>   
    )
}