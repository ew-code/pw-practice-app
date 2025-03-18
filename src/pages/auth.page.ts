import { expect, Page } from "@playwright/test";
import { BasePage } from "./base.page";
import { LoginUserModel, RegisterUserModel } from "../models/user.model";

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
        await this.loginButton.click();
    }

    async registerToApp(registerUserData: RegisterUserModel): Promise<void> {
        await this.fullNameInput.pressSequentially(registerUserData.fullName);
        await this.emailInput.pressSequentially(registerUserData.email);
        await this.passwordInput.pressSequentially(registerUserData.password);
        await this.repeatPasswordInput.pressSequentially(registerUserData.password);
        await this.agreementCheckbox.click(); 
    }

    async logOut(): Promise<void> {
       await this.headerFullNameLocator.click();
       await this.logOutTitle.click();
    }
}