import { TestData } from "./testData";

export function prepareStubbedTestData(): void {
    TestData.InvalidUser.userName = "123";
    TestData.InvalidUser.passWord = "345";

    TestData.ValidSASUser.userName = "asdf";
    TestData.ValidSASUser.passWord = "asdf";
}

export function prepareIntegrationTestData(): void {
    TestData.InvalidUser.userName = "987654321";
    TestData.InvalidUser.passWord = "Holiday1";

    TestData.ValidSASUser.userName = "asdf";
    TestData.ValidSASUser.passWord = "asdf";
}