import React from "react";
import App from "../App";



class FirstApp extends React.Component{
    render(){
        
        return(
            <React.Fragment>
                <div className="container mt-3" >
                    <div className="row">
                        <div className='heading-section text-white bg-success'>
                            <h1>Our Porducts</h1>
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-md-4 shadow-md p-3 mb-5 ">
                           <div className="card text-black bg-primary ">
                                <div className="text-center bharathi-page">
                                
                                 <h3 className="countryName">Bharathi Cement</h3>
                                <p>Bharathi Cement is a flagship brand of VICAT Group. This is an international brand from France deals in cement organization. Right now this company is operated in eleven countries and their main is business interest is the manufacturing of cement, ready-mixed concrete products, and aggregates.</p>
                                </div >
                                <h2>Features</h2>
                                <ol className="" start="1">
                                    <li>Superior quality ensures substantial savings in cement consumption</li>
                                  <li>Durable Concrete</li>
                                    <li>Feasible for economical concrete mix designs</li>
                                </ol>
                                <button className="btn btn-secondary btn-md ">Read More</button>
                            </div>           
                        </div>
                        <div className="col-md-4 shadow-md p-3 mb-5">
                            <div className="card bg-success ">
                                <div className="text-center chettinad-page">
                                <h3>Chettinad Cement</h3>
                                <p>Chettinad cement is operating its cement business spanning three generations. Since its establishment in 1962 with a wet process cement plant at Puliyur near Karur, Chettinad cement has been expanding and making itself versatile in the field of cement products.
                                Major supplier of Southern India cement needs, Chettinad Cement supplies the "glue" upon which many residential, commercial and engineering projects are built. 
                                 </p>
                                </div>
                                <h2>Features</h2>
                                 <ol className="text-white" start="1">    
                                    <li>Unique quality of having low C3A value</li>
                                    <li>ptimum setting time.</li>
                                    <li>Low heat of hydration due to optimum Calcium Oxide.</li>
                                </ol>
                                <button className="btn btn-secondary btn-md">Read More</button>
                            </div>
                        </div>
                        <div className="col-md-4 shadow-md p-3 mb-5">
                            <div className="card bg-danger">
                            <div className="text-center jaypee-page">
                                <h3>JSW Cement</h3>
                                <p>In our endeavour to introduce circularity into our business, we are developing products that have minimal ecological impact. The chemical composition of GGBS helps produce a unique supplementary cementitious product, which is used as partial replacement of Ordinary Portland Cement. Since it contributes to sustainable concrete construction, GGBS is regarded as a ‘green’ building material.</p>
                                </div>
                                <h2>Features</h2>
                                 <ol className="text-white" start="1">    
                                    <li>Low heat of hydration.</li>
                                    <li>Reduced shrinkage and swelling.</li>
                                    <li>Better pore refinement, reduced permeability.</li>
                                </ol>
                                <button className="btn btn-secondary btn-md ">Read More</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            <div className="container mb-2">
            <div className="row ">
                <div className="col-md-12">
                    <div className="card bg-success text-white">
                        <h3>AboutUs</h3>
                        <p>We are into cement busniness since 15 Yeras. we are very happy to serve best cements to Local people.</p>
                    </div>

                </div>

            </div>
            </div>

            <div className="container mb-2">
            <div className="row ">
                <div className="col-md-12">
                    <div className="card bg-primary text-">
                    <h3>ContactUs</h3>
                    <h3 className="text-white"> Chilakala YellaReddy & Brothers</h3>
                    <h5><span>Contact No: 9491112199, 9502553389, 9441263332 </span></h5>
                    </div>
                </div>
                </div>
                </div>  
  <div class="container">
    <div class="row">
  <div class="footer-copyright text-center py-3">© 2022 Copyright:
    <a href="/"> srivenkateswraagencies.com</a>
    <p>Address: Yerragondapalem, Prakasam, Andhra pradesh</p>
  </div>
  </div>
</div>

            </React.Fragment>
        )
    }
}
export default FirstApp;