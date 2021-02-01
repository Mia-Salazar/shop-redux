export class MovieModel {
    academyAwardNominations?: number;
    academyAwardWins?: number;
    boxOfficeRevenueInMillions?: number;
    budgetInMillions?: number;
    name: string;
    rottenTomatesScore?: number;
    runtimeInMinutes: number;
    _id: string;
    quantity: number;

    constructor(_id: string, name: string, price: number, quantity: number) {
        this._id = _id;
        this.name = name;
        this.runtimeInMinutes = price;
        this.quantity = quantity;
    }
}