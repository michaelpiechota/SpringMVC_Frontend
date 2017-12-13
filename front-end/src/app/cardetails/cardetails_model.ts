export class CarModel{ 
    public id:string;
    public make:string;
    public model:string;
    public year:string;
    constructor(){
        this.id='';
        this.make='';
        this.model='';
        this.year ='';
    }
    fromJSON(json) {
        for (var propName in json)
            this[propName] = json[propName];
        return this;
    }
}