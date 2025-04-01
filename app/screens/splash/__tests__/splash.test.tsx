import React from "react";
import { render } from "@testing-library/react-native";
import Splash from "../splash";
import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Mock dependencies
jest.mock('expo-router', () => ({
    useRouter: jest.fn(),
    Stack: {
        Screen: jest.fn()
    }
}));

describe("Splash screen", () => {
    const queryClient = new QueryClient();

    // Create a wrapper component with all required providers
    const wrapper = ({ children }: { children: React.ReactNode }) => (
        <QueryClientProvider client={queryClient}>
            <NavigationContainer>
                {children}
            </NavigationContainer>
        </QueryClientProvider>
    );

    beforeEach(() => {
        jest.clearAllMocks();
        queryClient.clear();
    });

    it("renders correctly", () => {
        const tree = render(<Splash />);
        expect(tree).toBeTruthy();
    });

   
});