import autotrack from 'autotrack';

export default class analytics {
    constructor(trackingId) {
        ga('create', trackingId, 'auto');
        ga('require', 'cleanUrlTracker');
        ga('require', 'outboundLinkTracker');
        ga('require', 'urlChangeTracker');
        ga('send', 'pageview');
    }
}
