import React, { Component } from 'react';

class Circle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counts: this.props.number,
      isCounted: true
    }
    this.countDown = this.countDown.bind(this);
    this.startCountDown = this.startCountDown.bind(this);
    this.stopCountDown = this.stopCountDown.bind(this);
  }

  startCountDown() {
    this.countDown();
    this.setState({ isCounted: true });
  }

  stopCountDown() {
    clearInterval(this.interval);
    this.setState({ isCounted: false });
  }

  countDown() {
    this.interval = setInterval(() => {
      this.setState(
        (state) => ({ counts: state.counts - 1 }),
        () => !this.state.counts && clearInterval(this.interval)
      );
    }, 1000)
  }

  componentDidMount() {
    this.countDown();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="d-flex-inline flex-column align-items-center">
        <button className="btn" onClick={this.state.isCounted ? this.stopCountDown : this.startCountDown}>
          {this.state.isCounted ? 'Stop' : 'Start'}
        </button>
        <div className="circle">{this.state.counts}</div>
      </div>
    );
  }
}

export default Circle;
