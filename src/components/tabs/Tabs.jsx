import React, { useState } from 'react';
import './Tabs.scss'
import section4 from '../data/section4';
import Button from '../button/Button';
function Tabs() {
    const [toggle, setToggle] = useState(2);
    function updateToggle(id) {
        setToggle(id)

    }



    return (
        <div className='Tabs-section'>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <h1>Наша <span> продукция</span></h1>
                </div>
                <div className="button-row">
                    <button id={toggle === 1 ? "button2" : ""} onClick={() => updateToggle(1)}>Ламинатные тубы</button>
                    <button id={toggle === 2 ? "button2" : ""} onClick={() => updateToggle(2)}>Экструзионные тубы</button>
                    <button id={toggle === 3 ? "button2" : ""} onClick={() => updateToggle(3)}>Другая упаковка</button>
                </div>
                <div className="row d-flex justify-content-between">
                    {section4.map(s => (
                        <div className="col-2" id={toggle === 2 ? "" : "img-div"}>
                            <img src={s.img} alt="" />
                        </div>
                    ))}
                </div>

            </div>
            <Button>Перейти в каталог</Button>
        </div>
    );
}

export default Tabs;