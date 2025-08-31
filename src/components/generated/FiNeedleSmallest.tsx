import * as React from "react";
import type { SVGProps } from "react";
const SvgFiNeedleSmallest = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        width="1em"
        height="1em"
        viewBox="0 0 400.667 400.666"
        {...props}
    >
        <filter
            id="fi_needle_smallest_svg__a"
            width={2.326}
            height={1.839}
            x={-0.663}
            y={-0.417}
            filterUnits="objectBoundingBox"
        >
            <feGaussianBlur in="SourceAlpha" result="blur" stdDeviation={5} />
            <feOffset in="blur" result="offsetBlurredAlpha" />
            <feMerge>
                <feMergeNode in="offsetBlurredAlpha" />
                <feMergeNode in="SourceGraphic" />
            </feMerge>
        </filter>
        <g
            filter="url(#fi_needle_smallest_svg__a)"
            transform="matrix(.57238 0 0 .6302 85.88 82.604)"
        >
            <path
                fill="#fff"
                d="m200.333 207 .005-.023.005.023 11.495-46.198-11.495-28.434-.005.018-.005-.018-11.495 28.434z"
            />
            <path
                fill="none"
                stroke="#b2b2b2"
                strokeMiterlimit={10}
                strokeWidth={0.5}
                d="m200.333 207 .005-.023.005.023 11.495-46.198-11.495-28.434-.005.018-.005-.018-11.495 28.434z"
            />
        </g>
        <g
            filter="url(#fi_needle_smallest_svg__a)"
            transform="matrix(.57238 0 0 .6302 85.88 82.604)"
        >
            <path
                fill="#232323"
                d="M200.331 196.091s-9.492 18.192-9.331 24.818c.062 2.56 1.828 4.228 9.331 4.228s9.114-1.709 9.146-4.228c.083-6.507-8.809-24.493-8.809-24.493"
            />
            <path
                fill="none"
                stroke="#353535"
                strokeMiterlimit={10}
                strokeWidth={0.5}
                d="M200.331 196.091s-9.492 18.192-9.331 24.818c.062 2.56 1.828 4.228 9.331 4.228s9.114-1.709 9.146-4.228c.083-6.507-8.809-24.493-8.809-24.493"
            />
        </g>
    </svg>
);
export default SvgFiNeedleSmallest;
