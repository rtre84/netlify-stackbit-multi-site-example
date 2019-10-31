import React from 'react';
import _ from 'lodash';

import {markdownify} from '../utils';

export default class HeroBlock extends React.Component {
    render() {
        return (
            <section id={_.get(this.props, 'section.section_id')} className="block hero-block outer">
              <div className="inner-small">
                <div className="block-header">
                  <h2 className="block-title">{_.get(this.props, 'section.title')}</h2>
                </div>
                <div className="block-content">
                  <div className="block-copy">
                    {markdownify(_.get(this.props, 'section.content'))}
                  </div>
                </div>
              </div>
            </section>
        );
    }
}
