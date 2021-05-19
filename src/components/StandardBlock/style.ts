import styled from 'styled-components';
import { align } from '@bucket-of-bolts/styled-companion/build';
import Img from 'gatsby-image';
import { media, grid, cell, withTheme } from '../../style';
import { effect, withEffects } from '../../lib/effects';

export const StandardBlockContainer = withTheme(styled.div`
    margin: 2rem 1rem;
    ${media({ xs: 'margin: 2rem 0rem;' })}
    ${align('center', 'center', 'column')};
    position: relative;

    // @ts-ignore
    font-size: ${props => props.theme.font[props.fontSize]};

    // @ts-ignore
    ${props => effect(props)}
`);

export const Inner = withTheme(styled.div`
    max-width: 60%;
    ${media({ xs: 'max-width: 80%', sm: 'max-width: 70%' })};
    // @ts-ignore
    font-size: ${props => props.theme.font[props.fontSize]};
    font-weight: 300;
`);

export const ImageSingle = styled.div`
    position: relative;
    ${align('center', 'center')};
    width: 100%;
`;

export const ImageWrap = styled.div`
    width: 75%;
    ${media({ xs: 'width: 100%;' })}
`;

export const Image = styled(Img)`
    width: 100%;
    height: auto;
    background-color: #f2f1ef;
    border-radius: 2px;
`;

export const ImageGallery = styled.div`
    margin: 0 5rem;
    ${media({ sm: 'margin: 0 2rem;', xs: 'margin: 0' })};
    width: 100%;
`;

export const ImageGalleryGrid = styled.div`
    ${grid({ gutters: { all: '1rem', xs: '0.5rem' } })};
`;

export const GalleryItem = withEffects(styled.div`
    ${cell({ xs: 12, all: 4 })};

    // @ts-ignore
    ${props => effect(props)}
`);
