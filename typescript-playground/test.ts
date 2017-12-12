export class Test {

    constructor(public test: string) {
        console.log(this.test);

        var y = () => console.log(this.test);

        let headline = `!Herzlich Willkommen zum ${ this.test }-Workshop!`;
        

    }
}