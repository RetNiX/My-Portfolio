// Trying to create a reusable component for section headings

import { FunctionComponent } from 'react';

type SectionHeadingProps = {
    children: React.ReactNode;
}

const SectionHeading: FunctionComponent<SectionHeadingProps> = ({children} : SectionHeadingProps) => {
    return (
        <h2 className='text-3xl font-medium capitalize mb-8 text-center'>{children}</h2>
    );
}

export default SectionHeading;