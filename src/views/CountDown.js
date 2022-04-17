import React, { Component, useState, useEffect } from 'react';

class CountDown extends Component {

    // cứ mỗi lần state thay đổi thì nó lại chạy vào lại hàm reder
    state = {
        count: 10
    }

    componentWillUnmount() {
        if (this.timer) {
            clearInterval(this.timer);
        }
    }

    // chạy sau khi hàm render lần đầu
    componentWillMount() {
        this.timer = setInterval(() => {
            this.setState({
                count: this.state.count - 1
            })
        }, 1000)
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.count !== this.state.count && this.state.count === 0){
            if(this.timer){
                clearInterval(this.timer)
                // this.props.onTimesup();
            }
        }
    }

    render() {
        return (
            <div>
                {this.state.count} class
            </div>
        );
    }
}

const NewCountDown = (props) => {
    const [count, setCount] = useState(10)

    useEffect(() => {
        if (count === 0) {
            props.onTimesup()
            return;
        }

        let timer = setInterval(() => {
            setCount(count -1);
        }, 1000);

        return () => {
            clearInterval(timer)
        }
    }, [count])

    return (
        <div> {count} hooks </div>
    )
}

export { CountDown, NewCountDown }