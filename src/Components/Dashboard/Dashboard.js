import React from 'react';

class Dashboard extends React.Component{
    componentDidMount() {
        // To Redirect to particular path defined in routes
        this.props.history.push('/dashboard/heading');
    }

    render() {

        // If you passing arguments like /dashboard?id=123&name=Usman , in this case, path will be : /dashboard
        // in this way, you have to get params by the following way
        const url = new URL(window.location);
        console.log(url.searchParams.get('name'));



        // If you passing arguments like /dashboard/123/usman so make your path will be: /dashboard/:id/:name
        // it will save 123 inside id and usman in name and make your params as {id:123, name: usman }
        const { match } = this.props;
        console.log("Params", match.params);


        return (
            <h1>
                Dashboard Params  ( {match.params.uuid}, {match.params.name} )
            </h1>
        );
    }
}

export default Dashboard