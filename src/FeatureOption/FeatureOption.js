import React from 'react';
import slugify from 'slugify';

function FeatureOption({featureHash, feature, options}) {
    return (
      <fieldset className="feature" key={featureHash}>
        <legend className="feature__name">
          <h3>{feature}</h3>
        </legend>
        {options}
      </fieldset>
    );
  }

export default FeatureOption;
