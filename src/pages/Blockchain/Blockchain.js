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

    const [loading3, setLoading3] = useState(1);
    const [data3, setData3] = useState({});
    const getSingleTransaction = async () => {
        setLoading3(2);
        setData3({});
        try {
            const response = await fetch(BASE_API_URL + "rawtx", {mode:'cors'});
            const data = await response.json();
            setData3({ data })
            setLoading3(3);
        }
        catch (e) {
            console.log(e)
        }
    };

    const [loading4, setLoading4] = useState(1);
    const [data4, setData4] = useState({});
    const getBlockHeight = async () => {
        setLoading4(2);
        setData4({});
        try {
            const response = await fetch(BASE_API_URL + "block-height", {mode:'cors'});
            const data = await response.json();
            setData4({ data })
            setLoading4(3);
        }
        catch (e) {
            console.log(e)
        }
    };

    const [loading5, setLoading5] = useState(1);
    const [data5, setData5] = useState({});
    const getSingleAddress = async () => {
        setLoading5(2);
        setData5({});
        try {
            const response = await fetch(BASE_API_URL + "rawaddr", {mode:'cors'});
            const data = await response.json();
            setData5({ data })
            setLoading5(3);
        }
        catch (e) {
            console.log(e)
        }
    };

    const [loading6, setLoading6] = useState(1);
    const [data6, setData6] = useState({});
    const getMultiAddress = async () => {
        setLoading6(2);
        setData6({});
        try {
            const response = await fetch(BASE_API_URL + "multiaddr", {mode:'cors'});
            const data = await response.json();
            setData6({ data })
            setLoading6(3);
        }
        catch (e) {
            console.log(e)
        }
    };

    const [loading7, setLoading7] = useState(1);
    const [data7, setData7] = useState({});
    const getUnspentOutputs = async () => {
        setLoading7(2);
        setData7({});
        try {
            const response = await fetch(BASE_API_URL + "unspent", {mode:'cors'});
            const data = await response.json();
            setData7({ data })
            setLoading7(3);
        }
        catch (e) {
            console.log(e)
        }
    };

    const [loading8, setLoading8] = useState(1);
    const [data8, setData8] = useState({});
    const getBalance = async () => {
        setLoading8(2);
        setData8({});
        try {
            const response = await fetch(BASE_API_URL + "balance", {mode:'cors'});
            const data = await response.json();
            setData8({ data })
            setLoading8(3);
        }
        catch (e) {
            console.log(e)
        }
    };

    const [loading9, setLoading9] = useState(1);
    const [data9, setData9] = useState({});
    const getUnconfirmedTransactions = async () => {
        setLoading9(2);
        setData9({});
        try {
            const response = await fetch(BASE_API_URL + "unconfirmed-transactions", {mode:'cors'});
            const data = await response.json();
            setData9({ data })
            setLoading9(3);
        }
        catch (e) {
            console.log(e)
        }
    };

    const [loading10, setLoading10] = useState(1);
    const [data10, setData10] = useState({});
    const getBlocks = async () => {
        setLoading10(2);
        setData10({});
        try {
            const response = await fetch(BASE_API_URL + "blocks", {mode:'cors'});
            const data = await response.json();
            setData10({ data })
            setLoading10(3);
        }
        catch (e) {
            console.log(e)
        }
    };

    useEffect(() =>{}, []);

    return (

        <div className="mb-5 pb-5">
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
            <div className="card mb-4">
                <div className="card-header clearfix">
                    <div className="float-start">
                        <h5 className="mb-1">Single Transaction</h5>
                        <a href="https://blockchain.info/rawtx/8e59ee7cfb325934ec4571f294615b59711e7d22bb1a640ca3d0127063dc50d2"
                           target="_blank">https://blockchain.info/rawtx/$tx_hash<i
                            className="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                    <div className="float-end">
                        <button onClick={getSingleTransaction} className="btn btn-primary mt-2">Try It</button>
                    </div>
                </div>
                <div className="card-body p-0">
                    {
                        loading3 === 2 &&
                        <div className="text-center p-5">
                            <i className="fa-solid fa-spin fa-spinner fa-4x text-secondary"></i>
                        </div>
                    }
                    {
                        loading3 === 3 &&
                        <div className="pretty-json">
                            <pre>{ JSON.stringify(data3, null, 2) }</pre>
                        </div>
                    }
                </div>
            </div>
            <div className="card mb-4">
                <div className="card-header clearfix">
                    <div className="float-start">
                        <h5 className="mb-1">Block Height
                        </h5>
                        <a href="https://blockchain.info/block-height/790670?format=json"
                           target="_blank">https://blockchain.info/block-height/$block_height?format=json<i
                            className="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                    <div className="float-end">
                        <button onClick={getBlockHeight} className="btn btn-primary mt-2">Try It</button>
                    </div>
                </div>
                <div className="card-body p-0">
                    {
                        loading4 === 2 &&
                        <div className="text-center p-5">
                            <i className="fa-solid fa-spin fa-spinner fa-4x text-secondary"></i>
                        </div>
                    }
                    {
                        loading4 === 3 &&
                        <div className="pretty-json">
                            <pre>{ JSON.stringify(data4, null, 2) }</pre>
                        </div>
                    }
                </div>
            </div>
            <div className="card mb-4">
                <div className="card-header clearfix">
                    <div className="float-start">
                        <h5 className="mb-1">Single Address
                        </h5>
                        <a href="https://blockchain.info/rawaddr/bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh"
                           target="_blank">https://blockchain.info/rawaddr/$bitcoin_address<i
                            className="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                    <div className="float-end">
                        <button onClick={getSingleAddress} className="btn btn-primary mt-2">Try It</button>
                    </div>
                </div>
                <div className="card-body p-0">
                    {
                        loading5 === 2 &&
                        <div className="text-center p-5">
                            <i className="fa-solid fa-spin fa-spinner fa-4x text-secondary"></i>
                        </div>
                    }
                    {
                        loading5 === 3 &&
                        <div className="pretty-json">
                            <pre>{ JSON.stringify(data5, null, 2) }</pre>
                        </div>
                    }
                </div>
            </div>
            <div className="card mb-4">
                <div className="card-header clearfix">
                    <div className="float-start">
                        <h5 className="mb-1">Multi Address</h5>
                        <a href="https://blockchain.info/multiaddr?active=bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh|bc1pdplftwmmvwd79ex0d5mtzhuumdura7yafcdva5753u94nmuu8heqdgwk6k"
                           target="_blank">https://blockchain.info/multiaddr?active=$address|$address<i
                            className="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                    <div className="float-end">
                        <button onClick={getMultiAddress} className="btn btn-primary mt-2">Try It</button>
                    </div>
                </div>
                <div className="card-body p-0">
                    {
                        loading6 === 2 &&
                        <div className="text-center p-5">
                            <i className="fa-solid fa-spin fa-spinner fa-4x text-secondary"></i>
                        </div>
                    }
                    {
                        loading6 === 3 &&
                        <div className="pretty-json">
                            <pre>{ JSON.stringify(data6, null, 2) }</pre>
                        </div>
                    }
                </div>
            </div>
            <div className="card mb-4">
                <div className="card-header clearfix">
                    <div className="float-start">
                        <h5 className="mb-1">Balance</h5>
                        <a href="https://blockchain.info/balance?active=bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh"
                           target="_blank">https://blockchain.info/balance?active=$address<i
                            className="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                    <div className="float-end">
                        <button onClick={getBalance} className="btn btn-primary mt-2">Try It</button>
                    </div>
                </div>
                <div className="card-body p-0">
                    {
                        loading8 === 2 &&
                        <div className="text-center p-5">
                            <i className="fa-solid fa-spin fa-spinner fa-4x text-secondary"></i>
                        </div>
                    }
                    {
                        loading8 === 3 &&
                        <div className="pretty-json">
                            <pre>{ JSON.stringify(data8, null, 2) }</pre>
                        </div>
                    }
                </div>
            </div>
            <div className="card mb-4">
                <div className="card-header clearfix">
                    <div className="float-start">
                        <h5 className="mb-1">Unconfirmed Transactions</h5>
                        <a href="https://blockchain.info/unconfirmed-transactions?format=json"
                           target="_blank">https://blockchain.info/unconfirmed-transactions?format=json<i
                            className="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                    <div className="float-end">
                        <button onClick={getUnconfirmedTransactions} className="btn btn-primary mt-2">Try It</button>
                    </div>
                </div>
                <div className="card-body p-0">
                    {
                        loading9 === 2 &&
                        <div className="text-center p-5">
                            <i className="fa-solid fa-spin fa-spinner fa-4x text-secondary"></i>
                        </div>
                    }
                    {
                        loading9 === 3 &&
                        <div className="pretty-json">
                            <pre>{ JSON.stringify(data9, null, 2) }</pre>
                        </div>
                    }
                </div>
            </div>
            <div className="card mb-4">
                <div className="card-header clearfix">
                    <div className="float-start">
                        <h5 className="mb-1">Blocks</h5>
                        <a href="https://blockchain.info/blocks/1684632093461?format=json"
                           target="_blank">https://blockchain.info/blocks/$time_in_milliseconds?format=json<i
                            className="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                    <div className="float-end">
                        <button onClick={getBlocks} className="btn btn-primary mt-2">Try It</button>
                    </div>
                </div>
                <div className="card-body p-0">
                    {
                        loading10 === 2 &&
                        <div className="text-center p-5">
                            <i className="fa-solid fa-spin fa-spinner fa-4x text-secondary"></i>
                        </div>
                    }
                    {
                        loading10 === 3 &&
                        <div className="pretty-json">
                            <pre>{ JSON.stringify(data10, null, 2) }</pre>
                        </div>
                    }
                </div>
            </div>
        </div>

    )

}