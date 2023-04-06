function Contact () {

    return (

        <>

            <h1>Contact Us</h1>

            <div className="row mt-3">
                <div className="col-md-5 mr-auto">
                    <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quaerat autem
                        corrupti asperiores accusantium et fuga! Facere excepturi, quo eos, nobis doloremque dolor
                        labore expedita illum iusto, aut repellat fuga!</p>
                    <ul className="list-unstyled pl-md-5 mb-5">
                        <li className="d-flex text-black mb-2">
                            <b><span className="mr-3"><span className="fa fa-map"></span></span> 34 Street Name, City Name
                            Here, <br/> United States</b>
                        </li>
                        <li className="d-flex text-black mb-2">
                            <b><span className="mr-3"><span
                            className="fa fa-phone"></span></span> +1 (222) 345 6789
                            </b>
                        </li>
                        <li className="d-flex text-black">
                            <b><span className="mr-3"><span
                            className="fa fa-envelope"></span></span> info@mywebsite.com
                            </b>
                        </li>
                    </ul>
                </div>
                <div className="col-md-6">
                    <form className="mb-5" method="post" id="contactForm" name="contactForm" noValidate="novalidate">
                        <div className="row">
                            <div className="col-md-12 form-group">
                                <label htmlFor="name" className="col-form-label">Name</label>
                                <input type="text" className="form-control" name="name" id="name"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 form-group">
                                <label htmlFor="email" className="col-form-label">Email</label>
                                <input type="text" className="form-control" name="email" id="email"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 form-group">
                                <label htmlFor="message" className="col-form-label">Message</label>
                                <textarea className="form-control" name="message" id="message" cols="30"
                                          rows="7"></textarea>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 mt-3">
                                <input type="submit" value="Send Message"
                                       className="btn btn-primary rounded-0 py-2 px-4"/>
                                    <span className="submitting"></span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </>

    )

}

export default Contact