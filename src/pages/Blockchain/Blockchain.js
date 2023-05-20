import {useEffect, useState} from "react";
import axios from "axios";

export default function Blockcahin() {

    const BASE_API_URL = process.env.REACT_APP_BASE_API_URL;

    const [loading1, setLoading1] = useState(1);
    const [data1, setData1] = useState({});

    const getLatestblock = async () => {
        setLoading1(2);
        setData1({});
        try {
            const response = await fetch(BASE_API_URL + "latestblock", {mode:'cors'});
            const data = await response.json();
            setData1({ data })
            setLoading1(3);
        }
        catch (e) {
            console.log(e)
        }
    };

    const [loading2, setLoading2] = useState(1);
    const [data2, setData2] = useState({});

    const getRawblock = async () => {
        setLoading2(2);
        setData2({});
        try {
            const response = await fetch(BASE_API_URL + "rawblock", {mode:'cors'});
            const data = await response.json();
            setData2({ data })
            setLoading2(3);
        }
        catch (e) {
            console.log(e)
        }
    };

    useEffect(() =>{}, []);

    return (

        <>
            <h3 className="my-4">List of APIs:</h3>
            <div className="card mb-4">
                <div className="card-header clearfix">
                    <div className="float-start">
                        <h5 className="mb-1">Latest Block</h5>
                        <a href="https://blockchain.info/latestblock"
                           target="_blank">https://blockchain.info/latestblock <i
                            className="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                    <div className="float-end">
                        <button onClick={getLatestblock} className="btn btn-primary mt-2">Try It</button>
                    </div>
                </div>
                <div className="card-body p-0">
                    {
                        loading1 === 2 &&
                        <div className="text-center p-5">
                            <i className="fa-solid fa-spin fa-spinner fa-4x text-secondary"></i>
                        </div>
                    }
                    {
                        loading1 === 3 &&
                        <div className="pretty-json">
                            <pre>{ JSON.stringify(data1, null, 2) }</pre>
                        </div>
                    }
                </div>
            </div>
            <div className="card mb-4">
                <div className="card-header clearfix">
                    <div className="float-start">
                        <h5 className="mb-1">Single Block</h5>
                        <a href="https://blockchain.info/rawblock/0000000000000000000141f0c6b19625e7610f763a9ed6872b4642581797f040"
                           target="_blank">https://blockchain.info/rawblock/$block_hash<i
                            className="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                    <div className="float-end">
                        <button onClick={getRawblock} className="btn btn-primary mt-2">Try It</button>
                    </div>
                </div>
                <div className="card-body p-0">
                    {
                        loading2 === 2 &&
                        <div className="text-center p-5">
                            <i className="fa-solid fa-spin fa-spinner fa-4x text-secondary"></i>
                        </div>
                    }
                    {
                        loading2 === 3 &&
                        <div className="pretty-json">
                            <pre>{ JSON.stringify(data2, null, 2) }</pre>
                        </div>
                    }
                </div>
            </div>
        </>

    )

}