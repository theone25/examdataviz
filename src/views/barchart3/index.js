import React, { Component } from 'react';
import BarChart from '../../vizs/Bar_Chart3';
import './barchart.css';

export default class BarChart2 extends Component {
    render() {
        const {data} = this.props;
        return (
            <div id='barChart3' className='pane'>
                <div className='header'>Torque per Machine (last 10) </div>
                <div >
                <BarChart data={data} width={740} height={300}/>
                </div>                
            </div>
        )
    }
}