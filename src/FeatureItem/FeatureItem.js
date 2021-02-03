import React, { Component } from 'react';
import slugify from 'slugify';

class FeatureItem extends Component {
    render(){
        const itemHash = slugify(JSON.stringify(item));
        return (
            <div className="FeatureItem">
          <div key={itemHash} className="feature__item">
            <input
              type="radio"
              id={itemHash}
              className="feature__option"
              name={slugify(feature)}
              checked={item.name === this.state.selected[feature].name}
              onChange={e => this.updateFeature(feature, item)}
            />
            <label htmlFor={itemHash} className="feature__label">
              {item.name} ({USCurrencyFormat.format(item.cost)})
            </label>
          </div>
          </div>
        );
    }
}

export default FeatureItem;