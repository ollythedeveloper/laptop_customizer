import React from 'react';
import slugify from 'slugify';
import FeatureOption from '../FeatureOption/FeatureOption';
import FeatureItem from '../FeatureItem/FeatureItem';

function MainForm({ featuresProp, selected, USCurrencyFormat, updateFeature }) {
  const features = Object.keys(featuresProp).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    const options = featuresProp[feature].map(item => {
      const itemHash = slugify(JSON.stringify(item));

      return (
        <FeatureItem
          itemHash={itemHash}
          feature={feature}
          updateFeature={updateFeature}
          item={item}
          USCurrencyFormat={USCurrencyFormat}
          selected={selected} />
      );
    });

    return (
      <FeatureOption
        featureHash={featureHash}
        feature={feature}
        options={options} />
    );
  });
  return (
    <form className="main__form">
      <h2>Customize your laptop</h2>
      {features}
    </form>
  )
}


export default MainForm;