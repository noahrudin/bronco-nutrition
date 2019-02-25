"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var firebase_service_1 = require("./firebase.service");
describe('FirebaseService', function () {
    beforeEach(function () { return testing_1.TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = testing_1.TestBed.get(firebase_service_1.FirebaseService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=firebase.service.spec.js.map