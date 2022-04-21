import React, { useMemo } from "react";
import styled from "@emotion/styled/macro"
import { keyframes } from "@emotion/react"

const pulseKeyframe = keyframes`
    0%{
        opacity:0
    }
    100%{
        opacity:1
    }
`
interface Props {
    width?: number;
    height?: number;
    circle?: boolean;
    rounded?: boolean;
    count?: number;
    animation?: boolean;
    color?: string;
    style?: React.CSSProperties;
}

const Base = styled.div<Props>`
    ${({ color }) => color && `background-color: ${color}`};
    ${({ rounded }) => rounded && `border-radius: 8px`};
    ${({ circle }) => circle && `border-radius: 50%`};
    ${({ width, height }) => (width || height) && `display:block`};
    ${({ animation }) => (animation) && pulseKeyframe};
    width: ${({ height }) => height && `${height}px`}
    height: ${({ width }) => width && `${width}px`}
`;

const Content = styled.span`
    opacity: 1;
`;

function Skeleton(props: Props) {
    const content = useMemo(() => [...Array(props.count)].map(() => '-').join(''), [props.count]);
    return (
        <Base>
            <Content>{content}</Content>
        </Base>
    )
}

export default Skeleton;
