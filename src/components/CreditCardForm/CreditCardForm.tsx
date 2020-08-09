import React from 'react';
import logos from '../../images/cardlogos.png';
import { useForm } from "react-hook-form";

type Inputs = {
  name: string,
  cardNumber: number,
  cvv2: number,
  expMonth: number,
  expYear: number,
};

const errorMsg = <span className='error-msg--required'>This field is required</span>;

export const CreditCardForm: React.FC = () => {
  
  const { register, handleSubmit, errors } = useForm<Inputs>();
  const onSubmit = (data:Inputs) => console.log(data);

  return (
    <form className="CreditCardForm" onSubmit={handleSubmit(onSubmit)}>

      <p>Please enter your card information</p>

      <input ref={register({ required: true })} placeholder="Name" type="text" name="name" id="name" />
      {errors.name && errorMsg}

      <input ref={register({ required: true })} placeholder="Card number" type="text" name="cardNumber" id="cardNumber" />
      {errors.cardNumber && errorMsg}

      <input ref={register({ required: true })} placeholder="CVV2" type="number" name="cvv2" id="cvv2" />
      {errors.cvv2 && errorMsg}

      <input ref={register({ required: true })} placeholder="Exp Month" type="number" name="expMonth" id="expMonth" />
      {errors.expMonth && errorMsg}
      
      <input ref={register({ required: true })} placeholder="Exp Year" type="number" name="expYear" id="expYear" />
      {errors.expYear && errorMsg}

      <div className="image-wrapper">
        <img src={logos} alt=""/>
      </div>
      
      <input type="submit" value="SUBMIT"/>
    </form>
  );
};
