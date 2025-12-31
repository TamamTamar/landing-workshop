import { useRef, useState } from "react";
import AudienceBlock from "../components/AudienceBlock/AudienceBlock";
import SignupForm from "../components/SignupForm/SignupForm";
import Hero from "../components/Hero/Hero";
import MidStrip from "../components/MidStrip/MidStrip";

const Landing = () => {
    const [isSignupOpen, setIsSignupOpen] = useState(false);
    const signupSectionRef = useRef<HTMLElement | null>(null);


    const closeSignup = () => {
        setIsSignupOpen(false);
    };

    return (
        <>
            <Hero />
            <MidStrip ctaHref="#signup" />
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
