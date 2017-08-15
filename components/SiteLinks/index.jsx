import React from 'react';
import { config } from 'config';
import './style.css';
import '../../static/fonts/fontawesome/style.css';

class SiteLinks extends React.Component {
  render() {
    return (
      <div className="blog-links">
        <ul>
          {config.siteGithubUrl && (
            <li>
              <a href={config.siteGithubUrl}>
                <i className="fa fa-github-alt" />
              </a>
            </li>
          )}
          {config.siteLinkedInUrl && (
            <li>
              <a href={config.siteLinkedInUrl}><i className="fa fa-linkedin" /></a>
            </li>
          )}
          {config.siteEmailUrl && (
            <li>
              <a href={`mailto:${config.siteEmailUrl}`}>
                <i className="fa fa-envelope-o" />
              </a>
            </li>
          )}
          {config.siteInstagramUrl && (
            <li>
              <a href={config.siteInstagramUrl}><i className="fa fa-instagram" /></a>
            </li>
          )}
          {config.siteResumeUrl && (
            <li>
              <a href={config.siteResumeUrl}><i className="fa fa-file-text-o" /></a>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default SiteLinks;
