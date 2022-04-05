import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: Arial, Helvetica, sans-serif;
  border-bottom: 1px solid lightblue;
  padding-bottom: 20px;
  max-width: 300px;





  .buttons {
    display: flex;
    justify-content: space-between;
  }

  .pricing {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    p {
      margin: 0;
    }
  }

  img {
    max-width: 100px;
    object-fit: cover;
  }

  .buttonsWrapper {
    display: flex;
    gap: 0.5rem;    
  }

  button { 
    max-width: 40px;
    min-width: 40px;
    height: 40px
  }

  .qty {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 20px;
  }

  .imgAndQty {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }

  .imgWrapper {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .qtyWrapper {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p { 
      font-size: 40px;
      margin: 10px 0;
    }
  }

  .itemPriceWrapper {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  .subTotalWrapper {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  
`;
