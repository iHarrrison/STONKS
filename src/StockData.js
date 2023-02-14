import React, {useState, useEffect} from 'react';

function StockData() {
    const [stockData, setStockData] = useState(null);

    // Fetch stock data from API using useEffect
    useEffect(() => {
        // API key and stock symbol for fetching stock data
        const apiKey = 'PLA9B6C7CHZL1A0G';
        const symbol = 'TSLA';
        const apiUrl = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${apiKey}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                setStockData(data);
                console.log(data);
            })
            .catch(error => console.log(error));
    }, []);

    // Display the stock data or loading message
    return (
        <div>
            {stockData ? (
                <div>
                    <h2>{stockData['Global Quote']['01. symbol']}</h2>
                    <p>Last Price: {stockData['Global Quote']['05. price']}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default StockData;
