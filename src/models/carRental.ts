export interface CarRental {
    id: number;
    company: string;
    confirmation: string;
    adressPickUp: string;
    datePickUp: Date;
    timePickUp: number;
    adressDropOff: string;
    dateDropOff: Date;
    timeDropOff: number;
    dailyValue: number;
}