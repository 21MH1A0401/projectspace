
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts"
import ChartFile from "./chartfile";
import './resultpage.css';

const ResultPage = () => {

    const [overallfeedback, setOverallFeedback] = useState([]);

    const questiononecount = [0, 0, 0]

    const questiontwocount = [0, 0, 0];

    const questionthreecount = [0, 0, 0];

    const questionfourcount = [0, 0, 0];

    useEffect(() => {

        axios.get("http://20.150.218.93:7000/api/get-userfeedback")
            .then((result) => {
                console.log(result.data);
                setOverallFeedback(result.data);
            }).catch((error) => {
                console.log(error);
            })
    }, []);

    if (overallfeedback) {
        // console.log(overallfeedback)
        overallfeedback.map((item, key) => {
            console.log(item);
            if (item.question_one == "positive") {
                questiononecount[0]++;
            } if (item.question_one == "negative") {
                questiononecount[1]++;
            } if (item.question_one == "neutral") {
                console.log("question one")
                questiononecount[2]++;
            } if (item.question_two == "positive") {
                questiontwocount[0]++;
            } if (item.question_two == "negative") {
                questiontwocount[1]++;
            } if (item.question_two == "neutral") {
                questiontwocount[2]++;
                console.log("coming")
            } if (item.question_three == "positive") {
                questionthreecount[0]++;
            } if (item.question_three == "negative") {
                questionthreecount[1]++;
            } if (item.question_three == "neutral") {
                questionthreecount[2]++;
            } if (item.question_four == "positive") {
                questionfourcount[0]++;
            } if (item.question_four == "negative") {
                questionfourcount[1]++;
            } if (item.question_four == "neutral") {
                questionfourcount[2]++;
            }
        })
    }

    const series = [
        {
            data: questiononecount,
        },
    ]
    const options = {
        chart: {
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                vertical: true,
            },
        },
        dataLabels: {
            enabled: false,
        },

        colors: ["#34c38f"],
        grid: {
            borderColor: "#f1f1f1",
        },
        xaxis: {
            categories: [
                "Positive",
                "Negative",
                "Neutral",
            ],
        },
    }


    return (
        <div>
            <div className="result-container">
                <div className="one-two">
                    <div>
                        <ChartFile questiondt={questiononecount} />
                        <p>Question 1:What is your experince in Project space?</p>
                    </div>
                    <div>
                        <ChartFile questiondt={questiontwocount} />
                        <p>Question 2:What is your opinion on Techinical Hub?</p>
                    </div>
                </div>
                <div className="three-four">

                    <div>
                        <ChartFile questiondt={questionthreecount} />
                        <p>Question 3:Why you want to join in Technical Hub, is it worth to join ? </p>
                    </div>
                    <div>
                        <ChartFile questiondt={questionfourcount} />
                        <p>Question 4:How did your role in the project space contributed to it's overall success ?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResultPage;