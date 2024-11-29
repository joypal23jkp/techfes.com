
export interface BaseSVGProps {
    svgAttrs: SVGElement['attributes']
    height?: number;
    width?: number;
    fill?: string;
    positions: {x: number, y: number}[]
}

const BaseSVG = defineComponent(
    (props: SVGElement['attributes'], { slots}) => {

        return () => {
            return h(
                'svg',
                {
                    viewBox: "0 0 932 333",
                    width: "auto",
                    height: "auto",
                    ...props as any,
                    xmlns: "http://www.w3.org/2000/svg"
                },
                slots?.default()
            );
        }
    }
)

const SVGPath = defineComponent(
    (props: SVGMPathElement['attributes'], { slots}) => {
        return () => {
            return h(
                'path',
                {
                    fill: 'none',
                    ...props as any
                }
            );
        }
    }
)

export { BaseSVG, SVGPath };