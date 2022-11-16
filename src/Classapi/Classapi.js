import React from "react";
import { Badge, Button, Card } from "react-bootstrap";

export default class Classapi extends React.Component {
    constructor() {
        super();

        this.state = {
            storeProduct: []
        }
    }

    componentDidMount() {
        this.getData();
    }


    getData = () => {
        fetch('https://dummyjson.com/products')
            .then((res) => res.json())
            .then((results) => {
                this.setState({ storeProduct: results.products })
            })
            .catch((error) => { console.log(error) })
    }

    render() {

       
        

        const Cat = [...new Set(this.state.storeProduct.map((itms)=>itms.category))];


        console.log(this.state.storeProduct)

      

        return <>
            <h1>Fetch Api in Class Component</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-12">
                        <h3>Category</h3>
                        <ul>
                            {Cat.map((category)=>{
                                return(
                                    <>
                                        <li>{category}</li>
                                    </>
                                )
                                
                            })}
                        </ul>
                    </div>
                    <div className="col-md-9 col-12">
                        <div className="row">
                            {this.state.storeProduct.map((itms) => {
                                return (
                                    <>
                                        <div className="col-md-4 col-sm-12 mb-3">
                                            <Card className="w-100 h-100">
                                                <Card.Img variant="top" style={{ maxHeight: '120px' }} src={itms.thumbnail} alt={itms.title} />
                                                <Card.Body>
                                                    <Card.Title>{itms.title}</Card.Title>
                                                    <Badge>
                                                        {itms.category}
                                                    </Badge>
                                                    <Card.Text>
                                                        {itms.description.slice(0, 10)}...
                                                    </Card.Text>
                                                    <div className="p-3 my-3 bg-dark text-white text-center">
                                                        $ {itms.price}
                                                    </div>
                                                    <Button variant="primary">View Product</Button>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                    </>
                                )
                            })}
                        </div>

                    </div>
                </div>
            </div>
        </>
    }
}