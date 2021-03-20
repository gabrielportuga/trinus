import { User } from "./user";

export class Trip {
    id: number;
    name: string;
    country: string;
    startDate: string;
    endDate: string;
    note: string;
    expectedExpense: number;
    effectiveExpense: number;
    userId: number;
    user: User;

    constructor() {
        this.id = null;
        this.name = '';
        this.country = '';
        this.startDate = '';
        this.endDate = '';
        this.note = null;
        this.expectedExpense = null;
        this.effectiveExpense = null;
        this.userId = null;
        this.user = null
    }
}