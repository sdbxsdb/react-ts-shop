import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";

export const Wrapper = styled.div`
  margin: 40px;

  h1 { 
    display: flex;
    justify-content: center;
    padding: 20px 0;
    font-family: Arial, Helvetica, sans-serif;
  }
`;

export const StyledButton = styled(IconButton)`
  position: fixed !important;
  z-index: 100;
  right: 20px;
  top: 20px;
  background: rgba(225, 255, 255, 0.6);

  .MuiBadge-badge {
    background-color: #FFA01F;
    color: #fff;
  }
`;

export const CartHeader = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;

  .closeBtn {
    cursor: pointer;
    margin: 15px 15px 0 0;
  }
`;
