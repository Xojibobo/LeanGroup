import { useState } from "react";
import { IoIosMoon } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {

    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };


    return (
        <header className={darkMode ? 'dark-mode' : ''}>
            <img src="./assets/logo.svg" alt="logo1" />
            <ul>
                <li><span>Продукция</span>
                    <div className='header-li-div'>
                        <p className='header-li-div-p'>Ламинатные тубы</p>
                        <p className='header-li-div-p'>Экструзионные тубы</p>
                        <p className='header-li-div-p'>Другая упаковка</p>
                    </div>

                </li>
                <li><span>Сертификаты</span>
                    <div className='header-li-div'>
                        <p className='header-li-div-p'>Ламинатные тубы</p>
                        <p className='header-li-div-p'>Экструзионные тубы</p>
                        <p className='header-li-div-p'>Другая упаковка</p>
                    </div></li>
                <li><span>Наша команда</span>
                    <div className='header-li-div'>
                        <p className='header-li-div-p'>Ламинатные тубы</p>
                        <p className='header-li-div-p'>Экструзионные тубы</p>
                        <p className='header-li-div-p'>Другая упаковка</p>
                    </div></li>
                <li><span>О нас</span>
                    <div className='header-li-div'>
                        <p className='header-li-div-p'>Ламинатные тубы</p>
                        <p className='header-li-div-p'>Экструзионные тубы</p>
                        <p className='header-li-div-p'>Другая упаковка</p>
                    </div></li>
                <li><span>Новости</span>
                    <div className='header-li-div'>
                        <p className='header-li-div-p'>Ламинатные тубы</p>
                        <p className='header-li-div-p'>Экструзионные тубы</p>
                        <p className='header-li-div-p'>Другая упаковка</p>
                    </div></li>
                <li><span>Вакансии</span>
                    <div className='header-li-div'>
                        <p className='header-li-div-p'>Ламинатные тубы</p>
                        <p className='header-li-div-p'>Экструзионные тубы</p>
                        <p className='header-li-div-p'>Другая упаковка</p>
                    </div></li>
                <li className='header-li'><span>Контакты</span>
                    <div className='header-li-div'>
                        <p className='header-li-div-p'>Ламинатные тубы</p>
                        <p className='header-li-div-p'>Экструзионные тубы</p>
                        <p className='header-li-div-p'>Другая упаковка</p>
                    </div></li>
            </ul>
            <div className='light-icons'>

                <IoIosMoon className='light-icon' onClick={toggleDarkMode} />
                <RxHamburgerMenu className='hamburger-menu' />
            </div>
        </header>
    )
}

export default Header

