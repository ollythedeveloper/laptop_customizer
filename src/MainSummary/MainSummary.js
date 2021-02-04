import React, { Component } from 'react';
import SummaryOption from '../SummaryOption/SummaryOption'
import SummaryTotal from '../SummaryTotal/SummaryTotal'

function MainSummary({ selected, USCurrencyFormat }) {
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


  return (
    <section className="main__summary">
      <h2>Your cart</h2>
      {summary}
      <SummaryTotal
        selected={selected}
        USCurrencyFormat={USCurrencyFormat}
      />
    </section>

  )
}

export default MainSummary;