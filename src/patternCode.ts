export const FactoryPatternJava = `
interface Product {
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
}
`;
