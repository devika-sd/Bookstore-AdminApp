import React from 'react';
import NVD3Chart from 'react-nvd3';
import * as bookaction from '../../../Actions/book-action';
import { connect } from 'react-redux';

class BarDiscreteChart extends React.Component {
    constructor() {
        super()
        this.state = {
            paddu: []
        }
    }
    componentDidMount() {
        this.props.onBookCountchart();
        console.log("*****bar chart***")
        console.log(this.props.countRecord)
        this.setState({ paddu: this.props.countRecord })
        console.log("*****bar chart***")
        console.log(this.state.paddu);

    }
    render() {
        const records = this.props.countRecord.map((data)=>{
            return {
                "label": data._id,
                "value": data.count,
                "color": data.color
            }
        })
        console.log(records)
        const datum = [
            {
                key: "Cumulative Return",
                values: records
            }
        ];
        
        return <NVD3Chart tooltip={{ enabled: true }} type="discreteBarChart" datum={datum} x="label" y="value" height={300} showValues />
    }
}
const mapStateToProps = (state) => {
    console.log(state.bookReducer.BookCountchart)
    return {
        countRecord: state.bookReducer.BookCountchart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onBookCountchart: () => dispatch(bookaction.fetchBookavailableCount()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BarDiscreteChart);
