console.log('***************************************TOPIC-1***************************************');
interface Calculator {
    calculate: Function;
}

enum InterestType {
    SI,
    CI
}

class InterestCalculator implements Calculator{
    calculate (type: InterestType = InterestType.SI, principal: number = 1000, ROI: number = 8.6, years: number = 12): number {
        let interest:number = 0;
        switch (type) {
            case InterestType.CI:
                interest = principal * (Math.pow(( 1 + (ROI/100)), years) - 1);
                interest = Number(interest.toFixed(2));
                break;
            case InterestType.SI:
            default: interest = (principal * ROI * years)/100;
        }

        return interest;
    }
}

enum Shapes {
    CIRCLE,
    SQUARE,
    RECTANGLE,
    TRIANGLE
}
class ShapeCalculator implements Calculator{
    calculate (type: Shapes = Shapes.SQUARE, length: number = 2, breadth?): number {
        let area: number = 0;
        switch (type) {
            case Shapes.CIRCLE: area = Math.PI * Math.pow(length, 2);
                break;
            case Shapes.SQUARE: area = length * length;
                break;
            case Shapes.RECTANGLE: area = length * breadth;
                break;
            case Shapes.TRIANGLE: area = (length * breadth)/2;
                break;
            default: area = 0;
        }
        return area;
    }
}

let interestCalculator = new InterestCalculator();
console.log(`Simple Interest: ${interestCalculator.calculate()}`);
console.log(`Compound Interest: ${interestCalculator.calculate(InterestType.CI)}`);

let areaCalculator = new ShapeCalculator();
console.log(`Area: ${areaCalculator.calculate()}`);
console.log(`Area: ${areaCalculator.calculate(Shapes.RECTANGLE, 6, 9)}`);
console.log(`Area: ${areaCalculator.calculate(Shapes.CIRCLE, 6)}`);
console.log(`Area: ${areaCalculator.calculate(0, 6)}`);
