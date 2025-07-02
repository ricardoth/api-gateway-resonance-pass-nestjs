import { plainToInstance } from "class-transformer";

export const mapEntityResponse = <T>(
  entity: new () => T,
  response: { data: any; }
): { data: T | T[]; } => {
  return {
    ...response,
    data: plainToInstance(entity, response.data, {
      excludeExtraneousValues: true,
    }),
  };
};