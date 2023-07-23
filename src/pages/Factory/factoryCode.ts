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

export const gundamFactoryJava = `interface Gunpla {
    void assemble();
}

class RX78 implements Gunpla {
    @Override
    public void assemble() {
        System.out.println("Assembling RX-78 Gundam Gunpla...");
        // Add specific assembly code for RX-78 model
    }
}

class Zaku implements Gunpla {
    @Override
    public void assemble() {
        System.out.println("Assembling Zaku Gundam Gunpla...");
        // Add specific assembly code for Zaku model
    }
}

class WingZero implements Gunpla {
    @Override
    public void assemble() {
        System.out.println("Assembling Wing Zero Gundam Gunpla...");
        // Add specific assembly code for Wing Zero model
    }
}

class GunplaFactory {
    public Gunpla createGunpla(String modelType) {
        if (modelType.equalsIgnoreCase("RX78")) {
            return new RX78();
        } else if (modelType.equalsIgnoreCase("Zaku")) {
            return new Zaku();
        } else if (modelType.equalsIgnoreCase("WingZero")) {
            return new WingZero();
        } else {
            throw new IllegalArgumentException("Invalid model type: " + modelType);
        }
    }
}

public class Main {
    public static void main(String[] args) {
        GunplaFactory factory = new GunplaFactory();

        Gunpla rx78 = factory.createGunpla("RX78");
        rx78.assemble();

        Gunpla zaku = factory.createGunpla("Zaku");
        zaku.assemble();

        Gunpla wingZero = factory.createGunpla("WingZero");
        wingZero.assemble();
    }
}`;
