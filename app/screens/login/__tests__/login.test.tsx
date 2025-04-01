import React from "react";
import { render } from "@testing-library/react-native";
import { useRouter } from "expo-router";

import Login from "../login";

jest.mock('expo-router', () => ({
    __esModule: true,
    useRouter: () =>({
        push: jest.fn(),
        replace: jest.fn()
    }),
    Stack: {
        screen: jest.fn()
    }
}))

describe("Login Screen", () => {
    const mockRouter = {
        push: jest.fn()
    }
    beforeEach(() => {
        jest.clearAllMocks();
        (useRouter as jest.Mock).mockReturnValue(mockRouter);
    })

    it("renders correctly", () =>{
        const {getByText} = render(<Login />)

        expect(getByText("Log in to Chatbox")).toBeTruthy()
    })
    it("matches snapshot", () =>{
        const tree = render(<Login />)
        expect(tree).toMatchSnapshot()
    })
})