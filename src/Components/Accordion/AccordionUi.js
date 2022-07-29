import React from 'react';

const AccordionUi = ({data, active, onToggle}) => {
    
    const { ans, ques } = data;
    return (
        <div className='accordion-container'>
            <li className={active ? "Active" : "nonActive"}>
                <button onClick={onToggle} className="acc-btn">
                    <div className='que-p'>
                        <p>{ques}</p>
                        <span className={active ? "drop-down-on" : "drop-down-off"}>
                            {active? "" : ""}
                        </span>
                    </div>
                </button>
                <div className={active ? "acc-ans" : "acc-ans-none"}>
                    <p className='text-start'>{ans}</p>
                </div>
            </li>
        </div>
    );
};

export default AccordionUi;