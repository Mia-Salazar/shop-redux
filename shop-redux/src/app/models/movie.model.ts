export class MovieModel {
    academyAwardNominations: number;
    academyAwardWins: number;
    boxOfficeRevenueInMillions: number;
    budgetInMillions: number;
    name: string;
    rottenTomatesScore: number;
    runtimeInMinutes: number;
    _id: string;

    constructor(_id: string){
        this._id = _id;
    }
}