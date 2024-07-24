import React from 'react'
import './ModalLoginForm.css'
import { motion, AnimatePresence } from 'framer-motion'
function ModalLoginForm({ onCancel, visible }) {
    return (
        <AnimatePresence>
            {visible&&<div
                className='ModalLoginForm'>
                {<motion.div
                initial={{opacity:0,y:-40}}
                animate={{opacity:1,y:0}}
                transition={{
                    duration:0.5
                }}
                exit={{opacity:0,y:40}}
                    className='ModalLoginMainDiv'>
                    <div onClick={onCancel} className='CancelButtonLoginForm'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f6f4f4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-x"><circle cx="12" cy="12" r="10" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg>
                    </div>
                    <div className='ModalLoginHeading'>
                        Enter Your Email To Get Your Style! <hr style={{ marginTop: '2px' }} />
                    </div>
                    <div className='ModalLoginSubHeading'>
                        You'll receive our complementary detailed style descriptions and inspirational images in your style.
                    </div>
                    <div className='ModalLoginEmailSection'>
                        <div>Enter your email below to save and continue</div>
                        <div>
                            <input type="email" name="" id="" className='EmailInputLoginForm' />
                        </div>
                        <button className='SaveAndContinueButton'>Save & Continue</button>
                    </div>
                    <div className='OrHoriSeperator'>
                        <div className='OrSeperatorLines'></div>
                        Or
                        <div className='OrSeperatorLines'></div>
                    </div>
                    <div className='GoogleButton'>
                        <img className="GoogleLogo" src="../../google_logo.png" alt="" />
                        <div className='GoogleButtonTitle'>Continue With Google</div>
                    </div>
                    <div className='ModalLoginFooter'>
                        <div>We will never share or use your email inappropriately</div>
                        <div style={{ fontSize: '14px', textAlign: 'center' }}>By signing up, you agree to our <a style={{ color: 'chocolate' }} href='#'>Terms and Conditions</a></div>
                    </div>
                </motion.div>}
            </div>}
        </AnimatePresence>
    )
}

export default ModalLoginForm