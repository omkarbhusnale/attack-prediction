import React, { useEffect, useState } from "react";
import JsonData from "../Data.json";
import AuthDetails from "./AuthDetails";

const data = JsonData;

const HighestSeverityComponent = () => {
    const [highestSeverity, setHighestSeverity] = useState("");

    useEffect(() => {
        const calculateHighestSeverity = () => {
            let highestSeverity = "";
            let highestPercentage = 0;
            const severityCounts = {};

            data.forEach((item) => {
                const severity = item.severity;
                if (!severityCounts[severity]) {
                    severityCounts[severity] = 1;
                } else {
                    severityCounts[severity]++;
                }
                const percentage = (severityCounts[severity] / data.length) * 100;
                if (percentage > highestPercentage) {
                    highestPercentage = percentage;
                    highestSeverity = item.name;
                }
            });

            setHighestSeverity(highestSeverity);
        };

        calculateHighestSeverity();
    }, []);

    return (
        <div>
            <AuthDetails />
            <h2>Highest Severity Attack : {highestSeverity}</h2>
        </div>
    );
};

export default HighestSeverityComponent;
