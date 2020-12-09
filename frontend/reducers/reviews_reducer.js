import { DELETE_REVIEW, RECEIVE_REVIEW, RECEIVE_ALL_REVIEWS } from "../actions/review_actions";

export default function reviewsReducer(state={}, action) {
    Object.freeze(state);
    let newState;

    switch (action.type) {
        case RECEIVE_ALL_REVIEWS:
            newState = Object.assign({});
            action.reviews.map(review => newState[review.id] = review)
            return newState;
        case RECEIVE_REVIEW:
            return Object.assign({}, state, {[action.review.id]: action.review});
        case DELETE_REVIEW:
            newState = Object.assign({}, state);
            delete newState[action.reviewId];
            return newState;
        default:
            return state;
    }
}