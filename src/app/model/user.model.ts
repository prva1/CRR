export interface User {
    // Header
    ppsn: string;
    stateDescription: string;

    // Card Details
    nameUser: string;
    address: string;
    casesize: string;
    tier: string;
    district: string;
    outstandingReturns: string;
    customerBalance: string;

    // Card Details Contact
    lastContactDate: string;
    lastContactReason: string;
    timeOncall: string;
}