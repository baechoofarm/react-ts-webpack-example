// Created by Byeonggeol Ha on 2019-09-10
import * as React from "react";
import {observer} from "mobx-react";
import HelloWorldVM from "../view-model/helloWorldVM";

@observer
export default class HelloWorld extends React.Component {
    readonly vm = new HelloWorldVM();

    readonly handleClickIncrease = () => {
        this.vm.increase();
    };

    readonly handleClickDecrease = () => {
        this.vm.decrease();
    };

    render() {
        const {count, increaseDisabled, decreaseDisabled} = this.vm;

        return (
            <div>
                <p>count: {count}</p>
                <div>
                    <button onClick={this.handleClickIncrease} disabled={increaseDisabled}>click me to increase</button>
                    <br/>
                    <button onClick={this.handleClickDecrease} disabled={decreaseDisabled}>click me to decrease</button>
                </div>
            </div>
        );
    }
}