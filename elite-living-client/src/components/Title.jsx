

import waveimg from '../assets/wave.svg'

const Title = ({heading1, heading2, paragraph}) => {
    return (
        <div className="text-center flex flex-col items-center text-[#586167] my-12">
            <img src={waveimg} alt="" />
            <h1 className="text-3xl pb-3 font-bold">{heading1} <span className="text-3xl font-light">{heading2}</span></h1>
            
            <p className="text-base max-w-2xl mx-auto text-[#586167] font-normal">{paragraph}</p>
        </div>
    );
};

export default Title;