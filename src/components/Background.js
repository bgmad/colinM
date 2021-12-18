import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import styled from 'styled-components';

const CanvasContainer = styled.div`
    width: 100vw;
    height: 100%;
    position: fixed;
    background: #000015;
    top: 0;
    left: 0;
    z-index: -1;

`;
const StyledCanvas = styled(Canvas)`
    height: 100%;
    width: 100vw;
`;

export default class Background extends React.Component {
    render() {
        return <CanvasContainer>
            <StyledCanvas>
                <Stars />
                <OrbitControls />
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 15, 10]} angle={0.3} />
            </StyledCanvas>
        </CanvasContainer>
    }
}