import React from 'react';

const LeftArrow = ({ fill }: { fill: string }) => {
    return (
        <svg fill={fill} height="30px" width="30px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 330.002 330.002">
            <path id="XMLID_227_" d="M233.25,306.001L127.5,165.005L233.25,24.001c4.971-6.628,3.627-16.03-3-21c-6.627-4.971-16.03-3.626-21,3
            L96.75,156.005c-4,5.333-4,12.667,0,18l112.5,149.996c2.947,3.93,7.451,6.001,12.012,6.001c3.131,0,6.29-0.978,8.988-3.001
            C236.878,322.03,238.221,312.628,233.25,306.001z"/>
        </svg>
    )
}

LeftArrow.displayName = 'LeftArrow';

export default LeftArrow;
