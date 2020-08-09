import React from 'react';
import logos from '../../images/cardlogos.png'
interface CreditCardFormProps {}

export const CreditCardForm: React.FC<CreditCardFormProps> = ({ }) => {
  
  const handleSubmit = () => {
    
  };

  return (
    <form className="CreditCardForm" onSubmit={handleSubmit}>

      <p>Please enter your card information</p>

      <input type="text" name="name" id="name" />

      <input type="number" name="card-number" id="card-number" />
      <input type="number" name="cvv2" id="cvv2" />

      <input type="number" name="exp-month" id="exp-month" />
      <input type="number" name="exp-year" id="exp-year" />

      <div className="image-wrapper">
        <img src={logos} alt=""/>
      </div>
      
      <input type="submit" value="SUBMIT"/>
    </form>
  );
};
