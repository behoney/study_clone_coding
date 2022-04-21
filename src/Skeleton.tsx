import React from "react";

interface Props {
    width?: number;
    height: number;
    circle: boolean;
    rounded: boolean;
    count: number;
    unit: string;
    animation: boolean;
    color: string;
    style: React.CSSProperties;
}

function Skeleton(): React.FC<Props> {
    return (<>
    </>)
}

export default Skeleton;
