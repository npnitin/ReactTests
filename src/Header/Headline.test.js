import React from 'react';
import Headline from './Headline';
import { shallow } from 'enzyme';
import { findByTestAtrr } from './../Utils';

const setUp = (props={}) =>{
    const component = shallow(<Headline {...props} />)
    return component;
}
describe('Headline Component',()=>{

    describe('Have props',()=>{

        let component ;
        beforeEach(()=>{
            const props ={
                header:'Test Header',
                desc:'Test description'
            }
            component = setUp(props);
        })

        it('Should render without error',()=>{
            const wrapper = findByTestAtrr(component,'HeadlineComponent');
            expect(wrapper.length).toBe(1);
        })

        it('Should render header',()=>{
            const wrapper = findByTestAtrr(component,'header');
            expect(wrapper.length).toBe(1);
        })

        it('Should render description',()=>{
            const wrapper = findByTestAtrr(component,'desc');
            expect(wrapper.length).toBe(1);
        })

    })


    describe('Do NOT Have props',()=>{

        let component ;
        beforeEach(()=>{
            component = setUp();
        })
        it('Should render without error',()=>{
            const wrapper = findByTestAtrr(component,'HeadlineComponent');
            expect(wrapper.length).toBe(1);
        })
        it('Should not render header',()=>{
            const wrapper = findByTestAtrr(component,'header');
            expect(wrapper.length).toBe(0);
        })

        it('Should not render description',()=>{
            const wrapper = findByTestAtrr(component,'desc');
            expect(wrapper.length).toBe(0);
        })
    })

})