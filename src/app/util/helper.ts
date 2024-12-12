export interface Page {
    id: string,
    name: string,
    href: string
}

const allPages: Page[] = [
    { id: "rpe", name: 'RPE Calculator', href: "/" },
    { id: "loading", name: 'Barbell Loading Guide', href: "/loading" },
    { id: "platecalculator", name: 'Compute Weight From Plates', href: "/platecalculator" },
    { id: "kgtolbs", name: 'Convert kg to lbs', href: "/kgtolbs" },
    { id: "onerm", name: "1RM Calculator", href: "/onerm" },
    { id: "dots", name: 'DOTS Calculator', href: "/dots" },
    { id: "about", name: 'About', href: '/about' },
]

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

export { saveCurrentState, getCurrentState, allPages };