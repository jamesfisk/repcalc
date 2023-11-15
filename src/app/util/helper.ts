export interface UserSaveData {
    weight: number,
    rpe: number,
    reps: number
}

const currentVersion = 0;
const storageKey = `rpe${currentVersion}`;

const saveCurrentState = (save: UserSaveData): void => {
    localStorage.setItem(storageKey, JSON.stringify(save));
}

const getCurrentState = (): UserSaveData | undefined => {
    const save = localStorage.getItem(storageKey);
    if (save) {
        return JSON.parse(save) as UserSaveData;
    }
    return undefined;
}

export {saveCurrentState, getCurrentState};