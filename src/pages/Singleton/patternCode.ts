export const SingletonJava = `// Singleton class
class Singleton {
    // This single instance will be accessible by all clients via the getInstance() method
    private static Singleton instance = null;

    // Make the constructor private to prevent clients from instantiating the class directly
    // Clients can only use the instance returned by getInstance()
    private Singleton() {}

    // This static method allows returns the one static instance of the class
    public static Singleton getInstance() {
        if (instance == null) {
            // Lazy initialization; the instance is created when the method is first called
            instance = new Singleton();
        }
        return instance;
    }

    // Others methods can be created here and accessed from the singleton instance
    public void operation() {
        System.out.println("Performing operation in Singleton.");
    }

    // Demonstration driver code
    public static void main(String[] args) {
        Singleton singleton = Singleton.getInstance();
        singleton.operation();
    }
}`;

export const EagerSingletonJava = `// Eagerly-instantiated Singleton class
class EagerSingleton {
    // This single instance will be accessible by all clients via the getInstance() method
    // Here we employ eager instantiation, meaning the instance is created when the class is loaded
    // This can prevent multithreading issues, but can also be wasteful if the instance is never used
    private static EagerSingleton instance = new EagerSingleton();

    // Make the constructor private to prevent clients from instantiating the class directly
    // Clients can only use the instance returned by getInstance()
    private EagerSingleton() {}

    // This static method allows returns the one static instance of the class
    public static EagerSingleton getInstance() {
        return instance;
    }

    // Others methods can be created here and accessed from the singleton instance
    public void operation() {
        System.out.println("Performing operation in Singleton.");
    }

    // Demonstration driver code
    public static void main(String[] args) {
        EagerSingleton singleton = EagerSingleton.getInstance();
        singleton.operation();
    }
}`;

export const GunplaSingletonJava = `// Gunpla DB Connection pool class
class GunplaDBConnectionPool {
    // This class represents a singleton backed DB connection pool for Gunpla information
    // Note that this is an example and not indicative of a complete implementation

    // This single instance will be accessible by all clients via the getInstance() method
    // Here we can use lazy instantiation, meaning the instance is created when the getInstance method is first called
    private static GunplaDBConnectionPool instance = null;

    // Specify parameters for the connection pool
    public int maxConnections;
    public int availableConnections;

    private List<Connection> currentConnections;
    private boolean poolReadyForConnections;

    public Connection getConnection() {
        // This method returns a DB connection from the pool
        // If no connections are available, it will wait until one is available
        // If the pool is not ready for connections, it will throw an exception

        // If the pool is not ready for connections, throw an exception
        if (!poolReadyForConnections) {
            throw new Exception("Connection pool is not ready for connections.");
        }

        // If there are no connections available, wait until one is available
        if (availableConnections == 0) {
            wait(); // This is an abstraction that depends upon the exact implementation of the connection pool
        }

        // If there are connections available, return one
        availableConnections--;
        return currentConnections.remove(0);
    }

    public void releaseConnection(Connection connection) {
        // This method returns an active DB connection to the pool
        // If the connection is invalid, it will be closed
        // If the connection pool is full, the connection will be closed
        // If the connection pool is not ready for connections, the connection will be closed

        // If the connection is invalid, or if the connection pool is full, close the connection
        if (!connection.isValid() || availableConnections == maxConnections) {
            connection.close();
        }

        // If the connection pool is not ready for connections, close the connection
        if (!poolReadyForConnections) {
            connection.close();
        }

        // If the connection is valid, and the connection pool is not full, and the connection pool is ready for connections, add the connection to the pool
        currentConnections.add(connection);
        availableConnections++;
    }

    // Make the constructor private to prevent clients from instantiating the class directly
    // Clients can only use the instance returned by getInstance()
    private GunplaDBConnectionPool() {
        // Initialize the connection pool; Exact parameters will depend upon the implementation environment, and other system parameters
        maxConnections = 10;
        availableConnections = 10;
        currentConnections = new ArrayList<Connection>();
        poolReadyForConnections = true;
    }

    // This static method allows returns the one static instance of the class
    public static GunplaDBConnectionPool getInstance() {
        if (instance == null) {
            // Lazy initialization; the instance is created when the method is first called
            instance = new GunplaDBConnectionPool();
        }
        return instance;
    }

    // Others methods can be created here and accessed from the singleton instance
}

// Example Connection class
class Connection {
    // This class represents a DB connection known and managed by the singleton connection pool
    // This is only an example and not indicative of a complete implementation
    
    private string databaseURL;
    private string username;
    private string password;
    private boolean isValid;
    private List<String> connectionParameters;

    public Connection(string databaseURL, string username, string password, List<String> connectionParameters) {
        this.databaseURL = databaseURL;
        this.username = username;
        this.password = password;
        this.connectionParameters = connectionParameters;
        this.isValid = true;
    }

    public boolean isValid() {
        return isValid;
    }

    public void close() {
        isValid = false;
    }

    // Other methods can be created here
}

`;
