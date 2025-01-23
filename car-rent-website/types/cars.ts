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
    }
}