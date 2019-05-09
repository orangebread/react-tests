import React from 'react';
import { mount } from 'enzyme';
import CommentBox from "../CommentBox";
import Providers from '../../providers';

let wrapped;
beforeEach(() => {
	wrapped = mount(
		<Providers>
			<CommentBox/>
		</Providers>
	);
});

afterEach(() => {
	wrapped.unmount();
});

it('has a text area and two buttons', () => {
	expect(wrapped.find('textarea').length).toEqual(1);
	expect(wrapped.find('button').length).toEqual(2);
});

describe('the text area', () => {
	beforeEach(() => {
		// simulate event handler
		wrapped.find('textarea').simulate('change', {
			target: { value: 'new comment'}
		});
		wrapped.update(); // update component
	});

	it('has a text area that users can type in', () => {
		expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
	});

	it('when form submit, text is cleared', () => {
		wrapped.find('form').simulate('submit');
		wrapped.update();
		expect(wrapped.find('textarea').prop('value')).toEqual('');
	});
});