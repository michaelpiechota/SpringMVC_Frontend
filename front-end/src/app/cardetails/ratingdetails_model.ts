export class RatingModel{ 
    public id:string;
    public rating:string;
    constructor(){
        this.id='';
        this.rating='';
    }
     fromJSON(json) {
        for (var propName in json)
            this[propName] = json[propName];
        return this;
    }
}