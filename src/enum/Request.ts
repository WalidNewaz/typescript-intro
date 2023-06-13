import { ApprovalStatus } from "./ApprovalStatus";

export class Request {
    id: number;
    status: ApprovalStatus;
    description: string;

    constructor(id: number, status: ApprovalStatus, description: string) {
        this.id = id;
        this.status = status;
        this.description = description;
    }
}