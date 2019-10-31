import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';

import {Layout} from '../components/index';
import {getPages, Link, safePrefix, htmlToReact} from '../utils';

export default class Blog extends React.Component {
    render() {
        let display_posts = _.orderBy(getPages(this.props.pageContext.pages, '/posts'), 'frontmatter.date', 'desc');
        return (
            <Layout {...this.props}>
            <div className="outer">
              <div className="inner">
                <div className="post-feed">
                  {_.map(display_posts, (post, post_idx) => (
                  <article key={post_idx} className="post">
                    <header className="post-header inner-small">
                      <h2 className="post-title line-top"><Link to={safePrefix(_.get(post, 'url'))} rel="bookmark">{_.get(post, 'frontmatter.title')}</Link></h2>
                      <div className="post-meta">
                        <time className="published"
                          dateTime={moment(_.get(post, 'frontmatter.date')).strftime('%Y-%m-%d %H:%M')}>{moment(_.get(post, 'frontmatter.date')).strftime('%B %d, %Y')}</time>
                      </div>
                      {_.get(post, 'frontmatter.subtitle') && 
                      <div className="post-subtitle">
                        {htmlToReact(_.get(post, 'frontmatter.subtitle'))}
                      </div>
                      }
                    </header>
                    {_.get(post, 'frontmatter.thumb_img_path') && 
                    <Link className="post-thumbnail" to={safePrefix(_.get(post, 'url'))}>
                      <img className="thumbnail" src={safePrefix(_.get(post, 'frontmatter.thumb_img_path'))} alt={_.get(post, 'frontmatter.title')} />
                    </Link>
                    }
                    {_.get(post, 'frontmatter.excerpt') && 
                    <div className="post-excerpt inner-small">
                      <p>{_.get(post, 'frontmatter.excerpt')}</p>
                    </div>
                    }
                  </article>
                  ))}
                </div>
              </div>
            </div>
            </Layout>
        );
    }
}
