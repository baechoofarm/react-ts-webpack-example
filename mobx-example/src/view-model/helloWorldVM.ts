// Created by Byeonggeol Ha on 2019-09-10
import {computed, observable} from "mobx";

export default class HelloWorldVM {
    @observable
    private cnt: number = 0;

    increase() {
        if (!this.increaseDisabled) {
            ++this.cnt;
        }
    }

    decrease() {
        if (!this.decreaseDisabled) {
            --this.cnt;
        }
    }

    get count(): number {
        return this.cnt;
    }

    @computed
    get increaseDisabled(): boolean {
        return this.cnt >= 10;
    }

    @computed
    get decreaseDisabled(): boolean {
        return this.cnt <= 0;
    }
}