import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import styled from 'styled-components';

const CanvasContainer = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    background: #000015;
    top: 0;
    left: 0;
    z-index: -1;

`;

export default class Background extends React.Component {
    render() {
        return <CanvasContainer>
            <Canvas style={{height: "100vh"}}>
                <Stars />
                <OrbitControls />
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 15, 10]} angle={0.3} />
            </Canvas>
        </CanvasContainer>
    }
}