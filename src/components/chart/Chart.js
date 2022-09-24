import { Line } from "react-chartjs-2";
// eslint-disable-next-line no-unused-vars
import { Chart } from "chart.js/auto";
import "./chart.css";

export default function LineChart() {
  const currentYear = new Date().getFullYear(),
    previousYear = currentYear - 1,
    twoYearBefore = currentYear - 2,
    threeYearBefore = currentYear - 3,
    fourYearBefore = currentYear - 4,
    fiveYearBefore = currentYear - 5;

  const data = {
    labels: [
      currentYear,
      previousYear,
      twoYearBefore,
      threeYearBefore,
      fourYearBefore,
      fiveYearBefore,
    ].reverse(),

    datasets: [
      {
        label: "Men's Clothes",
        data: [128, 222, 444, 222, 344, 560],
        borderColor: "red",
        borderWidth: 2,
      },
      {
        label: "Women's Clothes",
        data: [513, 675, 745, 459, 686, 780],
        borderColor: "blue",
        borderWidth: 2,
      },
      {
        label: "Jewelry",
        data: [266, 540, 199, 723, 415, 460],
        borderColor: "green",
        borderWidth: 2,
      },
      {
        label: "Electronics",
        data: [677, 355, 600, 789, 850, 200],
        borderColor: "Orange",
        borderWidth: 2,
      },
    ],
  };
  return (
    <div className="chart">
      <div className="chart_content">
        <p className="chart_text" data-aos="fade-down">
          Here You can see the four-year sales volume of products sorted by
          category.
        </p>
      </div>
      <Line data-aos="zoom-in" data-aos-delay="500" data={data} />
      <ul
        className="chart_bottom-content"
        data-aos="fade-right"
        data-aos-delay="600"
      >
        <li className="men">
          In {fiveYearBefore}, 100 thousand Men's Clothes were sold, and today
          it reached 560 thousand.
        </li>
        <li className="women">
          Women's Clothing has sold more than
          <span className="men"> Men's Clothing</span> and it currently stands
          at 780 thousand.
        </li>
        <li className="jew">
          The jewelry is also finished with a good result, even if it is not
          stable for the indicated time.
        </li>
        <li className="elect">
          Electronics sales recorded the highest result in {fiveYearBefore}, but
          the volume of sales decreased for 6 years and decreased to 200
          thousand which is the lowest result.
        </li>
      </ul>
    </div>
  );
}
