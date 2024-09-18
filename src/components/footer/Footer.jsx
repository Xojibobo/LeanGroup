import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer className='footer'>

                <div className="footer-head">
                    <img src="./assets/logo2.svg" alt="logo2" />
                    <div className="logoSocialMedias">
                        <img className='logoSocial-media' src="./assets/vk.svg" alt="vk" />
                        <img className='logoSocial-media' src="./assets/fb.svg" alt="vk" />
                        <img className='logoSocial-media' src="./assets/linkedin.svg" alt="vk" />
                    </div>
                </div>
                <div className="footer-texts-info">
                    <div className="footer-text-main">
                        <div className="footer-text-info">
                            <h2>Продукция</h2>
                            <div className='footer-text-info-small'>
                                <p>Ламинатные тубы</p>
                                <p>Экструзионные тубы</p>
                                <p>Другая упаковка</p>
                            </div>
                        </div>

                        <div className="footer-text-info">
                            <h2>Компания</h2>
                            <div className='footer-text-info-small'>
                                <p>О нас</p>
                                <p>Наша команда</p>
                                <p>Сертификаты</p>
                            </div>
                        </div>

                        <div className="footer-text-info">
                            <h2>Разделы</h2>
                            <div className='footer-text-info-small'>
                                <p>Контакты</p>
                                <p>Новости</p>
                                <p>Вакансии</p>
                            </div>
                        </div>
                    </div>

                    <div className="call-info-divs">
                        <div className="call-info-div">
                            <div className="call-city">
                                <h2>Беларусь</h2>
                                <div>
                                    <p>+375 (17) 270 53 77</p>
                                    <p>+375 (17) 270 53 78</p>
                                </div>
                            </div>
                            <div className="call-city">
                                <h2>Европа</h2>
                                <div>
                                    <p>+48 73 1111 044</p>
                                </div>
                            </div>
                        </div>

                        <div className="call-info-div">
                            <div className="call-city">
                                <h2>Москва</h2>
                                <div>
                                    <p>+7 (495) 280 73 44</p>
                                    <p>+7 (495) 280 73 44</p>
                                </div>
                            </div>
                            <div className="call-city">
                                <h2>Екатеринбург</h2>
                                <div>
                                    <p>+7 (343) 346 82 06</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-last-texts">
                    <p>© 2022 Leangroup. All Rights Reserved.</p>
                    <p>Разработка и продвижение сайтов SkyWeb.by</p>
                </div>
            </footer >
        )
    }
}
