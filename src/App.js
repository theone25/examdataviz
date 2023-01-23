import React, { Component } from 'react';
import { Layout, Row, Col  } from 'antd';
import Card1 from './views/card1';
import Card2 from './views/card2';
import Card3 from './views/card3';
import Card4 from './views/card4';
import BarChart1 from './views/barchart';
import BarChart2 from './views/barchart2';
import BarChart3 from './views/barchart3';
import PieChart from './views/piechart';
import List from './views/list';
import './App.css';
import data from './Data/JsonData';

const { Sider, Content} = Layout;

export default class App extends Component {

    constructor(props) {
        super(props);
        var machines = [];
        data.reverse().forEach(element => {
            if(machines.length<10) {
            machines.push(element);
            }
        });
        this.state = {
            machine : machines,
            idMachine: machines[0]["Product ID"],
        }
        
    }

    changeSelectMachine = value => {
        this.setState({
            idMachine: value
        })
    }
    


    render() {
        const {machine, idMachine} = this.state;
        const filteredData = data.filter(machine=>idMachine.indexOf(machine["Product ID"])!==-1);
        return (
            <div>
                <Layout style={{ height: 920 }}>
                    {/* Left Side View */}
                    <Sider width={280} style={{backgroundColor:'#eee'}}>
                        <Content style={{ height: 900 }}>
                            <center>
                            <h2>Last 10 Machines:</h2>
                            </center>
                            <List  list_data= {machine} changeSelectMachine={this.changeSelectMachine}/>
                        </Content>
                    </Sider>
                    {/* Center View */}
                    <Layout >
                        {/* Top Center Layout View */}
                        <center>
                            <Layout >
                                <div className="site-card-wrapper">
                                    <h2>Informations</h2>
                                    <Row  gutter={[16, 16]} type="flex" justify="center" align="middle">
                                        <Col span={6}>
                                            <Content >
                                                <Card1 info={filteredData[0]["Process temperature [K]"]}/>
                                            </Content>
                                        </Col>
                                        <Col span={6}>
                                            <Content >
                                                <Card2  info={filteredData[0]["Rotational speed [rpm]"]}/>
                                            </Content>
                                        </Col>
                                        <Col span={6}>
                                            <Content >
                                                <Card3  info={filteredData[0]["Tool wear [min]"]}/>
                                            </Content>
                                        </Col>
                                        <Col span={6}>
                                            <Content >
                                                <Card4  info={filteredData[0]["Failure Type"]}/>
                                            </Content>
                                        </Col>
                                    </Row>
                                </div>
                                
                            </Layout>
                        </center>
                        <Layout style={{ height: 680 }}>
                            {/* Middle Center Layout View */}
                            <Content width={290} >
                            <Row gutter={[16, 16]}>
                                <Col span={12}>
                                    <Content style={{ height: 200 }}>
                                        <BarChart1 data= {machine}/>
                                    </Content>
                                </Col>
                                <Col span={12}>
                                    <Content style={{ height: 200 }}>
                                        <BarChart2 data= {machine}/>
                                    </Content>
                                </Col>
                            </Row>
                            </Content>

                            {/* Bottom Center Layout View */}
                            <Content width={290} >
                            <Row gutter={[16, 16]}>
                                <Col span={12}>
                                    <Content style={{ height: 200 }}>
                                        <BarChart3 data= {machine}/>
                                    </Content>
                                </Col>
                                <Col span={12}>
                                    <Content style={{ height: 200 }}>
                                        <PieChart data= {data}/>
                                    </Content>
                                </Col>
                            </Row>
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
            </div>
        )
    }
}
