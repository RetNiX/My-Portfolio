"use client";

import type { SectionName } from '@/lib/types';
import { useState, createContext, useContext } from 'react';


type ActiveSectionContextType = {
    activeSection: SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
    timeLastClick: number;
    setTimeLastClick: React.Dispatch<React.SetStateAction<number>>;
}
type ActiveSectionContextProps = {
    children: React.ReactNode;
}
export const ActiveSection = createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContext({ children }: ActiveSectionContextProps) {
    let [activeSection, setActiveSection] = useState<SectionName>('Home');
    let [timeLastClick, setTimeLastClick] = useState<number>(0); // we need to keep track of this to disable the observer temporarily when clicking the nav links
    return <ActiveSection.Provider value={{ activeSection, setActiveSection, timeLastClick, setTimeLastClick }}>{children}</ActiveSection.Provider>;
}
// Custom Hook to take care of the null value of the context
export function useActiveSection() {
    let context = useContext(ActiveSection);
    if (!context) {
        throw new Error('useActiveSection must be used within a ActiveSectionProvider');
    }
    return context;
}