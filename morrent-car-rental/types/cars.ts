export interface Cars {
    _id : string;
    name : string;
    _type : "car";
    image? : {
        asset : {
            _ref : string;
            _type : "image";
        }
    };
    brand : string;
    type : string;
    fuelCapacity : string;
    transmission : string;
    seatingCapacity : string;
    pricePerDay : string;
    originalPrice : string;
    tags : string[];
    slug : {
        _type : "slug"
        current : string
    };
    quantity : number;
   
}

export interface Cart  {
    _id : string;
    name : string;  
    image? : {
        asset : {
            _ref : string;
            _type : "image";
        }
    };
    brand : string;
    type : string;
    fuelCapacity : string;
    transmission : string;
    seatingCapacity : string;
    pricePerDay : string;
    slug : {
        _type : "slug"
        current : string
    };
    quantity : number;
    uuid:number | string | undefined;
}