import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(
                    `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
                );
                if (!res.ok) {
                    throw new Error(`API error: ${res.status}`);
                }
                const json = await res.json();
                setData(json[currency]); // rates object
                console.log("Fetched data:", json[currency]);
            } catch (error) {
                console.error("Error fetching currency data:", error);
            }
        };

        fetchData();
    }, [currency]);

    return data;
}

export default useCurrencyInfo;
