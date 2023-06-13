import { Request } from "./Request";
import { ApprovalStatus } from "./ApprovalStatus";

export class RequestProcessor {
    static process(request: Request): void {
        switch(request.status) {
            case ApprovalStatus.draft:
                console.log(`Request ${request.id} is a draft.`);
                break;
            case ApprovalStatus.submitted:
                console.log(`Request ${request.id} was submitted.`);
                break;
            case ApprovalStatus.approved:
                console.log(`Request ${request.id} was approved.`);
                break;
            case ApprovalStatus.rejected:
                console.log(`Request ${request.id} was rejected.`);
                break;
            case ApprovalStatus.pending:
                console.log(`Request ${request.id} is pending.`);
                break;
            default:
        }
    }
}