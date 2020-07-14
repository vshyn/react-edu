import { shallow } from 'enzyme';
import React from 'react';
import { CardHeader } from './CardHeader';

describe('CardHeader', () => {
    let wrapper;

    const props = {
        title: 'title',
        isEditMode: false,
        onTicked: jest.fn(),
        onChanged: jest.fn(),
        onSave: jest.fn(),
        onUndo: jest.fn(),
        onEdit: jest.fn(),
        readOnly: false,
        authorized: true,
    };

    beforeEach(() => {
        wrapper = shallow(<CardHeader {...props} />);
    });

    it('should render h2 in not edit mode', () => {
        expect(wrapper.find('h2')).toHaveLength(1);
        expect(wrapper.contains(<h2>title</h2>)).toEqual(true);
    });

    it('should render checkbox in not edit mode', () => {
        expect(wrapper.find('input')).toHaveLength(1);
        expect(wrapper.find('input').props().type).toEqual('checkbox');
    });

    it('should render edit bnt if authorized & not readOnly', () => {
        expect(wrapper.find('MdEdit')).toHaveLength(1);
    });

    it('should render textarea & buttons in edit mode', () => {
        wrapper.setProps({ isEditMode: true });
        expect(wrapper.find('textarea')).toHaveLength(1);
        expect(wrapper.find('textarea').props().value).toEqual('title');
        expect(wrapper.find('MdUndo')).toHaveLength(1);
        expect(wrapper.find('MdSave')).toHaveLength(1);
    });
});
