import { Exclude, Expose } from "class-transformer";

export class BaseDto { 
    @Expose()
    activo: boolean;
    @Expose()
    fechaCreacion: Date;
    @Exclude()
    fechaModified: Date;
}