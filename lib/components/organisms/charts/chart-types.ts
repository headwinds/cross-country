
export interface ChartProps {
    data: { x: number; y: number }[];
    width: number;
    height: number;
    fill?: string;
    onClick?: (event: React.MouseEvent<SVGCircleElement, MouseEvent>, d: { x: number; y: number }) => void;
}