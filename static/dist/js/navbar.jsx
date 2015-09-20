var NavBar = React.createClass({
    leftPages: {
        'Home': 'index.html',
        'About': 'about/about.html',
        'Portfolio': 'portfolio/portfolio.html',
        'Members': 'members/members.html',
        'Resources': 'resources/resources.html'
    },

    rightPages: {
        'Contact Us': 'contact/contact.html'
    },

    propTypes: {
        active: React.PropTypes.string,
        nested: React.PropTypes.number
    },

    getLinks: function(pages, pathPrefix) {
        var links = [];
        for (var page in pages) {
            if (!pages.hasOwnProperty(page)) {
                continue;
            }

            if (this.props.active === page) {
                links.push((
                    <li className="active">
                        <a href="#">
                            {page}
                            <span className="sr-only">(current)</span>
                        </a>
                    </li>
                ));
                continue;
            }

            links.push((
                <li>
                    <a href={pathPrefix + pages[page]}>{page}</a>
                </li>
            ));
        }

        return links;
    },

    getDefaultProps: function() {
        return {
            active: '',
            nested: 0
        };
    },

    render: function() {
        var pathPrefix = '';
        for (var i = 0; i < this.props.nested; i++) {
            pathPrefix += '../';
        }

        var leftLinks = this.getLinks(this.leftPages, pathPrefix);
        var rightLinks = this.getLinks(this.rightPages, pathPrefix);

        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#header-navbar-collapse" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                        </button>
                        <a id="corner-logo-shadow" className="navbar-brand" href="#">
                            <img id="corner-logo" src={pathPrefix + '_images/WDC-logo.png'} alt="Web Development Club Logo" />
                        </a>
                    </div>
                    <div className="collapse navbar-collapse" id="header-navbar-collapse" style={{marginLeft: 120}}>
                        <ul className="nav navbar-nav">
                            {leftLinks}
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            {rightLinks}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
});
