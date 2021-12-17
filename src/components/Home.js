import React from 'react';
import styled from 'styled-components';
import { client } from '../client';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Title = styled.h1`
  color: white;
  font-size: 4rem;
  z-index: 10;
`;
const Section = styled.section`
  color: white;
`;
const HomeContainer = styled.div`
  width: 70%;
  animation: slideInFromBottom 2s ease-out 1s;
`;
const ImageContainer = styled.div`
  width: 100%;
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
          <HomeContainer className="home">
            {/* Title showing the name */}
            <Title>{this.state.name && this.state.name}</Title>
            {/* Image */}
            <ImageContainer className="headshot">
                {this.state.headshot && <img src={this.state.headshot.fields.file.url} alt={this.state.headshot.title} style={{width: "100%"}}/>}
            </ImageContainer>
            {/* Short description */}
            <article>
                <Section>
                    {this.state.abstract && documentToReactComponents(this.state.abstract)}
                </Section>
            </article>
          </HomeContainer>
        );
      }
}