import React from 'react';
import image from '../images/expand-vertical-4.svg';
import Collapsible from './Collapsible';

class App extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <img src={image} />
                    <h1>Collapsible Content</h1>
                </header>
                <div className="content">
                    <div className="panel-group">
                        <Collapsible title="Overview">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non elit egestas, condimentum est a, vehicula metus. Phasellus eros dui, porttitor in tempus sit amet, condimentum sed nibh. Sed feugiat massa at nulla maximus rhoncus. Mauris at scelerisque nulla. Praesent enim justo, vehicula vitae varius vitae, fringilla sit amet arcu. Aliquam id ligula ut augue vestibulum facilisis. Proin interdum sagittis pellentesque. Pellentesque rutrum eget sem vitae molestie. Maecenas imperdiet nulla in metus varius, pretium efficitur nisi consequat. Nunc in volutpat urna, ac tempus leo. Praesent nec dui tristique, varius mauris ut, luctus quam. Sed tincidunt ante ac tellus porta, sit.

</p>
                        </Collapsible>
                        <Collapsible title="Features">
                            <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute.</p>
                        </Collapsible>
                        <Collapsible title="Software">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis.</p>
                        </Collapsible>
                    </div>
                </div>
            </div>
        );
    }
}


export default App;
