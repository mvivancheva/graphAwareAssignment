export type Person = {
    data: Record<string, string>;
    kids: Record<string, {records: Person[] }>;
}