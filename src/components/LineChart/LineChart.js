import React from 'react';
import { Line } from 'react-chartjs-2';
import moment from 'moment';
import './LineChart.css';

//TODO: get this data from api later

const graphData = {
    labels: [],
    datasets: [
        {
            label: 'Monthly Ratings',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: []
        }
    ]
};

const options = {
    scales: {
        yAxes : [{
            ticks : {
                max : 10,    
                min : 0
            }
        }]
    }
}

class LineChart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {}
        }
    }
    componentDidUpdate(prevProps) {
        const { ratings } = this.props
        console.log(ratings, prevProps.ratings)
        if (ratings.length !== prevProps.ratings.length) {
            this.cleanData(ratings)
        }
    }
    cleanData(ratings) {
        let label
        const labels = []
        const data = []
        ratings.forEach(rating => {
            if (rating.week) {
                const date = moment(rating.week).utc().format('MM-DD-YY')
                const avgRating = rating.sum / rating.count

                labels.push(`Week of ${date}`)
                data.push(avgRating)
                
            } else if (rating.day) {
                const date = moment(rating.day).utc().format('MM-DD-YY')
                console.log(date, rating.rating)
                labels.push(date)
                data.push(rating.rating)
            }
        })
        graphData.labels = labels
        graphData.datasets[0].data = data
        graphData.datasets[0].label = label
        this.setState({ data: graphData })
    }
    render() {
        const { data } = this.state
        return (
            <div className='line-chart'>
                <Line ref='chart' 
                    data={data} 
                    options={options} />
            </div>
        )
    }
}

export default LineChart
