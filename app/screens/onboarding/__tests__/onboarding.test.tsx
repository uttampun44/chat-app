import React from "react";
import {render } from "@testing-library/react-native";
import OnBoarding from "../onboarding";
import {useRouter } from "expo-router";

jest.mock('expo-router', () => ({
    __esModule: true,
    default: {
        useRouter: {
            push: jest.fn(),
            replace: jest.fn()
        }
    },
    useRouter: {
        push: jest.fn(),
        replace: jest.fn()
    },
    Stack:{
        screen: jest.fn()
    }
}))
describe("onboarding screen", () =>{
    // for router
    const mockRouter = {
        push: jest.fn()
    };

    beforeEach(() => {
        jest.clearAllMocks();
        (useRouter as jest.Mock).mockReturnValue(mockRouter);
    });

    it("renders correctly", () =>{
        const {getByText} = render(<OnBoarding />)
        expect(getByText("Connect friends")).toBeTruthy()
        expect(getByText("easily & quickly")).toBeTruthy()
        expect(getByText("Our chat app is the perfect way to stay connected with friends and family")).toBeTruthy()
        expect(getByText("sign up with mail")).toBeTruthy()
        expect(getByText("Existing Account ?")).toBeTruthy()
        expect(getByText("Log in")).toBeTruthy()
    });
    
    

    it("displays social icons correctly", ()=>{
       const {getAllByTestId} = render(<OnBoarding />)
       const socialIcons = getAllByTestId("social-icon")
       expect(socialIcons).toHaveLength(3)
    })

    it("matches snapshot", ()=>{
        const tree = render(<OnBoarding />)
        expect(tree).toMatchSnapshot()
    })
})