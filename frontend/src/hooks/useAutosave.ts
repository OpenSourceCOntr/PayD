import { useState, useEffect, useCallback } from "react";

export function useAutosave<T>(key: string, data: T) {
    const [saving, setSaving] = useState(false);
    const [lastSaved, setLastSaved] = useState<Date | null>(null);

    const loadSavedData = useCallback(() => {
        const saved = localStorage.getItem(key);
        if (saved) {
            try {
                return JSON.parse(saved) as T;
            } catch (e) {
                console.error("Failed to parse autosave data", e);
            }
        }
        return null;
    }, [key]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setSaving(true);
            localStorage.setItem(key, JSON.stringify(data));
            setLastSaved(new Date());
            setSaving(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, [key, data]);

    return { saving, lastSaved, loadSavedData };
}
