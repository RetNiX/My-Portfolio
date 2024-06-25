import { useActiveSection } from "@/components/ActiveSectionContext";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "@/lib/types";

// custom hook for scrolling in view (because it is used in multiple components)
export function useSectionInView(sectionName : SectionName, threshold = 0.75) {
    // Setting the active section to 'About' when the section is in view
    const { ref, inView } = useInView({
        threshold,
    });
    const { setActiveSection, timeLastClick } = useActiveSection();
    useEffect(() => {
        if (inView && Date.now() - timeLastClick > 1000) { // Wait for 1 second before setting the active section, to prevent scroll in view when clicking the nav links
            setActiveSection(sectionName);
        }
    }, [inView, setActiveSection, timeLastClick, sectionName]);
    return {
        ref
    };
}