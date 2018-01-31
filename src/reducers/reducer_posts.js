import _ from "lodash";
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from "../actions/index";
export default function(state = {}, action) {
	switch (action.type) {
		case DELETE_POST:
			// this is for an object
			return _.omit(state, action.payload);
			// if we have an array we use
			// return _.reject(state, post => post.id === action.payload);
		case FETCH_POST:
			// Doing With ES5 Syntax
			// const post = action.payload.data;
			// const newState = {...state}
			// newState[post.id] = post;
			// return newState;
			// Doing With ES6 Syntax
			const { data } = action.payload;
			return { ...state, [data.id]: data };
		case FETCH_POSTS:
			return _.mapKeys(action.payload.data, "id");
		default:
			return state;
	}
}
