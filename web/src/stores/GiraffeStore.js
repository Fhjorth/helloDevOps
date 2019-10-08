import {decorate, observable} from "mobx";
import {Argv as process} from "@jest/types/build/Config";

const baseUrl = process.env.NODE_ENV === 'development' ?
    "http://localhost:8080/":""; //Check if dev enviroment

export default class GiraffeStore {

    giraffes = ["Loading gireaffes"];

    constructor(props) {
        this.fetchGiraffes();
    }

    fetchGiraffes () {
        fetch(baseUrl + "rest/giraffes").then((response) => response.json().then((json) => this.giraffes=json))
    }
}

decorate(GiraffeStore,{giraffes: observable})
