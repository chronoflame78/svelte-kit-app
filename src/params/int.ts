import type { ParamMatcher } from '@sveltejs/kit';

export const match: ParamMatcher = (param) => {
	return Number.isInteger(+param) && +param > 0; //+: type parsed. If it it string then convert to int
};
