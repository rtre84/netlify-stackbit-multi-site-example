import React from 'react';
import _ from 'lodash';

import {htmlToReact, getPages, Link, safePrefix} from '../utils';

export default class PortfolioBlock extends React.Component {
    render() {
        let display_projects = _.orderBy(getPages(this.props.pageContext.pages, '/projects'), 'frontmatter.date', 'desc');
        let recent_projects = display_projects.slice(0, _.get(this.props, 'section.num_projects_displayed'));
        let post_len = _.size(recent_projects);
        return (
            <section id={_.get(this.props, 'section.section_id')} className="portfolio-block block outer">
              <div className="inner">
                <div className="block-header">
                  <h2 className="block-title line-top">{_.get(this.props, 'section.title')}</h2>
                  {_.get(this.props, 'section.subtitle') && 
                  <p className="block-subtitle">
                    {htmlToReact(_.get(this.props, 'section.subtitle'))}
                  </p>
                  }
                </div>
                <div className="block-content">
                  <div className={'portfolio-feed layout-' + _.get(this.props, 'section.layout_style')}>
                    {
                    _.map(recent_projects, (post, post_idx) => (
                    <article key={post_idx} className="post project">
                      {(post_idx === post_len - 1) ? 
                      <Link to={_.get(this.props, 'section.view_all_url')} className="post-link">
                        {_.get(post, 'frontmatter.thumb_img_path') && 
                        <div className="post-thumbnail">
                          <img className="thumbnail" src={safePrefix(_.get(post, 'frontmatter.thumb_img_path'))} alt={_.get(post, 'frontmatter.title')} />
                        </div>
                        }
                        <span className="view-all">{_.get(this.props, 'section.view_all_text') || 'View All'}</span>
                      </Link>
                       : 
                      <Link to={safePrefix(_.get(post, 'url'))} className="post-link">
                        {_.get(post, 'frontmatter.thumb_img_path') && 
                        <div className="post-thumbnail">
                          <img className="thumbnail" src={safePrefix(_.get(post, 'frontmatter.thumb_img_path'))} alt={_.get(post, 'frontmatter.title')} />
                        </div>
                        }
                        <header className="post-header">
                          <h3 className="post-title">{_.get(post, 'frontmatter.title')}</h3>
                        </header>
                      </Link>
                      }
                    </article>
                    ))}
                  </div>
                </div>
              </div>
            </section>
        );
    }
}
