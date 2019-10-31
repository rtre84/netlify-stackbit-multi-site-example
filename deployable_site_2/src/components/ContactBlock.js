import React from 'react';
import _ from 'lodash';

import {htmlToReact} from '../utils';
import ContactForm from './ContactForm';

export default class ContactBlock extends React.Component {
    render() {
        return (
            <section id={_.get(this.props, 'section.section_id')} className="block contact-block outer">
              <div className="inner">
                <div className="block-inside">
                  <div className="block-header">
                    <h2 className="block-title line-top">{_.get(this.props, 'section.title')}</h2>
                    {_.get(this.props, 'section.subtitle') && 
                    <p className="block-subtitle">
                      {htmlToReact(_.get(this.props, 'section.subtitle'))}
                    </p>
                    }
                  </div>
                  <div className="block-content">
                    <ContactForm {...this.props} />
                  </div>
                </div>
              </div>
            </section>
        );
    }
}
