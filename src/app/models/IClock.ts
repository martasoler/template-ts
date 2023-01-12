// A clock can be defined only with an id.
// The name can be left empty, and there are default values for the timezone and format

export interface IClock {
    id: number;             // Identificator
    name?: string;          // Name of the clock
    timezone?: string;      // Defined timezone. Ex: 'UTC-1'
    format24?: boolean;     // Boolean to define the format
}