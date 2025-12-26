esport interface User {
 id: string;
 email: string;
 profile: UserProfile;
}

export interface UserProfile {
 firstName: string;
 lastName: string;
 preferences: UserPreferences;
}

export interface UserPreferences {
 theme: 'light' | 'dark';
 notifications: boolean;
}
