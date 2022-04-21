import React from 'react';
import axios from 'axios';


class TestComponent extends React.Component{
    state = {
        links: [],
        error: null,
      };
      
      // Fetch your restaurants immediately after the component is mounted
      componentDidMount = async () => {
        try {
          const response = await axios.get('http://localhost:1337/api/links');
          console.log(response.data.data);
          this.setState({ links: response.data.data });
          console.log(this.state);
        } catch (error) {
          this.setState({ error });
        }
      };
    
      render() {
        const { error, links } = this.state;
    
        // Print errors if any
        if (error) {
          return <div>An error occured: {error.message}</div>;
        }
    
        return (
          <div className="App">
              {console.log(this.state.links)}
            <ul>
              {this.state.links.map(links => (
                <li key={links.id}><a href={links.attributes.linkURL}>{links.attributes.linkText}</a></li>
              ))}
            </ul>
          </div>
        );
      }
    }
    



export default TestComponent;