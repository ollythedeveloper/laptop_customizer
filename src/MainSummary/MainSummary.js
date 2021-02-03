import React, { Component } from 'react';
import './MainSummary.css';
import SummaryOption from '../SummaryOption/SummaryOption'
import SummaryTotal from '../SummaryTotal/SummaryTotal'

function MainSummary({selected, USCurrencyFormat}) {
  const summary = Object.keys(selected).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    const selectedOption = selected[feature];
    return <SummaryOption 
              featureHash={featureHash}
              feature={feature}
              selectedOption={selectedOption}
              USCurrencyFormat={USCurrencyFormat}
          />
  });

  // const total = Object.keys(selected).reduce(
  //   (acc, curr) => acc + selected[curr].cost,
  //   0
  // );


  return (
    <section className="main__summary">
      <h2>Your cart</h2>
      {summary}
      <SummaryTotal 
        selected={selected}
        USCurrencyFormat={USCurrencyFormat}
      />
      {/* <div className="summary__total">
        <div className="summary__total__label">Total</div>
        <div className="summary__total__value">
          {USCurrencyFormat.format(total)}
        </div>
      </div> */}
    </section>

  )
}

export default MainSummary;