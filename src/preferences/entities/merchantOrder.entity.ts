export class MerchantOrder {
    idMerchantOrder: number;
    id: number;
    status: string;
    externalReference: string;
    preferenceId: string;
    marketPlace: string;
    dateCreated: Date;
    lastUpdate: Date;
    totalAmount: number;
    paidAmount: number;
    cancelled: boolean;
    orderStatus: string;
}