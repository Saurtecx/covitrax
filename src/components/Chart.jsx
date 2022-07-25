import { Box, makeStyles } from '@material-ui/core';
import { Bar } from 'react-chartjs-2';


const useStyles = makeStyles({
    container: {
        width: '75%'
    }
})

const Chart = ({ data: { confirmed, recovered, deaths } }) => {
    const classes = useStyles();
    return (
        <Box className={classes.container}>
            {confirmed ? (
                <Bar
                    data={{
                        labels: ['Infected', 'Recovered', 'Deaths'],
                        datasets: [{
                            label: 'Peoples',
                            data: [confirmed.value, recovered.value, deaths.value],
                            backgroundColor: [
                                'rgba(99, 35, 105, 0.8)',
                                'rgba(0, 255, 0, 0.8)',
                                'rgba(255, 0, 0, 0.8)'
                            ]
                        }]
                    }}
                    options={{
                        legend: { display: false },
                        title: { display: true, text: "Current State in Country" }
                    }}
                />) : ""}
        </Box>
    )
}

export default Chart;