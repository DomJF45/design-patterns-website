export const FactoryPatternJava = `interface Product {
    void operation();
}

// Concrete products
class ConcreteProductA implements Product {
    public void operation() {
        System.out.println("Performing operation in Product A.");
    }
}

class ConcreteProductB implements Product {
    public void operation() {
        System.out.println("Performing operation in Product B.");
    }
}

// Factory class
class ProductFactory {
    public Product createProduct(String productType) {
        if (productType.equals("A")) {
            return new ConcreteProductA();
        } else if (productType.equals("B")) {
            return new ConcreteProductB();
        } else {
            throw new IllegalArgumentException("Invalid product type.");
        }
    }
}

// Client class
public class Main {
    public static void main(String[] args) {
        ProductFactory factory = new ProductFactory();

        // Create Product A
        Product productA = factory.createProduct("A");
        productA.operation();

        // Create Product B
        Product productB = factory.createProduct("B");
        productB.operation();
    }
}`;

export const AbstractFactoryJava = `// Abstract Product A
interface ProductA {
    void operationA();
}

// Concrete Product A1
class ConcreteProductA1 implements ProductA {
    public void operationA() {
        System.out.println("Performing operation A in Product A1.");
    }
}

// Concrete Product A2
class ConcreteProductA2 implements ProductA {
    public void operationA() {
        System.out.println("Performing operation A in Product A2.");
    }
}

// Abstract Product B
interface ProductB {
    void operationB();
}

// Concrete Product B1
class ConcreteProductB1 implements ProductB {
    public void operationB() {
        System.out.println("Performing operation B in Product B1.");
    }
}

// Concrete Product B2
class ConcreteProductB2 implements ProductB {
    public void operationB() {
        System.out.println("Performing operation B in Product B2.");
    }
}

// Abstract Factory
interface AbstractFactory {
    ProductA createProductA();
    ProductB createProductB();
}

// Concrete Factory 1
class ConcreteFactory1 implements AbstractFactory {
    public ProductA createProductA() {
        return new ConcreteProductA1();
    }

    public ProductB createProductB() {
        return new ConcreteProductB1();
    }
}

// Concrete Factory 2
class ConcreteFactory2 implements AbstractFactory {
    public ProductA createProductA() {
        return new ConcreteProductA2();
    }

    public ProductB createProductB() {
        return new ConcreteProductB2();
    }
}

// Client class
public class Main {
    public static void main(String[] args) {
        AbstractFactory factory1 = new ConcreteFactory1();
        AbstractFactory factory2 = new ConcreteFactory2();

        // Use Factory 1
        ProductA productA1 = factory1.createProductA();
        ProductB productB1 = factory1.createProductB();
        productA1.operationA();
        productB1.operationB();

        // Use Factory 2
        ProductA productA2 = factory2.createProductA();
        ProductB productB2 = factory2.createProductB();
        productA2.operationA();
        productB2.operationB();
    }
}`;
