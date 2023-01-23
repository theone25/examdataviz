import React, { Component } from 'react';
import BarChart from '../../vizs/Bar_Chart2';
import './barchart.css';

export default class BarChart2 extends Component {
    render() {
        const {data} = this.props;
        return (
            <div id='barChart1' className='pane'>
                <div className='header'>Rotational Speed per Machine (last 10) </div>
                <div >
                <BarChart data={data} width={740} height={300}/>
                </div>                
            </div>
        )
    }
}