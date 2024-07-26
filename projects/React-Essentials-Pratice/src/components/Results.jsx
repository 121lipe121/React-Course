import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ inputValues }) {
  const annualData = calculateInvestmentResults({
    initialInvestment: Number(inputValues.initial),
    annualInvestment: Number(inputValues.annual),
    expectedReturn: Number(inputValues.expected),
    duration: inputValues.duration,
  });

  let totalInterest = 0;
  let investedCapital = Number(inputValues.initial);

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {inputValues.duration[0] !== 0
          ? annualData.map(
              (investment) => (
                (totalInterest += investment.interest),
                (investedCapital += investment.annualInvestment),
                (
                  <tr key={investment.year}>
                    <th>{investment.year}</th>
                    <th>{formatter.format(investment.valueEndOfYear)}</th>
                    <th>{formatter.format(investment.interest)}</th>
                    <th>{formatter.format(totalInterest)}</th>
                    <th>{formatter.format(investedCapital)}</th>
                  </tr>
                )
              )
            )
          : null}
      </tbody>
    </table>
  );
}
