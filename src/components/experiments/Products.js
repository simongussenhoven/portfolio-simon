
import React from "react";
import { Button, DropdownButton, Dropdown } from "react-bootstrap";

export default class Products extends React.Component {
    constructor(){
        super();
        this.state = ({
            selectedProduct: null,
            selectedSize: null
        })
    }
    render(){
        return(
            <div className="p-4 d-flex justify-content-center flex-column">
                <section>
                    <div className="banner text-center py-5 bg-blue1">
                        <h1 className="monoton font-60 color-pink">MOCKUP STUDIO 2000</h1>
                        <h2 class="color-white">Your favorite pick of unorderable items!</h2>
                    </div>
                </section>
                <section className="products d-flex justify-content-center p-3">
                <Button variant="primary" className="py-1 mx-1 btn-blue2 active">All</Button>
                <Button variant="primary" className="py-1 mx-1 btn-blue2">Shoes</Button>
                <Button variant="primary" className="py-1 mx-1 btn-blue2">Socks</Button>
                <Button variant="primary" className="py-1 mx-1 btn-blue2">Shirts</Button>
                <Button variant="primary" className="py-1 mx-1 btn-blue2">Caps</Button>
                <Button variant="outline-warning" className="py-1 mx-1">Outlet</Button>
                </section>
                <section class="products-main mx-md-5">
                    <div class=" row d-flex justify-content-center">
                        <aside className="col col-12 col-md-2">
                            <div class="border rounded p-3 shadow d-flex">
                                <div class="col col-12 col-md-8">
                                    <h3>Filter</h3>
                                </div>
                                <div className="col col-12 col-md-4">
                                    <Button variant="primary" size="sm">
                                        Apply
                                    </Button>
                                </div>
                            </div>
                        </aside>
                        <main class="col col-12 col-md-8">
                            <div class="border rounded p-4 shadow">
                            <h3>Product overview</h3>
                                {this.props.data.products.map(category => {
                                    return(
                                        <div className="row p-1">
                                            <div className="col col-12 px-2">
                                                <h4>{category.name}</h4>
                                                
                                            </div>
                                            <div class="row d-flex flex-row">
                                                {category.values.map(product => {
                                                    console.log(product)
                                                return(
                                                    <div className="col col-12 col-md-3">
                                                        <div class="border rounded p-3 shadow">
                                                        <h4>{product.productName}</h4>
                                                        {product.description ? <p>{product.description}</p>: <p>No description available</p>}
                                                        <DropdownButton id="dropdown-basic-button" title="Select a size" size="sm">
                                                            {product.sizes.map(size => {
                                                                return (
                                                                    <Dropdown.Item href="#/action-1">{size}</Dropdown.Item>
                                                                )
                                                            })}
                                                        </DropdownButton>
                                                        <img alt={product.productName} src={product.img} className="w-100 img-fluid mb-2"/>
                                                        <Button variant="success" className="w-100">Order</Button>
                                                        </div>
                                                    </div>
                                                )
                                                })}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </main>
                        <aside className="basket col col-12 col-md-2">
                            <div class="border rounded p-3 shadow">
                            <h3 class="p-1">Basket</h3>
                            <p className="p-1">{this.props.data.basket == null ? "Nothing selected" : ""}</p>
                            <Button variant="success w-100">Complete order</Button>
                            </div>
                        </aside>
                    </div>
                </section>
            </div>
        )
    }
}