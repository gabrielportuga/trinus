export interface Event {
    id: number;
    address: string;
    allDay: boolean;
    startTime: number;
    endTime: number;
    url: string;
    comments: string;
    expectedValue: number;
    effectiveValue: number;
}