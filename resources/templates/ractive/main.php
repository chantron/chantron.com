<script id="chantron-template" type="text/html">
    <nav id="main" class="{{responsiveMenu ? 'highlighted' : ''}}">
        <ul class="navigation">
            <li class="navigation-list-controls">
                <a
                    class="navigation-list-item-controls"
                    on-click="@this.toggle('responsiveMenu')"
                    href="#"
                >
                    <i class="fa {{ responsiveMenu ? 'fa-times' : 'fa-bars'}} fa-fw" aria-hidden="true"></i>
                </a>
            </li>
            <li class="navigation-list-item-title-wrapper float-left">
                <h1 class="navigation-list-item-title">Chantron</h1>
            </li>
            {{ #navigation.links }}
            <li class="navigation-list-item" as-isVisible>
                <a class="navigation-list-item-link {{ isActive(href) ? 'active' : '' }}" href="{{href}}">{{text}}</a>
            </li>
            {{ /navigation }}
            <!-- <li class="navigation-list-item float-right"><a class="navigation-list-item-link" href="/contact">contact</a></li>
            <li class="navigation-list-item float-right"><a class="navigation-list-item-link" href="/blog">blog</a></li>
            <li class="navigation-list-item float-right"><a class="navigation-list-item-link" href="/about">about</a></li> -->
        </ul>
    </nav>
    <div id="content-container">
        <div id="content" style="background-image: url({{ backgroundImage }});" as-highlighted as-responsiveMenu fade-in>
            {{ >content }}
        </div>
    </div>
    <footer id="footer">
        <div class="footer-content">
            <p>
                <a href="#chantron" class="" as-scrollTo>Back to top</a><br>
                credits: <a href="https://www.backbonejs.org" target="_blank">backbone.js</a>, <a href="https://www.ractivejs.org" target="_blank">ractive.js</a>.
                background images: <a href="https://www.flickr.com/photos/geckzilla/" target="_blank">judy schmidt</a> used under <a href="https://creativecommons.org/licenses/by/3.0/" target="_blank">cc 3.0</a>
            </p>
        </div>
    </footer>
</script>
