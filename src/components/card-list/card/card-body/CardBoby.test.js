import { shallow } from 'enzyme';
import React from 'react';
import { CardBody, mapStateToProps } from './CardBody';

describe('CardBody', () => {
    let wrapper;

    const props = {
        isEditMode: false,
        readOnly: true,
        info: 'info',
        changed: jest.fn(),
    };

    beforeEach(() => {
        wrapper = shallow(<CardBody {...props} />);
    });

    it('should render p in not edit mode & !readOnly', () => {
        expect(wrapper.find('p')).toHaveLength(1);
        expect(wrapper.contains(<p>info</p>)).toEqual(true);
    });

    it('should render p in not edit mode & readOnly', () => {
        wrapper.setProps({ isEditMode: false, readOnly: false });
        expect(wrapper.find('p')).toHaveLength(1);
        expect(wrapper.contains(<p>info</p>)).toEqual(true);
    });

    it('should render p in edit mode & !readOnly', () => {
        wrapper.setProps({ isEditMode: true, readOnly: true });
        expect(wrapper.find('p')).toHaveLength(1);
        expect(wrapper.contains(<p>info</p>)).toEqual(true);
    });

    it('should render textarea in edit mode & readOnly', () => {
        wrapper.setProps({ isEditMode: true, readOnly: false });
        expect(wrapper.find('textarea')).toHaveLength(1);
        expect(wrapper.find('textarea').props().value).toEqual('info');
    });

    it('should set state', () => {
        const state = { readOnlyReducer: { readOnly: false } };
        expect(mapStateToProps(state).readOnly).toEqual(false);
    });
});
