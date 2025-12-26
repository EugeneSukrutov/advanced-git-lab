export namespace UserTypes {
 export interface IUser {
  uuid: string;
  email: string;
  profile: IUserMetadata;
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
}
