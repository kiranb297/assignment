var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var chromium = require('playwright').chromium;
var expect = require("expect").expect;
var cp = require('child_process');
var playwrightClientVersion = cp.execSync('npx playwright --version').toString().trim().split(' ')[1];
(function () { return __awaiter(_this, void 0, void 0, function () {
    var capabilities, browser, page, submitBtn, nameField, validationMessage, successMsg, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                capabilities = {
                    'browserName': 'Chrome',
                    'browserVersion': 'latest',
                    'LT:Options': {
                        'platform': 'Windows 11',
                        'build': 'Playwright Sample Build',
                        'name': 'Playwright Sample Test',
                        'user': 'bkiran297',
                        'accessKey': 'HqWo4ik1ewOjwM5KCPgVTJzZ3WFzYCduiIn013fm8T7cnB7lSm',
                        'network': true,
                        'video': true,
                        'console': true,
                        'tunnel': false,
                        'tunnelName': '',
                        'geoLocation': '',
                        'playwrightClientVersion': playwrightClientVersion
                    }
                };
                return [4 /*yield*/, chromium.connect({
                        wsEndpoint: "wss://cdp.lambdatest.com/playwright?capabilities=".concat(encodeURIComponent(JSON.stringify(capabilities)))
                    })];
            case 1:
                browser = _a.sent();
                return [4 /*yield*/, browser.newPage()];
            case 2:
                page = _a.sent();
                return [4 /*yield*/, page.goto('https://www.lambdatest.com/selenium-playground')];
            case 3:
                _a.sent();
                return [4 /*yield*/, page.getByRole('link', { name: 'Input Form Submit' }).click()];
            case 4:
                _a.sent();
                submitBtn = page.getByRole('button', { name: 'Submit' });
                return [4 /*yield*/, submitBtn.click()];
            case 5:
                _a.sent();
                return [4 /*yield*/, page.getByPlaceholder('Name', { exact: true })];
            case 6:
                nameField = _a.sent();
                return [4 /*yield*/, nameField.evaluate(function (element) {
                        var input = element;
                        return input.validationMessage;
                    })];
            case 7:
                validationMessage = _a.sent();
                expect(validationMessage.toLowerCase()).toContain('fill out this field');
                return [4 /*yield*/, nameField.fill('Kiran B')];
            case 8:
                _a.sent();
                return [4 /*yield*/, page.locator('[placeholder="Email"]').fill('example@mail.com')];
            case 9:
                _a.sent();
                return [4 /*yield*/, page.getByPlaceholder('Password').fill('password')];
            case 10:
                _a.sent();
                return [4 /*yield*/, page.locator('[id="company"]').fill('Company name')];
            case 11:
                _a.sent();
                return [4 /*yield*/, page.locator('//input[@placeholder="Website"]').fill('Website.com')];
            case 12:
                _a.sent();
                return [4 /*yield*/, page.locator('[name="country"]').selectOption('United States')];
            case 13:
                _a.sent();
                return [4 /*yield*/, page.getByPlaceholder('City').fill('New York')];
            case 14:
                _a.sent();
                return [4 /*yield*/, page.locator('[id="inputAddress1"]').fill('199th lafayette street')];
            case 15:
                _a.sent();
                return [4 /*yield*/, page.getByPlaceholder('Address 2').fill('newyork central perk')];
            case 16:
                _a.sent();
                return [4 /*yield*/, page.locator('//input[@id="inputState"]').fill('newyorkcentral')];
            case 17:
                _a.sent();
                return [4 /*yield*/, page.getByPlaceholder('Zip code').fill('10001')];
            case 18:
                _a.sent();
                return [4 /*yield*/, submitBtn.click()];
            case 19:
                _a.sent();
                return [4 /*yield*/, page.locator('[class="success-msg hidden"]').textContent()];
            case 20:
                successMsg = _a.sent();
                _a.label = 21;
            case 21:
                _a.trys.push([21, 24, , 27]);
                expect(successMsg).toContain('Thanks');
                // Mark the test as completed or failed
                return [4 /*yield*/, page.evaluate(function (_) { }, "lambdatest_action: ".concat(JSON.stringify({ action: 'setTestStatus', arguments: { status: 'passed', remark: 'Test scenario 3 passed' } })))];
            case 22:
                // Mark the test as completed or failed
                _a.sent();
                return [4 /*yield*/, teardown(page, browser)];
            case 23:
                _a.sent();
                return [3 /*break*/, 27];
            case 24:
                e_1 = _a.sent();
                return [4 /*yield*/, page.evaluate(function (_) { }, "lambdatest_action: ".concat(JSON.stringify({ action: 'setTestStatus', arguments: { status: 'failed', remark: e_1.stack } })))];
            case 25:
                _a.sent();
                return [4 /*yield*/, teardown(page, browser)];
            case 26:
                _a.sent();
                throw e_1;
            case 27: return [2 /*return*/];
        }
    });
}); })();
function teardown(page, browser) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, page.close()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, browser.close()];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
