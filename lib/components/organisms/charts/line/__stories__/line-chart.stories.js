import LineChart from "../line-chart";
import { dataset } from "../../data-set"; // Add missing import statement

export default {
  title: "components/organisms/charts/chart/line",
};

export const LineChart = {
  render: () => <LineChart data={dataset} width={600} height={400} />,
  name: "line chart",
};
