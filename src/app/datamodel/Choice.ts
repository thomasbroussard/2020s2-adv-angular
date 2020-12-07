export class Choice{
    title !:string;
    validity !:boolean;


    constructor(title :string, validity: boolean){
        this.title = title;
        this.validity = validity;
    }
}