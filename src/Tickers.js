import React, { Component } from 'react';
import axios from 'axios';
import './Tickers.css';
import Cryptocurrency from './Cryptocurrency';

class Tickers extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        this.fetchCryptocurrencyData();
        this.interval = setInterval(() => this.fetchCryptocurrencyData(), 60 * 100);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    fetchCryptocurrencyData() {
        axios.get("https://api.coinmarketcap.com/v1/ticker/")
            .then(response => {
                this.setState({ data: response.data});
            })
            .catch(err => console.log(err));
    }
    render() {
        let tickers = this.state.data.map((currency) => <Cryptocurrency data={currency} key={currency.id} />
        );
        return (
            <div className="tickers-container container-fluid">
                <div className="tickers row">{tickers}</div>
            </div>
        );
    }
}

export default Tickers