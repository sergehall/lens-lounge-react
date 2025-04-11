import {
    FaHeart,
    FaRegHeart,
    FaComment,
    FaShare,
    FaEllipsisH,
} from 'react-icons/fa';

import React, { SVGProps } from 'react';


export type IconComponent = (props: SVGProps<SVGSVGElement>) => React.ReactElement
    ;

export const Icons = {
    Heart: FaHeart as IconComponent,
    RegHeart: FaRegHeart as IconComponent,
    Comment: FaComment as IconComponent,
    Share: FaShare as IconComponent,
    Ellipsis: FaEllipsisH as IconComponent,
};
