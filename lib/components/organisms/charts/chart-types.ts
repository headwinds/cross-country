
export interface ChartProps {
    //data?: { x: number; y: number }[];
    data: any;
    width?: number;
    height?: number;
    fill?: string;
    onClick?: (chartEvent: any) => void;
}