export type ErrorResponse = {
    errorType: ErrorType;
    errorMessage: string;
    errors: string[] | null;
    errorRaw: any;
    stack?: string;
  };
  
  export type ErrorType = 'General' | 'Raw' | 'Validation' | 'Unauthorized';