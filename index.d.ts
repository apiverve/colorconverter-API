declare module '@apiverve/colorconverter' {
  export interface colorconverterOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface colorconverterResponse {
    status: string;
    error: string | null;
    data: any;
    code?: number;
  }

  export default class colorconverterWrapper {
    constructor(options: colorconverterOptions);

    execute(callback: (error: any, data: colorconverterResponse | null) => void): Promise<colorconverterResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: colorconverterResponse | null) => void): Promise<colorconverterResponse>;
    execute(query?: Record<string, any>): Promise<colorconverterResponse>;
  }
}
