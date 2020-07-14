import { shallow } from 'enzyme';
import React from 'react';
import { CardBody } from './CardBody';

describe('CardBody', () => {
    let wrapper;

    const props = {
        readOnly: true,
        isEditMode: false,
        info: 'info',
        changed: jest.fn(),
    };

    beforeEach(() => {
        wrapper = shallow(<CardBody {...props} />);
    });

    it('should render p in not edit mode', () => {
        expect(wrapper.find('p')).toHaveLength(1);
        expect(wrapper.contains(<p>info</p>)).toEqual(true);
    });

    it('should render textarea in edit mode', () => {
        wrapper.setProps({ readOnly: false, isEditMode: true });
        expect(wrapper.find('textarea')).toHaveLength(1);
        expect(wrapper.find('textarea').props().value).toEqual('info');
    });
});
