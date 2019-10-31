import React from 'react';
import _ from 'lodash';

import {htmlToReact} from '../utils';
import SubscribeForm from './SubscribeForm';

export default class Subscribe extends React.Component {
    render() {
        return (
            <section className="subscribe">
              <div className="inner">
                <h2 className="subscribe-title">{_.get(this.props, 'pageContext.site.data.subscribe.title')}</h2>
                <p className="subscribe-text">
                  {htmlToReact(_.get(this.props, 'pageContext.site.data.subscribe.content'))}
                </p>
                <SubscribeForm {...this.props} />
              </div>
            </section>
        );
    }
}
