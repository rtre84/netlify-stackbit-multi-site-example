import React from 'react';
import _ from 'lodash';

import {markdownify, Link, safePrefix} from '../utils';

export default class Intro extends React.Component {
    render() {
        return (
            <div id={_.get(this.props, 'section.section_id')} className="intro">
              <div className="intro-text">
                {markdownify(_.get(this.props, 'section.content'))}
              </div>
              {_.get(this.props, 'section.actions') && 
              <p className="intro-cta">
                {_.map(_.get(this.props, 'section.actions'), (action, action_idx) => (
                <Link key={action_idx} to={safePrefix(_.get(action, 'url'))} className="button">{_.get(action, 'label')}</Link>
                ))}
              </p>
              }
            </div>
        );
    }
}
