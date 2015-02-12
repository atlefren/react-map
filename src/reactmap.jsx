var Map = React.createClass({

    setupMap: function () {
        this.map.setView([this.props.lat, this.props.lon], this.props.zoom);
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map);
    },

    componentDidMount: function () {
        console.log(this);
        this.map = L.map(this.getDOMNode());
        this.setupMap();
    },

    render: function () {
        return (<div className="map"></div>);
    }
});