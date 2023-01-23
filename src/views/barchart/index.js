import React, { Component } from 'react';
import BarChart from '../../vizs/Bar_Chart';
import './barchart.css';

export default class BarChart1 extends Component {
    render() {
        const {data} = this.props;
        return (
            <div id='barChart1' className='pane'>
                <div className='header'>Tool Wear Per Machine (last 10)</div>
                <div >
                    <BarChart data={data} width={740} height={300}/>
                </div>                
            </div>
        )
    }
}