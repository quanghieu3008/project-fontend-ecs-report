import React from 'react';
import {
BrowserRouter, Route, Switch
} from 'react-router-dom';
import * as page from './pages';
class Routes extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={page.Home} />
                  <Route path='/human_resource' component={page.HumanResource} />
                  <Route path='/project_situation' component={page.ProjectSituation} />
                </Switch>
            </BrowserRouter>
        )
    }
}
export default Routes;
