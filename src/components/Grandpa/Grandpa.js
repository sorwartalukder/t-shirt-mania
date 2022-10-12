import React, { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'

export const RingContext = createContext('Matir ring')
export const MoneyContext = createContext(555)

const Grandpa = () => {
    // const ring = 'daimond ring'
    const [house, setHouse] = useState(1)
    const [money, setMoney] = useState(555)
    return (
        <RingContext.Provider value={[house, setHouse]}>
            <MoneyContext.Provider value={[money, setMoney]}>
                <div className='grandpa'>
                    <h1>grandpa</h1>
                    <section className='flex'>
                        <Father house={house} ></Father>
                        <Uncle house={house}></Uncle>
                        <Aunty house={house}></Aunty>
                    </section>
                </div>
            </MoneyContext.Provider>
        </RingContext.Provider>
    );
};

export default Grandpa;