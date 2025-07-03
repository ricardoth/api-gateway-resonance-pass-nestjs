import { Expose } from "class-transformer";

export class SectorPreference {
    @Expose()
    idSector: number;
    @Expose()
    nombreSector: string;
}