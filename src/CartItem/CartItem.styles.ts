import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Arial, Helvetica, sans-serif;
  border-bottom: 1px solid lightblue;
  padding-bottom: 20px;

  div {
    flex: 1;
  }

  .buttons {
    display: flex;
    justify-content: space-between;
  }

  .pricing {
    display: flex;
    flex-direction: column;
   align-items: flex-end;
   margin-bottom: 20px;

   p { 
     margin: 0;
   }
  }

  img {
    max-width: 80px;
    object-fit: cover;
    margin-left: 40px;
  }
`;
