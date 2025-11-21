import { useState } from 'react';
import './PaymentPage.css';

function PaymentPage() {
  const [selectedPayment, setSelectedPayment] = useState('mpesa');
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneError, setPhoneError] = useState(false);

  const isValidPhone = (number) => /^07\d{8}$/.test(number);

  const handleCardSelect = (card, amount) => {
    setSelectedCard(card);
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e) => {
    const value = e.target.value;
    setCustomAmount(value);
    setSelectedAmount(value);
    
    if (value === '150') {
      setSelectedCard('bronze');
    } else if (value === '500') {
      setSelectedCard('silver');
    } else if (value === '1000') {
      setSelectedCard('gold');
    } else {
      setSelectedCard(null);
    }
  };

  const handlePhoneChange = (e) => {
    setPhoneNumber(e.target.value);
    if (e.target.value && !isValidPhone(e.target.value)) {
      setPhoneError(true);
    } else {
      setPhoneError(false);
    }
  };

  const handleSubmit = () => {
    if (!selectedAmount || !phoneNumber || !isValidPhone(phoneNumber)) return;
    
    const paymentMethod = selectedPayment === 'mpesa' ? 'M-Pesa' : 'Airtel Money';
    alert(`You will receive a prompt on your phone to enter your ${paymentMethod} PIN to complete the payment.`);
  };

  const isSubmitEnabled = selectedAmount && phoneNumber && isValidPhone(phoneNumber);

  return (
    <div className="payment-body">
      <div className="payment-card">
        <div className="header">
          <h1>Books and Beyond</h1>
          <p className="subtitle">Monthly Membership Contribution</p>
        </div>

        <h2>Payment Method</h2>
        <div className="payment-types">
          <button
            className={`payment-btn ${selectedPayment === 'mpesa' ? 'active' : ''}`}
            onClick={() => setSelectedPayment('mpesa')}
            data-type="mpesa"
          >
            Lipa na<br />Mpesa
          </button>
          <button
            className={`payment-btn ${selectedPayment === 'airtel' ? 'active' : ''}`}
            onClick={() => setSelectedPayment('airtel')}
            data-type="airtel"
          >
            Airtel<br />Money
          </button>
        </div>

        <h3>Membership Support Card</h3>
        <div className="membership-cards">
          <div
            className={`card-option ${selectedCard === 'bronze' ? 'selected' : ''}`}
            onClick={() => handleCardSelect('bronze', '150')}
          >
            <div className="card-type">Bronze</div>
            <div className="card-amount">Sh. 150</div>
          </div>
          <div
            className={`card-option ${selectedCard === 'silver' ? 'selected' : ''}`}
            onClick={() => handleCardSelect('silver', '500')}
          >
            <div className="card-type">Silver</div>
            <div className="card-amount">Sh. 500</div>
          </div>
          <div
            className={`card-option ${selectedCard === 'gold' ? 'selected' : ''}`}
            onClick={() => handleCardSelect('gold', '1000')}
          >
            <div className="card-type">Gold</div>
            <div className="card-amount">Sh. 1000</div>
          </div>
        </div>

        <div className={`custom-amount ${customAmount && !selectedCard ? 'selected' : ''}`}>
          <label htmlFor="customAmount">Any Other Amount</label>
          <input
            type="number"
            id="customAmount"
            placeholder="Enter amount (Sh.)"
            min="1"
            value={customAmount}
            onChange={handleCustomAmountChange}
          />
        </div>

        {selectedAmount && (
          <div className="phone-input-section">
            <label htmlFor="phoneNumber">
              Enter your {selectedPayment === 'mpesa' ? 'M-Pesa' : 'Airtel Money'} number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              placeholder="e.g., 0712345678"
              maxLength="10"
              value={phoneNumber}
              onChange={handlePhoneChange}
            />
            {phoneError && (
              <p className="phone-error">
                Please enter a valid 10-digit phone number starting with 07.
              </p>
            )}
          </div>
        )}

        {selectedAmount && (
          <div className="selected-info">
            <h4>Contribution Summary</h4>
            <p>
              <strong>Payment Method:</strong> {selectedPayment === 'mpesa' ? 'Lipa na Mpesa' : 'Airtel Money'}
              <br />
              {selectedCard && <><strong>Card:</strong> {selectedCard.charAt(0).toUpperCase() + selectedCard.slice(1)}<br /></>}
              <strong>Amount:</strong> Sh. {selectedAmount}
            </p>
          </div>
        )}

        <button
          id="submitBtn"
          className={isSubmitEnabled ? 'active' : ''}
          onClick={handleSubmit}
          disabled={!isSubmitEnabled}
        >
          Submit Payment
        </button>
      </div>
    </div>
  );
}

export default PaymentPage;