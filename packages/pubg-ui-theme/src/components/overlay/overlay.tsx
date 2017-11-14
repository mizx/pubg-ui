import React from 'react';

import styled from 'styled';

const Overlay = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 200;
`;

const OverlayLayer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

const OverlayHeader = OverlayLayer.extend`
    background: url('/img/overlay_header.png') center top/100% no-repeat;
`;

const OverlayFooter = OverlayLayer.extend`
    background: url('/img/overlay_footer.png') center bottom/100% no-repeat;
`;

export interface Props { }

export const OverlayComponent: React.SFC<Props> = props => (
    <Overlay>
        <OverlayHeader />
        <OverlayFooter />
    </Overlay>
);

export default OverlayComponent;