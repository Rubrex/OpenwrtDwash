import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';

const Chart = (props) => {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        BarElement,
        Title,
        Tooltip,
        Legend,
    );
    const options = {
        padding: false,
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
            },

        },
    }
    options.plugins.title.text = "Total Usage Timelaps: " + props.selectedClient.user;
    const formatMB = perm => perm / 1048576;
    const labels = props.selectedClient.date.map(data => new Date(data * 1000).toLocaleString());
    const tDownData = props.selectedClient.totaldownloads.map(data => parseInt(formatMB(data)));
    const tUpData = props.selectedClient.totaluploads.map(data => parseInt(formatMB(data)));
    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Download',
                data: tDownData,
                lineTension: 0.2,
                backgroundColor: 'rgba(21, 29, 59, 1)',
                borderColor: '#00C897',
                // borderWidth: 2,

            },
            {
                label: 'Upload',
                data: tUpData,
                lineTension: 0.2,
                backgroundColor: 'rgba(21, 29, 59, 1)',
                borderColor: '#FFC300',
                // borderWidth: 2,

            },
        ],
    };
    const userGraph =
        <div className="router1">
            <Line
                width={document.documentElement.clientWidth}
                height={400}
                options={options}
                data={data}
            />
            <Bar
                width={document.documentElement.clientWidth}
                height={400}
                options={options}
                data={data}
            />
        </div>
    return (
        <div>
            <h3 style={{ marginTop: '10px', fontWeight: '300', textAlign: 'center' }}>{props.selectedClient.user} in Total Usage</h3>
            <hr />
            <div className="canvus-container">
                {userGraph}
            </div>
        </div>
    );
}





export default Chart;