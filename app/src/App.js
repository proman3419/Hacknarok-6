import React from "react";
import "./App.css";
import InputForm from "./InputForm.js";

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            stage: 0 
        };

        this.handler = this.handler.bind(this)
    }

    handler = (newStage) => {
        console.log("ESSSSSSSAAAA")
        this.setState({
            stage: newStage
        })
    }

    render() {
        return (
            <div className="container py-3">
            <header>
                <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
                <a href="/" className="d-flex align-items-center text-dark text-decoration-none">
                    <span className="fs-4">podrUznik</span>
                </a>

                <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                    <a className="me-3 py-2 text-dark text-decoration-none" href=".">Feedback</a>
                    <a className="me-3 py-2 text-dark text-decoration-none" href=".">Contact</a>
                    <a className="me-3 py-2 text-dark text-decoration-none" href=".">Support</a>
                </nav>
                </div>

                <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
                <h1 className="display-4 fw-normal">Find your trip!</h1> 
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
                    <div className="map-wrapper">
                        <div className="map-inner">
                            <img src="https://maps.geoapify.com/v1/staticmap?style=osm-carto&width=1800&height=800&center=lonlat:19.8933483,50.0549163&zoom=13&marker=lonlat:19.8933483,50.0549163;color:%23ff0000;size:medium;text:1|lonlat:19.909501664466546,50.0365491;color:%23ff0000;size:medium;text:2|lonlat:19.943065943839876,50.0639468;color:%23ff0000;size:medium;text:3&apiKey=05a786c10b224977937d2a9a5f16fd40"></img>
                        </div>
                    </div>
                : null}
            </main>

            <footer className="pt-4 my-md-5 pt-md-5 border-top">
                <div className="row">
                    <div className="col-12 col-md">
                        <small className="d-block mb-3 text-muted">&copy; 2017–2021</small>
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
