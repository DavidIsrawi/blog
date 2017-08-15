import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import './style.css';

class SiteNav extends React.Component {
    render() {
        return (
            <nav className="blog-nav">
                <ul>
                    <li>
                        <Link to={prefixLink('/')} activeClassName="current" onlyActiveOnIndex>
                            Articles
                        </Link>
                    </li>
                    <li>
                        <Link to={prefixLink('/work/')} activeClassName="current">
                            Work
                        </Link>
                    </li>
                    <li>
                        <Link to={prefixLink('/projects/')} activeClassName="current">
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link to={prefixLink('/about/')} activeClassName="current">
                            About Me
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default SiteNav;
