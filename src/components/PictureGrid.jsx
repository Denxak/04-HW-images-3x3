import React from 'react';
import Picture from './Picture';
import { pictures } from '../utils/constants';

const PictureGrid = ({ enlargedPicture, onPictureClick }) => {
    return (
        <section className="row border mx-2">
            {enlargedPicture ? (
                <Picture picture={enlargedPicture} isFullSize onClick={() => onPictureClick(null)} />
            ) : (
                pictures.map((picture, index) => (
                    <Picture key={index} picture={picture} onClick={() => onPictureClick(picture)} />
                ))
            )}
        </section>
    );
};

export default PictureGrid;
