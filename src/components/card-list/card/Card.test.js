import { shallow } from 'enzyme';
import React from 'react';
import { Card } from './Card';

describe('Card', () => {
    let wrapper;

    const props = {
        card: {
            id: 1,
            title: 'title',
            info: 'info',
            tick: false,
        },
        onSave: jest.fn(),
        readOnly: false,
        onTicked: jest.fn(),
        match: { path: '/' },
    };

    beforeEach(() => {
        wrapper = shallow(<Card {...props} />);
    });

    it('Card should exist', () => {
        expect(wrapper.exists('.card')).toEqual(true);
    });

    it('Card should change color', () => {
        expect(wrapper.find('.card').prop('style')).toEqual({ color: 'green' });
        wrapper.setProps({ card: { ...props.card, tick: true } });
        expect(wrapper.find('.card').prop('style')).toEqual({ color: 'red' });
    });

    it('should render CardHeader', () => {
        expect(wrapper.find('CardHeader')).toHaveLength(1);
        expect(wrapper.find('CardHeader').props().title).toEqual('title');
    });

    it('should render CardBody', () => {
        expect(wrapper.find('CardBody')).toHaveLength(1);
        expect(wrapper.find('CardBody').props().info).toEqual('info');
    });
});
