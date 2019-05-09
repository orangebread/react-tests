import commentsReducer from '../comments';
import { SAVE_COMMENT } from "../../actions/types";

it('handles actions of type SAVE_COMMENT', () => {
	const comment = 'new comment';
	const action = {
		type: SAVE_COMMENT,
		payload: comment
	};

	const newState = commentsReducer([], action);

	expect(newState).toEqual([comment]);
});

it('handles action with unknown type', () => {
	 const newState = commentsReducer([], {});
	 expect(newState).toEqual([]);
});