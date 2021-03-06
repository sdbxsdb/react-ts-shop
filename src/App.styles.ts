import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";


export const LoadingWrapper = styled.div`
  width: 97vw;
  height: 97vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  font-family: Arial, Helvetica, sans-serif;

`

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
    position: absolute;
    top: 15px;
    right: 15px;
  }
`;
