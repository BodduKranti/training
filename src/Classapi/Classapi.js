import React, { Component } from "react";
import Popupfetchprodct from "./Popupdatafetch/Popupfetchproduct";

export default class Classapi extends Component {
    constructor() {
        super();

        this.state = {
            storeProduct: [],
            isPopupShow:false,
            showprdctPop:{}
        }
    }

    componentDidMount() {
        this.getPrduct();
    }

    getPrduct = () => {
        fetch('https://dummyjson.com/products')
            .then((res) => res.json())
            .then((result) => {
                this.setState({ storeProduct: result.products })
            })
    }

    showProduct = (product) => {
        this.setState({isPopupShow:true})
        this.setState({showprdctPop:product})
        console.log(this.state.showprdctPop)
    }
   

    render() {

        const getCategory = [...new Set(this.state.storeProduct.map((cat)=>{return cat.category}))]
        const getBrand = [...new Set(this.state.storeProduct.map((brand)=>{return brand.brand}))]
        console.log(getBrand)

        return (
            <>
                <div className="container">
                    <h1>Fetch api</h1>
                    <div className="row">
                        <div className="col-md-3">
                            <h5>Category</h5>
                            <ul className="list-unstyled">
                                {getCategory.map((cat)=>{
                                    return(
                                        <>
                                            <li className="text-capitalize">{cat}</li>
                                        </>
                                    )
                                })}
                            </ul>

                            <h5>Brand</h5>
                            <ul className="list-unstyled">
                                {getBrand.map((brand)=>{
                                    return(
                                        <>
                                            <li className="text-capitalize">{brand}</li>
                                        </>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className="col-md-9">
                            <div className="row">
                                {this.state.storeProduct.map((itms) => {
                                    return (
                                        <>
                                            <div className="col-md-4 mb-4">
                                                <div className="card  h-100 ">
                                                    <figure className="text-center">
                                                        <img style={{maxHeight:'150px'}} src={itms.thumbnail} className="img-fluid" alt="" />
                                                    </figure>
                                                    <div className="card-header">
                                                        <h5>{itms.title}</h5>
                                                    </div>
                                                    <div className="card-body">
                                                        <div className="d-flex justify-content-between">
                                                            <div className="badge bg-primary">
                                                                {itms.category}
                                                            </div>
                                                            <div className="badge bg-warning">
                                                                {itms.brand}
                                                            </div>
                                                        </div>
                                                        <p className="my-2">
                                                            {itms.description.slice(0,40)}
                                                        </p>
                                                        <div className="p-1 bg-primary text-center fs-5 fw-bold">
                                                            {itms.price}
                                                        </div>

                                                    </div>
                                                    <div className="card-footer d-flex">
                                                        <button className="btn btn-primary" onClick={()=>this.showProduct(itms)} >View Product</button>
                                                        <button className="btn btn-danger">Add to Cart</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                <Popupfetchprodct
                    show={this.state.isPopupShow} 
                    onHide={()=>this.setState({isPopupShow:false})}
                    product={this.state.showprdctPop}
                />
            </>
        )
    }
}