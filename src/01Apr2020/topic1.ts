console.log('***************************************TOPIC-1***************************************');
interface Calculator {
    calculate: Function;
}

enum InterestType {
    SI,
    CI
}

class InterestCalculator implements Calculator{
    calculate (): number {
        let interest:number = 0;
        switch (this.type) {
            case InterestType.CI:
                interest = this.principal * (Math.pow(( 1 + (this.ROI/100)), this.years) - 1);
                interest = Number(interest.toFixed(2));
                break;
            case InterestType.SI:
            default: interest = (this.principal * this.ROI * this.years)/100;
        }

        return interest;
    }

    constructor(private type: InterestType = InterestType.SI, private principal: number = 1000, private ROI: number = 8.6, private years: number = 12) {}
}

class ShapeCalculator implements Calculator{
    calculate (): number {
        return this.length * this.breadth * this.height;
    }

    constructor(private length: number = 2, private breadth: number = 4, private height: number = 6) {}
}

let SICalculator = new InterestCalculator();
console.log(`Simple Interest: ${SICalculator.calculate()}`);

let CICalculator = new InterestCalculator(InterestType.CI);
console.log(`Compound Interest: ${CICalculator.calculate()}`);

let areaCalculator = new ShapeCalculator();
console.log(`Area: ${areaCalculator.calculate()}`);
