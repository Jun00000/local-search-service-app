import React from 'react';
import { BrowserRouter, Redirect, Route, Link, Switch } from 'react-router-dom';
import Home from './Home'
import City from './City'
import User from './User'
import Search from './Search'
import Detail from './Detail'

class AppRouter extends React.Component {
    constructor() {
        super();
        this.state = {
            initDone: false,
        }
    }
    componentDidMount() {
        setTimeout(() =>
            this.setState({
                initDone: true,
            }), 1000)
    }
    render() {
        const route = (
            <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route path='/city' component={City}/>
                    <Route path='/User' component={User}/>
                    <Route path='/search/:type(/:keyword)' component={Search}/>
                    <Route path='/detail/:id' component={Detail}/>
                {/* 这里有一个问题：怎么完全跳转到404页面 */}
                {/* <Route >
                        <Redirect to='./404.html'></Redirect>
                    </Route> */}
                <Route render={() =>
                    <div>404 : page not found</div>
                }></Route>
            </Switch>
        )

        return (
            <div>
                {
                    this.state.initDone
                        ? route
                        : <div>正在加载...</div>
                }

            </div>
        )
    }
}

// Router下面只能有一个子元素
const App = () => (
    <BrowserRouter>
        <AppRouter></AppRouter>
    </BrowserRouter>
)
export default App;