export default class ResponseStructureDTO {
    declare status: string;
    declare code: number;
    declare message: string;
    declare data: any;

    constructor(status: string, code: number, message: string, data: any) {
        this.status = status;
        this.code = code;
        this.message = message;
        this.data = data ? data : null;
    }
}