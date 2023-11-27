// import React from "react";
// // import { makeStyles } from "@mui/styles";
// import styled from "@emotion/styled";


// const useStyles = styled((theme) => ({
//   messageContainer: {
//     display: "flex",
//     flexDirection: "row",
//     alignItems: "flex-start",
//     marginBottom: theme.spacing(1),
//     "&.fromMe": {
//       justifyContent: "flex-end",
//     },
//   },
//   messageBubble: {
//     backgroundColor: "#DCF8C6",
//     borderRadius: "20px",
//     padding: theme.spacing(1),
//     position: "relative",
//     "&:after": {
//       content: '""',
//       position: "absolute",
//       width: "0",
//       height: "0",
//       borderTop: "10px solid transparent",
//       borderBottom: "10px solid transparent",
//     },
//     "&.fromMe": {
//       backgroundColor: "#ECE5DD",
//       "&:after": {
//         borderLeft: "10px solid #ECE5DD",
//         right: "-8px",
//       },
//     },
//   },
//   messageText: {
//     fontSize: "16px",
//     lineHeight: "1.4",
//     wordWrap: "break-word",
//     color: "#000000",
//   },
// }));

// const MessageBubble = ({ message, fromMe }) => {
//   const classes = useStyles();

//   return (
//     <div className={`${classes.messageContainer} ${fromMe ? "fromMe" : ""}`}>
//       <div className={`${classes.messageBubble} ${fromMe ? "fromMe" : ""}`}>
//         <div className={classes.messageText}>{message}</div>
//       </div>
//     </div>
//   );
// };

// export default MessageBubble;


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
  background-color: #DCF8C6;
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
    ${({ fromMe }) => fromMe && 'border-left: 10px solid #ECE5DD'};
    right: ${({ fromMe }) => fromMe && '-8px'};
  }
`;

const MessageText = styled.div`
  font-size: 16px;
  line-height: 1.4;
  word-wrap: break-word;
  color: #000000;
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