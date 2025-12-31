import { useRef, useState } from "react";
import MidCta from "../components/MidCta/MidCta";
import BottomCta from "../components/BottomCta/BottomCta";
import SignupForm from "../components/SignupForm/SignupForm";

const Landing = () => {
    const [isSignupOpen, setIsSignupOpen] = useState(false);
    const signupSectionRef = useRef<HTMLElement | null>(null);

    const openSignup = () => {
        setIsSignupOpen(true);

        // מחכים שהטופס יופיע ב-DOM ואז גוללים אליו
        requestAnimationFrame(() => {
            signupSectionRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        });
    };

    const closeSignup = () => {
        setIsSignupOpen(false);
    };

    return (
        <>

     
            <MidCta onSignupClick={openSignup} />

            {/* ... שאר הסקשנים שלך ... */}

            {/* כפתור נוסף (בתחתית / איפה שיש בעיצוב) */}
            <BottomCta onSignupClick={openSignup} />

            {/* הטופס – כללי ונפתח מכל מקום */}
            <SignupForm
                ref={signupSectionRef}
                isOpen={isSignupOpen}
                onClose={closeSignup}
            />
        </>
    );
};

export default Landing;
