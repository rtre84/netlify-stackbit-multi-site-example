import React from 'react';
import _ from 'lodash';

import {htmlToReact, markdownify, Link, safePrefix} from '../utils';

export default class ContentBlock extends React.Component {
    render() {
        return (
            <section id={_.get(this.props, 'section.section_id')} className="block text-block outer">
              <div className="inner">
                <div className="block-inside">
                  <div className="block-header">
                    <h2 className="block-title">{_.get(this.props, 'section.title')}</h2>
                    {_.get(this.props, 'section.subtitle') && 
                    <p className="block-subtitle">
                      {htmlToReact(_.get(this.props, 'section.subtitle'))}
                    </p>
                    }
                  </div>
                  <div className="block-content">
                    <div className="block-copy">
                      {markdownify(_.get(this.props, 'section.content'))}
                      {_.get(this.props, 'section.actions') && 
                      <p className="block-cta">
                        {_.map(_.get(this.props, 'section.actions'), (action, action_idx) => (
                        <Link key={action_idx} to={safePrefix(_.get(action, 'url'))} className="button">{_.get(action, 'label')}</Link>
                        ))}
                      </p>
                      }
                    </div>
                  </div>
                </div>
              </div>
            </section>
        );
    }
}
