import React from "react";

export default ({startPos, isEnd, onContentChange}) => {

    const firstElement = startPos === 0 ?
        <li className="page-item"><span className="page-link">Next</span></li>
        :
        <li className="page-item" onClick={onContentChange}>
            <span className="page-link" aria-label="Previous" data-name='previous'>
                <i className="fa fa-chevron-left" data-name='previous'/>
            </span>
        </li>;

    const secondElement = isEnd ?
        <li className="page-item"><span className="page-link">Previous</span></li>
        :
        <li className="page-item" onClick={onContentChange}>
            <span className="page-link" aria-label="Next" data-name='next'>
                <i className="fa fa-chevron-right" data-name='next'/>
            </span>
        </li>;

    return (
        <nav>
            <ul className="pagination">
                {firstElement}
                {secondElement}
            </ul>
        </nav>
    );
}