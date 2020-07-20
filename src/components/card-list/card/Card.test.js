import { shallow } from 'enzyme';
import React from 'react';
import { Card, mapStateToProps } from './Card';
import CardHeader from './card-header';
import CardBody from './card-body';

describe('Card', () => {
    let wrapper;
    let instance;

    const save = jest.fn();
    const ticked = jest.fn();

    const props = {
        card: {
            id: 1,
            title: 'title',
            info: 'info',
            tick: false,
        },
        onSave: save,
        readOnly: false,
        onTicked: ticked,
        match: { path: '/' },
        history: { push: jest.fn() },
    };

    beforeEach(() => {
        wrapper = shallow(<Card {...props} />);
        instance = wrapper.instance();
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
        expect(wrapper.find(CardHeader)).toHaveLength(1);
        expect(wrapper.find(CardHeader).props().title).toEqual('title');
    });

    it('should render CardBody', () => {
        expect(wrapper.find(CardBody)).toHaveLength(1);
        expect(wrapper.find(CardBody).props().info).toEqual('info');
    });

    it('should set state', () => {
        const state = { readOnlyReducer: { readOnly: false } };
        expect(mapStateToProps(state).readOnly).toEqual(false);
    });

    describe('functions', () => {
        it('should handle double click', () => {
            const spy = jest.spyOn(instance, 'doubleClickHandler');
            [false, true].forEach((value) => {
                wrapper.setState({ isEditMode: value });
                wrapper.find('div').at(0).simulate('doubleclick');
                expect(spy).toHaveBeenCalled();
            });
        });

        it('should call componentDidUpdate', () => {
            const spy = jest.spyOn(instance, 'undoHandler');
            wrapper.setState({ isEditMode: true });
            wrapper.setProps({ readOnly: true });
            expect(spy).toBeCalled();
        });

        it('should call save', () => {
            instance.saveHandler();
            expect(save).toBeCalled();
        });

        it('should call ticked', () => {
            instance.editHandler();
            expect(ticked).toBeCalled();
        });

        describe('change handlers', () => {
            it('should change title & tempTitle', () => {
                instance.changeTitleHandle({ target: { value: 'new' } });
                expect(wrapper.state().title).toEqual('new');
                expect(wrapper.state().tempTitle).toEqual('title');
            });

            it('should change title', () => {
                wrapper.setState({ tempTitle: 'tempTitle' });
                instance.changeTitleHandle({ target: { value: 'new' } });
                expect(wrapper.state().title).toEqual('new');
                expect(wrapper.state().tempTitle).toEqual('tempTitle');
            });

            it('should change info & tempInfo', () => {
                instance.changeInfoHandle({ target: { value: 'new' } });
                expect(wrapper.state().info).toEqual('new');
                expect(wrapper.state().tempInfo).toEqual('info');
            });

            it('should change info', () => {
                wrapper.setState({ tempInfo: 'tempInfo' });
                instance.changeInfoHandle({ target: { value: 'new' } });
                expect(wrapper.state().info).toEqual('new');
                expect(wrapper.state().tempInfo).toEqual('tempInfo');
            });
        });
    });
});
