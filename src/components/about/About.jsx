import React, { Component } from 'react'


export default class About extends Component {
    render() {
        return (
            <div className='About-section'>
                <div className="container">
                    <h1 className='d-flex justify-content-center'>О компании <span>LEANGROUP</span></h1>
                    <div className="row my-4">
                        <div className="col-6 " >
                            <img src="./assets/video.svg" alt="" />
                        </div>
                        <div className="col-6">
                            <p className='about-subtitle'>
                                Компания ООО «ЛеанГрупп» начала свою деятельность в 1999 году и на сегодняшний день является ведущей компанией по производству ламинатных и экструзионных туб.
                            </p>
                            <p className='about-subtitle'>
                                Имея две технологии – для производства ламинатных и экструзионных туб, мы предлагаем вам широкий спектр возможностей. Большим преимуществом является собственный печатный цех в ламинате и in-line печать в экструзии с возможностью различных дополнительных опций декора. Особое внимание уделяется работе с поставщиками для контроля и поддержания качества производимой нами продукции.
                            </p>
                            <p>С января 2018 года компания стала членом Европейской Ассоциации производителей туб (ETMA), что подтверждает сильную позицию бренда и на рынке Европы. </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
