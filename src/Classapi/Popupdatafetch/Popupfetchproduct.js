import React from "react";
import { Component } from "react";
import { Button, Modal } from "react-bootstrap";

export default class Popupfetchprodct extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <>
                <Modal {...this.props}
                    size="lg"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title>
                            {this.props.product.title}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="row">
                            <div className="col-md-6">
                                <figure>
                                    <img src={this.props.product.thumbnail} className="img-fluid" alt="" />
                                </figure>
                            </div>
                            <div className="col-md-6">
                                <div className="fs-4">
                                    Category : <span className="badge bg-primary">{this.props.product.category}</span>
                                </div>
                                <div className="fs-4">
                                    Brand : <span className="badge bg-warning">{this.props.product.brand}</span>
                                </div>
                                <div className="fs-4">
                                    Price : <span className="fw-bold">${this.props.product.price}</span>
                                </div>
                                <div className="fs-4">
                                    Description :
                                    <p className="fs-6">
                                        {this.props.product.description}
                                    </p>
                                </div>
                                <div className="col-md-7 col-sm-12">
                                    <div className="d-flex justify-content-between">
                                        <Button className="btn btn-danger">Buy Now</Button>
                                        <Button className="btn btn-wanring">Add To Cart</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>

                </Modal>
            </>
        )
    }
}