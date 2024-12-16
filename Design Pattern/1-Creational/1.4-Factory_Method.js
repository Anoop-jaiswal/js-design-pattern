// The Factory Method Pattern is a design pattern that provides an
// interface for creating objects in a superclass, but allows subclasses
//  to decide which specific class to instantiate. It helps achieve
// flexibility and reusability by delegating the object creation to subclasses.

// Abstract Product
class PaymentMethod {
  procceedToPay(amount) {
    throw "This method must be overridden by a concrete class";
  }
}

// Concrete Products
class CreditCard extends PaymentMethod {
  procceedToPay(amount) {
    console.log(amount + " paid by credit card");
  }
}

class Paypay extends PaymentMethod {
  procceedToPay(amount) {
    console.log(amount + " paid by Paypay");
  }
}

class Cash extends PaymentMethod {
  procceedToPay(amount) {
    console.log(amount + " paid by cash");
  }
}

// Abstract Factory
class PaymentFactory {
  createPayment() {
    throw "This method must be overridden by a concrete factory";
  }
}

// Concrete Factories
class CreditCardFactory extends PaymentFactory {
  createPayment() {
    return new CreditCard();
  }
}

class PaypayFactory extends PaymentFactory {
  createPayment() {
    return new Paypay();
  }
}

class CashFactory extends PaymentFactory {
  createPayment() {
    return new Cash();
  }
}

// Client Code
const factory = new CreditCardFactory(); // You could use a different factory
const payment = factory.createPayment();
payment.procceedToPay(1000);
