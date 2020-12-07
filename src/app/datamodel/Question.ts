import { Choice } from './Choice';

export class Question {
    title:string;
    choices :Choice[] = new Array();

    constructor(title:string, choices:Choice[]){
        this.title = title;
        this.choices = choices;
    }

}