import React, { Component } from 'react'
import news from '../data/news';
import Button from '../button/Button';
export default class News extends Component {
    render() {

        return (
            <div className='news-div'>
                <h1 className='news-h1'>Новости</h1>
                <div className='news-sections'>
                    {news.map(n => (
                        <div key={n.date} className='news-section'>
                            <img src={n.img} alt="images" />
                            <div className='news-section-texts'>
                                <p className='news-section-text1'>{n.date}</p>
                                <p className='news-section-text2'>{n.info}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <Button>Все новости</Button>
            </div>
        )
    }
}


