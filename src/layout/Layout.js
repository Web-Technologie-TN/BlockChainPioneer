import { Outlet, useLocation } from "react-router-dom";
import Topbar from "./Topbar";
import React from "react";
import Footer from "./Footer";
import SideBar from "./SideBar";
import Banner from "../pages/Home/Banner";

function Layout () {

    const location = useLocation()

    return (

        <div className="app">

            <Topbar/>

            {

                ( location.pathname == "/" ) &&

                <Banner/>

            }

            <div className="content mt-4">

                <div className="container">
                    <div className="row">
                        <div className={ ( location.pathname == "/" || location.pathname == "/blockchain" || location.pathname == "/contact" ) ? "col-12" : "col-8" }>

                            <Outlet/>

                        </div>
                        {

                            ( location.pathname != "/" && location.pathname != "/blockchain" && location.pathname != "/contact" ) &&

                            <div className="col-lg-4">

                                <SideBar/>

                            </div>

                        }
                    </div>
                </div>


            </div>

            <Footer/>

        </div>

    )

}

export default Layout