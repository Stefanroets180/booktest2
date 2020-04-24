import React, { Component } from 'react';
import Rating from './Rating';
import { Media } from 'react-bootstrap';

class Product extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <Media>
                    <Media.Body>
                        <h5>{this.props.data.productName}</h5>

                        <p>
                            {this.props.data.description}
                        </p>
                    </Media.Body>
                    <img
                        width={64}
                        height={64}
                        className="ml-3"
                        src={this.props.data.imageUrl}
                        alt="Generic placeholder"
                    />
                    <Rating
                        rating={this.props.data.rating}
                        numOfReviews={this.props.data.numOfReviews}
                    />
                </Media>
            </div>
        );
    }
}

export default Product;
