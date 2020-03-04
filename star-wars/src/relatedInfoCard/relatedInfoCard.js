import React from "react";
import './related-info-card.css'
import CardItem from './cardItem';

export default () => {
    return (
            <div className='col-md-6'>
                <div className="card">
                    <div className="card-header">
                        Related Info
                    </div>
                    <div className="card-body row">
                        <CardItem />
                        <CardItem />
                        <CardItem />
                        <CardItem />
                    </div>
                    <div className="card-footer">
                        <nav aria-label="Page navigation example">
                            <ul className="pagination">
                                <li className="page-item">
                                    <a className="page-link" href="#!" aria-label="Previous">
                                        <i className="fa fa-chevron-left"></i>
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#!" aria-label="Next">
                                        <i className="fa fa-chevron-right"></i>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            )
}