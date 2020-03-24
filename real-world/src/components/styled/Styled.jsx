import React from 'react';
import styled from 'styled-components';

const Header = styled.h2`
  color: turquoise;
`;

const Paragraph = styled.p`
  font-size: 24px;
  color: rebeccapurple;
`;

const Custom = styled.h2`
  background: ${props => props.electric ? 'black' : 'white'};
  color: ${props => props.electric ? 'yellow' : 'darkgrey'};
  text-decoration: underline;
`;

const Styled = () => {
  return (
    <div>
      <h1>Styled</h1>
      <Header>I am a header</Header>
      <Paragraph>
        <p>Here be purple</p>
      </Paragraph>

      <Custom>I'm just basic</Custom>
      <Custom electric>I am customized!!</Custom>
      <Custom electric>
        <h1>Does this work?</h1>
        <Header>Even this?</Header>
      </Custom>
    </div>
  );
};

export default Styled;
