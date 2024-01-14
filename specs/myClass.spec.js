import { expect, use } from 'chai';
import MyClass from '../src/myClass.cjs';
import Sinon, { mock, spy, stub } from 'sinon';
import chaiAsPromised from 'chai-as-promised';

use(chaiAsPromised);
const myClass = new MyClass;
describe("Test suit", () => {
    const ok = spy(myClass, "add");
    beforeEach(function () {
        ok.restore();
    });
    it("1.Test the add method", () => {
        expect(ok(1, 2)).to.be.equal(3);
    });
    it("2.spy the add method", () => {
        ok(2, 3);
        expect(ok.calledWith(2, 3)).true;
    });
    it("3.mock the add method", () => {
        const myMock = mock(myClass);
        myMock.expects("add").withArgs(3, 5).returns(3);
        let x = myClass.add(3, 5);
        expect(x).equal(3)
        console.log('x ', x);
    });
    it("4.stub the add method", () => {
        const myStub = stub(myClass, "add");
        myStub.withArgs(4, 5).returns(100);
        expect(myStub(4, 5)).equal(100);
        expect(myStub(4, 5)).equal(100);
    });
    it("5.promise", async () => {
        const myMock = mock(myClass);
        myMock.expects("getResult").returns(2)
        // const r = await myClass.getResult();
        expect(myClass.getResult()).to.be.equal(2);
    }).timeout(3000);
});