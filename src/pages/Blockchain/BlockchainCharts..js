import React, {useEffect, useState} from "react";
import {wait} from "@testing-library/user-event/dist/utils";

export default function BlockchainCharts() {

    const BASE_API_URL = process.env.REACT_APP_BASE_API_URL;

    const [loading1, setLoading1] = useState(2);
    const [assests, setAssests] = useState({});

    const getAssets = async () => {
        setLoading1(2);
        setAssests({});
        try {
            const response = await fetch(BASE_API_URL + "assets", {mode: 'cors'});
            var data = await response.json();
            setAssests(data.data);
            setLoading1(3);
        } catch (e) {
            console.log(e)
        }
    };

    const handleImageError = (event) => {
        event.target.src = BASE_API_URL + "noimage.webp";
    };

    useEffect(() => {
        getAssets();
    }, [])


    return (
        <>
            <div className="card mb-4 mt-4">
                <div className="card-header clearfix">
                    <div className="float-start">
                        <h4 className="mb-1 mt-2">CryptoCurrencies</h4>
                    </div>
                    <div className="float-end">
                        <button onClick={getAssets} className="btn btn-primary mt-2">Try It</button>
                    </div>
                </div>
                <div className="card-body">
                    {
                        loading1 === 2 &&
                        <div className="text-center p-5">
                            <i className="fa-solid fa-spin fa-spinner fa-4x text-secondary"></i>
                        </div>
                    }
                    {
                        loading1 === 3 &&
                        <>
                            <div className="row">
                                {
                                    assests.map(  ( cc, i ) => {


                                        return (
                                            <div className="col-sm-3" key={cc.name}>
                                                <div className="card mb-4">
                                                    <h6>{ cc.logo }</h6>
                                                    <img className="cc-logo" key={ cc.name } src={ BASE_API_URL + "cryptocurrencies/" + cc.symbol.toLowerCase() + ".png" } onError={handleImageError} alt={ cc.name } />
                                                    <div className="card-body text-center">
                                                            <h5 className="card-title mb-0">{ cc.name }</h5>
                                                            <h5 className="card-title text-secondary">{ cc.symbol }</h5>
                                                            <ul className="card-text list-unstyled">
                                                                <li>Market Cap in USD</li>
                                                                <li><b>{ cc.marketCapUsd }</b></li>
                                                                <li>Price in USD</li>
                                                                <li><b>{ cc.priceUsd }</b></li>
                                                                <li>Volume in USD  in the last 24Hr</li>
                                                                <li><b>{ cc.volumeUsd24Hr }</b></li>
                                                            </ul>
                                                            <a href="#" className="btn btn-primary">Go To Chart</a>
                                                        </div>
                                                </div>
                                            </div>
                                        )

                                    })
                                }
                            </div>
                            <div className="pretty-json">
                                <pre>{JSON.stringify(assests, null, 2)}</pre>
                            </div>
                        </>
                    }
                </div>
            </div>
        </>
    );

}