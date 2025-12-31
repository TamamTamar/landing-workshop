import { useRef, useState } from "react";
import AudienceBlock from "../components/AudienceBlock/AudienceBlock";
import SignupForm from "../components/SignupForm/SignupForm";
import Hero from "../components/Hero/Hero";

const Landing = () => {
    const [isSignupOpen, setIsSignupOpen] = useState(false);
    const signupSectionRef = useRef<HTMLElement | null>(null);


    const closeSignup = () => {
        setIsSignupOpen(false);
    };

    return (
        <>
            <Hero />
            <AudienceBlock />
            <SignupForm
                ref={signupSectionRef}
                isOpen={isSignupOpen}
                onClose={closeSignup}
            />
        </>
    );
};

export default Landing;
