
var Counter = React.createClass({

    getDefaultProps: function() {
        console.log('Ustawienie domyślnych wartości propsów');
    },

    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    componentWillMount: function () {
        console.log('Inicjalizacja komponentu');
    },

    render: function() {
        return React.createElement('div', {},
            React.createElement('span', {className: 'counter'}, 'Licznik ' + this.state.counter),
            React.createElement('button', {className: 'btn', onClick: this.increment}, '+ 1'),
            React.createElement('button', {className: 'btn', onClick: this.decrement}, '- 1')
        );
    },

    componentDidMount: function () {
        console.log('Zamontowanie komponentu w drzewie DOM');
    },
    componentWillReceiveProps: function (nextProps) {
        console.log('Komponent otrzymanuje nową właściwość');
    },
    shouldComponentUpdate: function (nextProps, nextState) {
        return true;
    },
    componentWillUpdate: function (nextProps, nextState) {
        console.log('Załadowanie zmian');
    },
    Render() {
        console.log('Wyrenderowanie aktualizacji');
    },
    componentDidUppdate: function (prevProps, prevState) {
        console.log('Zamontowanie komponentu ze zmiananami w drzewie DOM');
    },
    componentWillUnmount: function () {
        console.log('Odmontowanie komponentu');
    }


});

var Counters = React.createClass({

    render: function () {
        return React.createElement('div', {},
            React.createElement(Counter, {}),
            React.createElement(Counter, {}),
            React.createElement(Counter, {}),
        );
    },
});



var element = React.createElement(Counters);

ReactDOM.render(element, document.getElementById('app'));
