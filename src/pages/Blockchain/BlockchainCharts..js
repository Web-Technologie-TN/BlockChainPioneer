import React, {useEffect, useState} from "react";

export default function BlockchainCharts() {

    const BASE_API_URL = process.env.REACT_APP_BASE_API_URL;

    const [loading1, setLoading1] = useState(1);
    const [data1, setData1] = useState({});
    const [data1x, setData1x] = useState([]);

    const getBitcoinChart = async () => {
        setLoading1(2);
        setData1({});
        try {
            const response = await fetch(BASE_API_URL + "bitcoin", {mode: 'cors'});
            var data = await response.json();
            prepareData1(data);
        } catch (e) {
            console.log(e)
        }
    };

    const prepareData1 = (data) => {
        var min = data.values[0].y;
        var max = data.values[0].y;
        data.values.map(el => {
            // Time
            var date = new Date(el.x * 1000)
            el.z = date.toDateString();
            el.y = parseInt(el.y.toString().split(".")[0])
            // MIN MAX
            if( el.y < min )
                min = el.y;
            if( el.y > max )
                max = el.y;

        })
        console.log(data.values)
        var val = parseInt( ( max - min ) / 4 )
        var min1 = min + val
        var min2 = min1 + val
        var min3 = min2 + val
        console.log(min)
        console.log(max)
        console.log(val)
        console.log([min, min1, min2, min3, max])
        setData1x([min, min1, min2, min3, max])
        setData1({data})
        setLoading1(3)

    }

    const data = [
        {quarter: 1, earnings: 13000},
        {quarter: 2, earnings: 16500},
        {quarter: 3, earnings: 14250},
        {quarter: 4, earnings: 19000}
    ];

    return (
        <>
            <h3 className="my-4">List of Charts:</h3>
            <div className="card mb-4">
                <div className="card-header clearfix">
                    <div className="float-start">
                        <h5 className="mb-1">Bitcoin</h5>
                        <a href="https://api.blockchain.info/charts/total-bitcoins?......."
                           target="_blank">https://blockchain.info/latestblock <i
                            className="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                    <div className="float-end">
                        <button onClick={getBitcoinChart} className="btn btn-primary mt-2">Try It</button>
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
                            <h2 className="mb-1">{data1?.data?.name} <b className="text-primary">{data1?.data?.unit}</b>
                            </h2>
                            <h6 className="text-secondary">{data1?.data?.description}</h6>
                            <div className="pretty-json">
                                <pre>{JSON.stringify(data1, null, 2)}</pre>
                            </div>
                        </>
                    }
                </div>
            </div>
        </>
    );

}