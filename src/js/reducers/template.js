import { TEMPLATE } from "../constants/template";

const initialState = {
	template: true
};

export default (state = initialState, action) => {
	switch (action.type) {
		case TEMPLATE:
			return { ...state, template: !state.template };
		default:
			return state;
	}
};
