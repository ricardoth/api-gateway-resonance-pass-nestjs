import { Expose } from "class-transformer";

export class EventoPreference {
    @Expose()
    idEvento: number;
    @Expose()
    nombreEvento: string;
}