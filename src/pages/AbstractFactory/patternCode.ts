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

export const abstractGundamFactory = `interface Gunpla {
    void assemble();
}

// High Grade Gunpla
interface HighGradeGunpla extends Gunpla {
}

// Master Grade Gunpla
interface MasterGradeGunpla extends Gunpla {
}

// Perfect Grade Gunpla
interface PerfectGradeGunpla extends Gunpla {
}

class HighGradeRX78 implements HighGradeGunpla {
    @Override
    public void assemble() {
        System.out.println("Assembling High Grade RX-78 Gundam Gunpla...");
        // Add specific assembly code for High Grade RX-78 model
    }
}

class HighGradeZaku implements HighGradeGunpla {
    @Override
    public void assemble() {
        System.out.println("Assembling High Grade Zaku Gundam Gunpla...");
        // Add specific assembly code for High Grade Zaku model
    }
}

// Concrete Master Grade Gunpla models
class MasterGradeRX78 implements MasterGradeGunpla {
    @Override
    public void assemble() {
        System.out.println("Assembling Master Grade RX-78 Gundam Gunpla...");
        // Add specific assembly code for Master Grade RX-78 model
    }
}

class MasterGradeZaku implements MasterGradeGunpla {
    @Override
    public void assemble() {
        System.out.println("Assembling Master Grade Zaku Gundam Gunpla...");
        // Add specific assembly code for Master Grade Zaku model
    }
}

// Concrete Perfect Grade Gunpla models
class PerfectGradeRX78 implements PerfectGradeGunpla {
    @Override
    public void assemble() {
        System.out.println("Assembling Perfect Grade RX-78 Gundam Gunpla...");
        // Add specific assembly code for Perfect Grade RX-78 model
    }
}

class PerfectGradeZaku implements PerfectGradeGunpla {
    @Override
    public void assemble() {
        System.out.println("Assembling Perfect Grade Zaku Gundam Gunpla...");
        // Add specific assembly code for Perfect Grade Zaku model
    }
}

interface GunplaFactory {
    HighGradeGunpla createHighGradeGunpla();
    MasterGradeGunpla createMasterGradeGunpla();
    PerfectGradeGunpla createPerfectGradeGunpla();
}

class GundamGunplaFactory implements GunplaFactory {
    @Override
    public HighGradeGunpla createHighGradeGunpla() {
        return new HighGradeRX78();
    }

    @Override
    public MasterGradeGunpla createMasterGradeGunpla() {
        return new MasterGradeRX78();
    }

    @Override
    public PerfectGradeGunpla createPerfectGradeGunpla() {
        return new PerfectGradeRX78();
    }
}

// Concrete Gunpla Factory for Zaku models
class ZakuGunplaFactory implements GunplaFactory {
    @Override
    public HighGradeGunpla createHighGradeGunpla() {
        return new HighGradeZaku();
    }

    @Override
    public MasterGradeGunpla createMasterGradeGunpla() {
        return new MasterGradeZaku();
    }

    @Override
    public PerfectGradeGunpla createPerfectGradeGunpla() {
        return new PerfectGradeZaku();
    }
}

public class Main {
    public static void main(String[] args) {
        GunplaFactory gundamFactory = new GundamGunplaFactory();
        GunplaFactory zakuFactory = new ZakuGunplaFactory();

        HighGradeGunpla hgRX78 = gundamFactory.createHighGradeGunpla();
        hgRX78.assemble();

        MasterGradeGunpla mgZaku = zakuFactory.createMasterGradeGunpla();
        mgZaku.assemble();

        PerfectGradeGunpla pgRX78 = gundamFactory.createPerfectGradeGunpla();
        pgRX78.assemble();
    }
}`;

export const examplePrototype = `// Diagnoser interface
interface Diagnoser extends Cloneable {
    Diagnoser clone();
    String getAge();
    String getSex();
    String getEthnicity();
}

// DiagnoserNetwork class implementing Diagnoser interface
class DiagnoserNetwork implements Diagnoser {
    private double[] weights;
    private double[] biases;
    private String architecture;
    private String age;
    private String sex;
    private String ethnicity;

    // Constructor
    public DiagnoserNetwork(double[] weights, double[] biases, String architecture, String age, String sex, String ethnicity) {
        this.weights = weights;
        this.biases = biases;
        this.architecture = architecture;
        this.age = age;
        this.sex = sex;
        this.ethnicity = ethnicity;
    }

    // Implementing clone method to create a deep copy of DiagnoserNetwork
    @Override
    public Diagnoser clone() {
        double[] clonedWeights = this.weights.clone();
        double[] clonedBiases = this.biases.clone();
        return new DiagnoserNetwork(clonedWeights, clonedBiases, this.architecture, this.age, this.sex, this.ethnicity);
    }

    @Override
    public String getAge() {
        return age;
    }

    @Override
    public String getSex() {
        return sex;
    }

    @Override
    public String getEthnicity() {
        return ethnicity;
    }
}

// NetworkRegistry class acting as Prototype Registry
class NetworkRegistry {
    private Map<String, Diagnoser> networks = new HashMap<>();

    // Method to add a Diagnoser to the registry
    public void addEntry(String id, Diagnoser network) {
        networks.put(id, network);
    }

    // Method to get Diagnoser by ID from the registry
    public Diagnoser getByID(String id) {
        Diagnoser network = networks.get(id);
        if (network != null) {
            return network.clone();
        }
        return null;
    }

    // Method to get Diagnoser by age from the registry
    public Diagnoser getByAge(String age) {
        for (Diagnoser network : networks.values()) {
            if (network.getAge().equals(age)) {
                return network.clone();
            }
        }
        return null;
    }

    // Method to get Diagnoser by sex from the registry
    public Diagnoser getBySex(String sex) {
        for (Diagnoser network : networks.values()) {
            if (network.getSex().equals(sex)) {
                return network.clone();
            }
        }
        return null;
    }

    // Method to get Diagnoser by ethnicity from the registry
    public Diagnoser getByEthnicity(String ethnicity) {
        for (Diagnoser network : networks.values()) {
            if (network.getEthnicity().equals(ethnicity)) {
                return network.clone();
            }
        }
        return null;
    }
}`;
