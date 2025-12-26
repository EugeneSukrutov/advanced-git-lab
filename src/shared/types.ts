export namespace UserTypes {
 export interface IUser {
  uuid: string;
  email: string;
  profile: IUserMetadata;
 }
export interface User {
 id: string;
 email: string;
 profile: UserProfile;
 auth: AuthInfo;
}

 export interface IUserProfile {
  personalInfo: PersonalInformation;
  settings: UserSettings;
 }

 export interface PersonalInformation {
  firstName: string;
  lastName: string;
  birthDate?: Date;
 }

 export interface UserSettings {
  theme: ThemeMode;
  notificationSettings: NotificationConfig;
 }

 export type ThemeMode = 'LIGHT' | 'DARK' | 'AUTO';

 export interface NotificationConfig {
  email: boolean;
  push: boolean;
  sms: boolean;
 }

 export interface UserMetadata {
  createdAt: Date;
  updatedAt: Date;
  version: number;
 }
export interface UserProfile {
 firstName: string;
 lastName: string;
 preferences: UserPreferences;
 security: SecuritySettings;
}

export interface UserPreferences {
 theme: 'light' | 'dark' | 'system';
 notification: boolean;
 language: string;
}

export interface AuthInfo {
 roles: string[];
 permissions: string[];
 lastLogin: Date;
 mfaEnabled: boolean;
}

export interface SecuritySettings {
 twoFactorAuth: boolean;
 loginAlerts: boolean;
 sessionTimeout: number;
}
