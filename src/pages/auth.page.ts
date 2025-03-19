import { expect, Page } from "@playwright/test";
import { BasePage } from "./base.page";
import { LoginUserModel, RegisterUserModel } from "../models/user.model";
import { appLoginCredentials } from "../test-data/login.data";
import prepareRandomUser from "../factories/user.factory";

export class AuthPage extends BasePage {
    loginUrl = `${process.env.BASE_URL}/auth/login`;
    registerUrl = `${process.env.BASE_URL}/auth/register`;

    emailInput = this.page.locator('#input-email');
    passwordInput = this.page.locator('#input-password');
    loginButton = this.page.getByRole('button', { name: 'Log In' });

    fullNameInput = this.page.locator('#input-name');
    repeatPasswordInput = this.page.locator('#input-re-password');
    agreementCheckbox = this.page.locator('span').first();
    registerButton = this.page.getByRole('button', { name: 'Register' });

    defaultFullName = 'Nick Jones'; 
    headerFullNameLocator = this.page.locator('ngx-header').getByText(this.defaultFullName);

    logOutTitle = this.page.getByTitle('Log out');

    emailInvalidFormatMessage = this.page.getByText('Email should be the real one!');
    emailRequiredMessage = this.page.getByText('Email is required');
    passwordInvalidFormatMessage = this.page.getByText('Password should contain from');
    passwordRequiredMessage = this.page.getByText('Password is required');
    passwordRepeatRequiredMessage = this.page.getByText('Password confirmation is');

    constructor(protected page: Page) {
      super(page);
    }
  
    async navigateToLogin(): Promise<void> {
        await this.page.goto(this.loginUrl);
    }

    async navigateToRegister(): Promise<void> {
        await this.page.goto(this.registerUrl);
    }

    async loginToApp(appLoginCredentials: LoginUserModel): Promise<void> {
        await this.emailInput.pressSequentially(appLoginCredentials.userEmail);
        await this.passwordInput.pressSequentially(appLoginCredentials.password);
    }

    async logInUser(credentials: typeof appLoginCredentials): Promise<void>{
        await this.navigateToLogin();
        await this.loginToApp(credentials);
        await this.loginButton.click();
        await expect(this.headerFullNameLocator).toBeVisible();
      }

    async registerToApp(registerUserData: RegisterUserModel): Promise<void> {
        await this.fullNameInput.pressSequentially(registerUserData.fullName);
        await this.emailInput.pressSequentially(registerUserData.email);
        await this.passwordInput.pressSequentially(registerUserData.password);
        await this.repeatPasswordInput.pressSequentially(registerUserData.password);
        await this.agreementCheckbox.click(); 
    }

    async registerAndLogInUser(credentials: typeof appLoginCredentials): Promise<void>{
        const newUserData = prepareRandomUser();
        await this.navigateToRegister();
        await this.registerToApp(newUserData);
        await this.registerButton.click();
        await expect(this.headerFullNameLocator).toBeVisible();
        await this.logOut();
        await this.logInUser(credentials);
      };
    

    async logOut(): Promise<void> {
       await this.headerFullNameLocator.click();
       await this.logOutTitle.click();
    }
}