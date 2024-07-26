import React from 'react'
import './DesignQuiz.css'
import { useState, useEffect } from 'react'
import ModalLoginForm from './ModalLoginForm';
import { motion } from 'framer-motion'
function DesignQuiz() {
    const [q_index, setQIndex] = useState(0);
    const left_image_resource = ["https://images.pexels.com/photos/2883049/pexels-photo-2883049.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/2251247/pexels-photo-2251247.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/5644353/pexels-photo-5644353.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/23916863/pexels-photo-23916863/free-photo-of-luxury-interior-design.png?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/23916869/pexels-photo-23916869/free-photo-of-interior-design-of-luxury-living-room.png?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/23916837/pexels-photo-23916837/free-photo-of-pool-in-house.png?auto=compress&cs=tinysrgb&w=600"];
    const right_image_resource = ["https://images.pexels.com/photos/23119651/pexels-photo-23119651/free-photo-of-interior-design-of-a-house.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/6480707/pexels-photo-6480707.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/210547/pexels-photo-210547.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/3797991/pexels-photo-3797991.jpeg?auto=compress&cs=tinysrgb&w=600"]
    const [choices, setChoices] = useState(Array(left_image_resource.length).fill(0))
    const [loginEnable, setLoginEnable] = useState(0);
    useEffect(() => {
        if (q_index >= choices.length){
            setQIndex(choices.length-1);setLoginEnable(1);
            setChoices((prev)=>(prev.map((choice)=>(choice == 0?-1:choice))));
        }
    }, [q_index, choices])
    const onCancel = () => { setLoginEnable(0); setQIndex(0) }
    const option_select = (choice) => {
        setChoices((prev) => (prev.map((curr, ind) => ind === q_index ? choice : curr)))
    }
    const bg_image_option = (choice, index) => {
        if (choice === 0) {
            return "https://i.pinimg.com/736x/05/16/23/0516238ddb8f35a2193e063d2db18e5b.jpg";
        } else if (choice === 1) {
            return left_image_resource[index];
        } else if (choice === 2) {
            return right_image_resource[index];
        } else {
            return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAA1BMVEVWVlahomHLAAAASElEQVR4nO3BMQEAAADCoPVPbQwfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIC3AcUIAAFkqh/QAAAAAElFTkSuQmCC"
        }
    }

    const variants_left = {
        visible: {
            opacity: 1,
            x: 0
        },
        hidden: {
            opacity: 0,
            x: -20
        }
    }
    const variants_right = {
        visible: {
            opacity: 1,
            x: 0
        },
        hidden: {
            opacity: 0,
            x: 20
        }
    }

    return (
        <div className='DesignSection'>
            {/* Heading for the quiz section */}
            <div className='DesignQuizHeading'>Click on the style you prefer</div>
            <div className='DesignQuizSubHeading'>Point us to the styles you like by clicking on an image</div>

            {/* Main Section for the Quiz */}
            <div className='ImageQuestion'>
                <motion.div variants={variants_left} initial="hidden" animate="visible" key={q_index} transition={{ duration: 0.3, type: 'spring' }}>
                    <img src={left_image_resource[q_index]} onClick={() => { option_select(1); setQIndex((prev) => prev + 1); }} alt="first_option" className='imageOptions' />
                </motion.div>
                <div className='OptionsSeperator'>
                    <div className='OrPartSeperator'>OR
                    </div>
                    <div className='NeitherOption' onClick={() => { option_select(-1); setQIndex((prev) => prev + 1); }}>
                        Neither
                    </div>
                </div>
                <motion.div variants={variants_right} initial="hidden" animate="visible" key={q_index + 2} transition={{ duration: 0.3, type: 'spring' }} >
                    <img src={right_image_resource[q_index]} onClick={() => { option_select(2); setQIndex((prev) => prev + 1); }} alt="second_option" className='imageOptions' />
                </motion.div>
            </div>

            {/* Button Section maintaing state */}
            <div style={{width:'100vw', display:'flex', justifyContent:'center', backgroundColor:'rgb(235,235,235'}}>
                <div className='NavigationButtons'>
                    {choices.map((choice, index) => (
                        <div className='NavigationImage' style={{ backgroundImage: `url(${bg_image_option(choice, index)})` }} alt='none' onClick={() => { setQIndex(index) }} />
                    ))}
                </div>
            </div>
            <motion.div initial={{ opacity: 0, y: 40, scaleX: 0, scaleY: 0 }} animate={{ opacity: 1, y: 0, scaleX: 1, scaleY: 1, transition: { duration: 0.3, type: 'spring' } }} className='SkipAllButton' onClick={() => { setQIndex(choices.length) }}>SKIP ALL</motion.div>
            {/* Modal Login Form */}
            <ModalLoginForm onCancel={onCancel} visible={loginEnable} />
        </div>
    )
}
export default DesignQuiz