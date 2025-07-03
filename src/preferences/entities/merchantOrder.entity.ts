import { Expose } from "class-transformer";

export class MerchantOrder {
    @Expose()
    idMerchantOrder: number;
    @Expose()
    id: number;
    @Expose()
    status: string;
    @Expose()
    externalReference: string;
    @Expose()
    preferenceId: string;
    @Expose()
    marketPlace: string;
    @Expose()
    dateCreated: Date;
    @Expose()
    lastUpdate: Date;
    @Expose()
    totalAmount: number;
    @Expose()
    paidAmount: number;
    @Expose()
    cancelled: boolean;
    @Expose()
    orderStatus: string;
}