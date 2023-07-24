export const prototypeJava = `// The prototype interface that provides the clone method
interface Prototype extends Cloneable {
    Prototype clone();
}

// Concrete prototype class implementing the Prototype interface
class ConcretePrototype implements Prototype {
    private String name;

    public ConcretePrototype(String name) {
        this.name = name;
    }

    // Custom clone method to create a shallow copy
    @Override
    public Prototype clone() {
        try {
            return (Prototype) super.clone();
        } catch (CloneNotSupportedException e) {
            // Handle exception if needed
            return null;
        }
    }

    public String getName() {
        return name;
    }
}

public class PrototypePatternExample {
    public static void main(String[] args) {
        // Creating an instance of ConcretePrototype
        ConcretePrototype originalObject = new ConcretePrototype("Original");

        // Cloning the originalObject to create a new object
        ConcretePrototype clonedObject = (ConcretePrototype) originalObject.clone();

        // Modifying the name of the cloned object
        clonedObject.name = "Cloned";

        // Outputting the names of both objects
        System.out.println("Original Object Name: " + originalObject.getName());
        System.out.println("Cloned Object Name: " + clonedObject.getName());
    }
}`;
