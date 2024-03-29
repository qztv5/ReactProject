"use strict"

import React from 'react';
import PropTypes from 'prop-types';
import { BookList } from '../components/BookList';

export class Books extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <BookList bookList={this.props.bookList}/>
            </div>
        );
    }
}

Books.propTypes = {
    bookList: PropTypes.array.isRequired,
    bookModal: PropTypes.bool
};
