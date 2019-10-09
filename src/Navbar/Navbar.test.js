import React from 'react';
import Navbar from './Navbar';
import { shallow } from 'enzyme';

describe('Navbar component',()=>{

    it('it should render without errors',()=>{
       const component = shallow(<Navbar/>)
       const wrapper = component.find('.MenuClass');
       expect(wrapper.length).toBe(1);
    })

    it('it should contain home section',()=>{
        const component=shallow(<Navbar />);
        const wrapper = component.find('.homeSection');
        expect(wrapper.length).toBe(1);
    })
    
    it('it should contain message section',()=>{
        const component = shallow(<Navbar />);
        const wrapper = component.find('.messageSection');
        expect(wrapper.length).toBe(1);
    })
    it('it should render dropdown section',()=>{
        const component = shallow(<Navbar />);
        const wrapper = component.find('.dropDownSection');
        expect(wrapper.length).toBe(1);
    })
    it('it should render sign up section',()=>{
        const component = shallow(<Navbar />);
        const wrapper = component.find('.signupSection');
        expect(wrapper.length).toBe(1);
    })
})