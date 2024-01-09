
import React from 'react';
import styled from '@emotion/styled';

const MessageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 1rem;
  justify-content: ${({ fromMe }) => (fromMe ? 'flex-end' : 'flex-start')};
`;

const MessageBubble = styled.div`
  background-color: #ffff;
  border-radius: 12px;
  padding: 10px 30px 10px 10px ;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    ${({ fromMe }) => fromMe && 'border-left: 10px solid transparent'};
    right: ${({ fromMe }) => fromMe && '-8px'};
  }
`;

const MessageText = styled.div`
  font-size: 16px;
  line-height: 1.4;
  word-wrap: break-word;
  color: #111b21;
`;

const StyledMessageBubble = ({ message, fromMe }) => {
  return (
    <MessageContainer fromMe={fromMe}>
      <MessageBubble fromMe={fromMe}>
        <MessageText>{message}</MessageText>
      </MessageBubble>
    </MessageContainer>
  );
};

export default StyledMessageBubble;