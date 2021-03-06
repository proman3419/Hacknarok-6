import React from "react";
import "./App.css";
import InputForm from "./InputForm.js";

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            stage: 0,
            map: "",
            palces: []
        };

        this.handler = this.handler.bind(this)
    }

    handler = (data) => {
        console.log(data)
        this.setState({
            map: data.map,
            places: data.places
        })
        this.setState({
            stage: 1,
        })
    }

    render() {
        return (
            <div className="container py-3">
            <header>
                <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
                <a href="/" className="d-flex align-items-center text-dark text-decoration-none">
                    <span className="fs-4">GoodTrip</span>
                </a>

                <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                    <a className="me-3 py-2 text-dark text-decoration-none" href=".">Feedback</a>
                    <a className="me-3 py-2 text-dark text-decoration-none" href=".">Contact</a>
                    <a className="me-3 py-2 text-dark text-decoration-none" href=".">Support</a>
                </nav>
                </div>

                <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
                {(this.state.stage === 0) ? 
                <h1 className="display-4 fw-normal"> Find your trip!</h1> 
                : <h1 className="display-4 fw-normal"> Your trip is here!</h1> 
                }
                </div>
            </header>

            <main>
                <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col col-lg-6">

                        {(this.state.stage === 0) ? 
                            <div className="form-wrapper">
                                <div className="form-inner">
                                    <h4>Choose your preferences</h4>
                                    <InputForm handler={this.handler} />
                                </div>
                            </div>
                        : null}
                    </div>
                </div>
                </div>
                {(this.state.stage === 1) ? 
                            
                <div class="row">
                    <div className="column table-responsive">
                        <table className="table table-responsive table-borderless">
                        <thead>
                        <tr>
                            <th>Order</th>
                            <th>Place name</th>
                            <th style={{textAlign: "right"}}>Place attractiveness</th>
                            <th style={{textAlign: "right"}}>Categories</th>
                        </tr>
                        </thead>

                        <tbody>
                        
                        {
                            this.state.places.map((place, index) => {
                                console.log(place)
                                console.log(index)
                                return (<tr>
                                    <td>{index + 1}</td>
                                    <td>{place.name}</td>
                                    <td style={{textAlign: "right"}}>{place.attractiveness}</td>
                                    <td style={{textAlign: "right"}}>
                                    {
                                    place.categories.map((cat, index) => {
                                        return (
                                            index != (place.categories.length - 1) ? <span>{cat}, </span> : <span>{cat}</span>
                                        )
                                    })
                                    
                                    // place.categories[0]}, {place.categories[1]
                                    
                                    }</td>
                                </tr>)
                            })
                        }
                        </tbody>

                        </table>
                    </div>
                    
                    <div className="column">
                        <img className="map-img" src={this.state.map}></img>
                    </div>
                </div>
                : null}
            </main>

            <footer className="pt-4 my-md-5 pt-md-5 border-top">
                <div className="row">
                    <div className="col-12 col-md">
                        <small className="d-block mb-3 text-muted">&copy; Romanitos Banditos 2022</small>
                    </div>
                    <div className="col-6 col-md">
                        <h5>Features</h5>
                    </div>
                    <div className="col-6 col-md">
                        <h5>Resources</h5>
                    </div>
                    <div className="col-6 col-md">
                        <h5>About</h5>
                    </div>
                </div>
            </footer>
            </div>
        )
    }
}

export default App;
