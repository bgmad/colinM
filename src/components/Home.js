import React from 'react';
import styled from 'styled-components';
import { client } from '../client';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Title = styled.h1`
  color: white;
  font-size: 4rem;
  z-index: 10;
`;

export default class Home extends React.Component {
    constructor({ abstract, name, headshot }) {
        super();
        this.state = {
            name: name,
            abstract: abstract,
            headshot: headshot
          };
    }
    
    componentDidMount() {
        client.getEntries({
          content_type: 'home'
        })
          .then((res) => {
            this.setState(res.items[0].fields);
          })
          .catch((err) => {
            console.log(err);
          })
      }

    render() {
        return (
          <div className="home">
            <Title>{this.state.name && this.state.name}</Title>
            <div className="headshot">
                {this.state.headshot && <img src={this.state.headshot.fields.file.url} alt={this.state.headshot.title}/>}
            </div>
            <article>
                <section>
                    {this.state.abstract && documentToReactComponents(this.state.abstract)}
                </section>
            </article>
          </div>
        );
      }
}