import React, { useRef, useEffect } from 'react';
import logos from '../../images/cardlogos.png';
import { useForm } from 'react-hook-form';

type Inputs = {
  name: string;
  cardNumber: number;
  cvv2: number;
  expMonth: number;
  expYear: number;
};

export const CreditCardForm: React.FC = () => {
  let inputRef = useRef<HTMLInputElement | null>(null);

  const { register, handleSubmit, errors } = useForm<Inputs>();
  const onSubmit = (data: Inputs) => console.log(data);

  useEffect(() => {
    if (inputRef?.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <form className="CreditCardForm" onSubmit={handleSubmit(onSubmit)}>
      <p>Please enter your card information</p>

      {/* NAME */}
      <input
        placeholder="Name"
        type="text"
        name="name"
        id="name"
        ref={(e) => {
          register(e, { required: true });
          inputRef.current = e;
        }}
        aria-label="name"
        // required
      />
      {errors.name?.type === 'required' ? <p className="error-msg">This field is required</p> : null}


      {/* CARD NUMBER */}
      <input
        placeholder="Card number"
        type="number"
        name="cardNumber"
        id="cardNumber"
        ref={register({ required: true, minLength: 15, maxLength: 16 })}
        aria-label="card number"
        // required
      />
      {errors.cardNumber?.type === 'required' ? (
        <p className="error-msg">Field is required</p>
      ) : null}
      {errors.cardNumber?.type === 'minLength' ? (
        <p className="error-msg">Field requires at least 15 characters</p>
      ) : null}
      {errors.cardNumber?.type === 'maxLength' ? (
        <p className="error-msg">You may not enter more than 16 characters</p>
      ) : null}

      {/* CVV2 */}
      <input
        placeholder="CVV2"
        type="number"
        name="cvv2"
        id="cvv2"
        ref={register({ required: true, minLength: 3, maxLength: 4 })}
        aria-label="cvv2 number"
        // required
      />
      {errors.cvv2?.type === 'required' ? <p className="error-msg">Field is required</p> : null}
      {errors.cvv2?.type === 'minLength' ? <p className="error-msg">Field requires at least 3 digits</p> : null}
      {errors.cvv2?.type === 'maxLength' ? (
        <p className="error-msg">Field accepts up to 4 digits</p>
      ) : null}


      <div className="date-wrapper">
        <div className="date-wrapper__inner">
          <input
            placeholder="MM"
            type="number"
            name="expMonth"
            id="expMonth"
            ref={register({ required: true, minLength: 2, maxLength: 2 })}
            aria-label="month of expiration"
            // required
          />
          {errors.expMonth?.type === 'required' ? (
            <p className="error-msg">Field is required</p>
          ) : null}
          {errors.expMonth?.type === 'minLength' ? (
            <p className="error-msg">2 digits required</p>
          ) : null}
          {errors.expMonth?.type === 'maxLength' ? (
            <p className="error-msg">2 digit maximum</p>
          ) : null}
        </div>

        <div className="date-wrapper__inner">
          <input
            placeholder="YYYY"
            type="number"
            name="expYear"
            id="expYear"
            ref={register({ required: true, minLength: 4, maxLength: 4 })}
            aria-label="year of expiration"
            // required 
          />

          {errors.expYear?.type === 'required' ? (
            <p className="error-msg">Field is required</p>
          ) : null}
          {errors.expYear?.type === 'minLength' ? (
            <p className="error-msg">4 digits required</p>
          ) : null}
          {errors.expYear?.type === 'maxLength' ? (
            <p className="error-msg">4 digits maximum</p>
          ) : null}
        </div>
      </div>

      <div className="image-wrapper">
        <img src={logos} alt="credit card logos" />
      </div>

      <input type="submit" value="SUBMIT" aria-label="submit" />
    </form>
  );
};
