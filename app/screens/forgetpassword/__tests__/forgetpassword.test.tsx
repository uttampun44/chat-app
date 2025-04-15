import { render } from "@testing-library/react-native"
import ForgetPassword from "../forgetpassword"

describe("forgetpassword", () =>{

    // it renders correctly means it renders without crashing
    it("renders correctly", () =>{
        const {getByText} = render(<ForgetPassword/>)
         
        const expectText = ["Your Email", "Send OTP", "Haven't receive OTP? ?", "Resend"]
      
        expectText.forEach(text => {
            expect(getByText(text)).toBeTruthy()
        })
    })

    // it matches snapshot means it renders correctly
    it("matches snapshot", () =>{
        const tree = render(<ForgetPassword />)
        expect(tree).toMatchSnapshot()
    })
})