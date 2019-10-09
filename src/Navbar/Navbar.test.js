import React from 'react';
import Navbar from './Navbar';
import { shallow } from 'enzyme';
import {findByTestAtrr} from './../Utils';

const setUp = (props={})=>{
    const component = shallow(<Navbar />);
    return component;
}
describe('Navbar component',()=>{

    let component ;
    beforeEach(()=>{
        component = setUp();
    })

    it('it should render without errors',()=>{
       const wrapper = component.find('.MenuClass');
       expect(wrapper.length).toBe(1);
    })

    it('it should contain home section',()=>{
        const wrapper = findByTestAtrr(component,'homeSection');
        expect(wrapper.length).toBe(1);
    })
    
    it('it should contain message section',()=>{
        const wrapper = findByTestAtrr(component,'messageSection');
        expect(wrapper.length).toBe(1);
    })
    it('it should render dropdown section',()=>{
        const wrapper = findByTestAtrr(component,'dropDownSection');
        expect(wrapper.length).toBe(1);
    })
    it('it should render sign up section',()=>{
        const wrapper = findByTestAtrr(component,'signupSection');
        expect(wrapper.length).toBe(1);
    })
})