const passwordValidator = (password) => {
  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,8}$/gm;
  return regex.test(password);
};

const emailValidator = (email) => {
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  return regex.test(email);
};

class CPFValidator {
  constructor(cpf) {
    if (typeof cpf === "number") return false;
    Object.defineProperty(this, "cleanCPF", {
      writable: false,
      enumerable: true,
      configurable: false,
      value: cpf.replace(/\D+/g, ""),
    });
  }

  sequency() {
    return this.cleanCPF.charAt(0).repeat(11) === this.cleanCPF;
  }

<<<<<<< HEAD
  class CPFValidator {
    constructor(cpf) {
        if(typeof cpf === 'number') return false
      Object.defineProperty(this, 'cleanCPF', {
        writable: false,
        enumerable: true,
        configurable: false,
        value: cpf.replace(/\D+/g, '')
      });
    }
  
    sequency() {
      return this.cleanCPF.charAt(0).repeat(11) === this.cleanCPF;
    }

    genereteNewCPF() {
      const withoutDigits = this.cleanCPF.slice(0, -2);
      const digit1 = ValidaCPF.generateDigit(withoutDigits);
      const digit2 = ValidaCPF.generateDigit(withoutDigits + digit1);
      this.newCPF = withoutDigits + digit1 + digit2;
    }
  
    static generateDigit(withoutDigits) {
      let total = 0;
      let reverse = withoutDigits.length + 1;
  
      for(let myString of withoutDigits) {
        total += reverse * Number(myString);
        reverse--;
      }
  
      const digit = 11 - (total % 11);
      return digit <= 9 ? String(digit) : '0';
    }
  
    validate() {
      if(!this.cleanCPF) return false;
      if(typeof this.cleanCPF !== 'string') return false;
      if(this.cleanCPF.length !== 11) return false;
      if(this.sequency()) return false;
      this.genereteNewCPF();
  
      return this.newCPF === this.cleanCPF;
=======
  genereteNewCPF() {
    const withoutDigits = this.cleanCPF.slice(0, -2);
    const digit1 = CPFValidator.generateDigit(withoutDigits);
    const digit2 = CPFValidator.generateDigit(withoutDigits + digit1);
    this.newCPF = withoutDigits + digit1 + digit2;
  }

  static generateDigit(withoutDigits) {
    let total = 0;
    let reverse = withoutDigits.length + 1;

    for (let myString of withoutDigits) {
      total += reverse * Number(myString);
      reverse--;
>>>>>>> 50439a60d3842037ff027dbacae6dd1731dd6464
    }

    const digit = 11 - (total % 11);
    return digit <= 9 ? String(digit) : "0";
  }

  validate() {
    if (!this.cleanCPF) return false;
    if (typeof this.cleanCPF !== "string") return false;
    if (this.cleanCPF.length !== 11) return false;
    if (this.sequency()) return false;
    this.genereteNewCPF();

    return this.newCPF === this.cleanCPF;
  }
}

const isAPositiveNumber = (value) => {
  if (value <= 0 || typeof value !== "number") return false;
  return true;
};

module.exports = {
  CPFValidator,
  passwordValidator,
  emailValidator,
  isAPositiveNumber,
};
