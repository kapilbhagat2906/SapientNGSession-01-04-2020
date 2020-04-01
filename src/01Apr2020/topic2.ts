console.log('\n***************************************TOPIC-2***************************************');

enum TransactionType {
    WITHDRAW,
    DEPOSIT
}
/**
 * Method Level Decorator
 */
function Logger () {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log(`${propertyKey} method called.`);
    }
}

interface CustomerInfoModel {
    id: string;
    name: string;
}

/**
 * Class Level Logger
 */
function Entity (customerInfo: CustomerInfoModel) {
    return function (_constructor: Function) {
        Object.defineProperty(_constructor.prototype, 'name', {
            value: customerInfo.name
        });
        Object.defineProperty(_constructor.prototype, 'id', {
            value: customerInfo.id
        });
        console.log('Entity decorator called');
    }
}

@Entity({id: 'CUST01', name: 'Kapil Bhagat'})
class Customer {
    balance: number = 0;

    constructor (private initialBalance: number) {
        this.balance = initialBalance;
    }

    @Logger()
    deposit(amount: number): void {
        this.balance += amount;
    }

    @Logger()
    withDraw(amount: number): void {
        this.balance -= amount;
    }

    @Logger()
    transaction (type: TransactionType, amount: number): void {
        switch (type) {
            case TransactionType.DEPOSIT:
                this.deposit(amount);
                break;
            case TransactionType.WITHDRAW:
            default: this.withDraw(amount);
        }
    }

    @Logger()
    getBalance(): string {
        return `Remaining Balance for ${(this as any).name} (${(this as any).id}) is ${this.balance}`;
    }
}

let customer = new Customer(8000);
customer.transaction(TransactionType.DEPOSIT, 2000);
customer.transaction(TransactionType.WITHDRAW, 3000);
console.log(customer.getBalance());
