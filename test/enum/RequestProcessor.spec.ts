import { expect } from 'chai';
import sinon, { SinonSpy } from 'sinon';
import { Request } from '../../src/enum/Request';
import { ApprovalStatus } from '../../src/enum/ApprovalStatus';
import { RequestProcessor } from '../../src/enum/RequestProcessor';

describe('RequestProcessor', () => {
    const logSpy: SinonSpy = sinon.spy(console, 'log');
    let request: Request;
    
    it('should log a message for a draft request', () => {
        request = new Request(1, ApprovalStatus.draft, 'Draft request');
        RequestProcessor.process(request);
        expect(logSpy.calledWith('Request 1 is a draft.')).to.be.true;
    });

    it('should log a message for a submitted request', () => {
        request = new Request(2, ApprovalStatus.submitted, 'Submitted request');
        RequestProcessor.process(request);
        expect(logSpy.calledWith('Request 2 was submitted.')).to.be.true;
    });

    it('should log a message for an approved request', () => {
        request = new Request(3, ApprovalStatus.approved, 'Approved request');
        RequestProcessor.process(request);
        expect(logSpy.calledWith('Request 3 was approved.')).to.be.true;
    });

    it('should log a message for a rejected request', () => {
        request = new Request(4, ApprovalStatus.rejected, 'Rejected request');
        RequestProcessor.process(request);
        expect(logSpy.calledWith('Request 4 was rejected.')).to.be.true;
    });

    it('should log a message for a pending request', () => {
        request = new Request(5, ApprovalStatus.pending, 'Pending request');
        RequestProcessor.process(request);
        expect(logSpy.calledWith('Request 5 is pending.')).to.be.true;
    });

    it('should change the status of a request', () => {
        request = new Request(6, ApprovalStatus.draft, 'Draft request');
        RequestProcessor.process(request);
        expect(logSpy.calledWith('Request 6 is a draft.')).to.be.true;
        request.updateStatus(ApprovalStatus.submitted);
        RequestProcessor.process(request);
        expect(logSpy.calledWith('Request 6 was submitted.')).to.be.true;
        request.updateStatus(ApprovalStatus.approved);
        RequestProcessor.process(request);
        expect(logSpy.calledWith('Request 6 was approved.')).to.be.true;
    });
});

