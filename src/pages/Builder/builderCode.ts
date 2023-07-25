export const concreteBuilder = `

// Product: Router
class Product {
    private String name;

    public Product(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "Name: " +
                "Name=" + name";
    }
}

// Builder: Builder
interface Builder {
    void reset();
    void buildStep1();
    void buildStep2();
}

// Concrete Builder: ConcreteBuilder1
class ConcreteBuilder1 implements Builder {

    @Override
    public void buildStep1() {
        // ...
    }

    @Override
    public void buildStep2() {
        // ...
    }

    @Override
    public void reset() {
        // ...
    }
}

// Concrete Builder: ConcreteBuilder2
class ConcreteBuilder2 implements Builder {

    @Override
    public void buildStep1() {
        // ...
    }

    @Override
    public void buildStep2() {
        // ...
    }

    @Override
    public void reset() {
        // ...
    }
}

// Director: RouterDirector
class Director {
    private Builder builder;

    public Director(Builder builder) {
        this.builder = builder;
    }

    public void chooseBuilder(Builder builder) {
        // ...
    }

    public Router make(String type) {
        // ...
    }
}

// Client code
public class BuilderPatternExample {
    public static void main(String[] args) {
        Director productADirector = new Director(new ConcreteBuilder1());
        Director productBDirector = new Director(new ConcreteBuilder2());
        productADirector.buildStep1()
        productADirector.buildStep2()
        productADirector.reset()

        productBDirector.buildStep1()
        productBDirector.buildStep2()
        productBDirector.reset()    
    }
}

`;

export const routerBuilder = `// Product: Router
class Router {
    private String route;
    private String handler;

    public Router(String route, String handler) {
        this.route = route;
        this.handler = handler;
    }

    @Override
    public String toString() {
        return "Route: " +
                "Route=" + route +
                ", Handler=" + handler;
    }
}

// Builder: RouterBuilder
interface RouterBuilder {
    void setRoute(String route);
    void setHandler(String handler);
    Router getResult();
}

// Concrete Builder: APIRouterBuilder
class APIRouterBuilder implements RouterBuilder {
    private Router router;

    public APIRouterBuilder() {
        this.router = new Router("", "");
    }

    @Override
    public void setRoute(String route) {
        router = new Router("/api" + route, "APIHandler");
    }

    @Override
    public void setHandler(String handler) {
        router = new Router(router.route, handler);
    }

    @Override
    public Router getResult() {
        return router;
    }
}

// Concrete Builder: UserRouterBuilder
class UserRouterBuilder implements RouterBuilder {
    private Router router;

    public UserRouterBuilder() {
        this.router = new Router("", "");
    }

    @Override
    public void setRoute(String route) {
        router = new Router("/user" + route, "UserHandler");
    }

    @Override
    public void setHandler(String handler) {
        router = new Router(router.route, handler);
    }

    @Override
    public Router getResult() {
        return router;
    }
}

// Director: RouterDirector
class RouterDirector {
    private RouterBuilder routerBuilder;

    public RouterDirector(RouterBuilder routerBuilder) {
        this.routerBuilder = routerBuilder;
    }

    public void buildRoute(String route, String handler) {
        routerBuilder.setRoute(route);
        routerBuilder.setHandler(handler);
    }

    public Router getRouter() {
        return routerBuilder.getResult();
    }
}

// Client code
public class BuilderPatternRouterExample {
    public static void main(String[] args) {
        RouterDirector apiDirector = new RouterDirector(new APIRouterBuilder());
        RouterDirector userDirector = new RouterDirector(new UserRouterBuilder());

        apiDirector.buildRoute("/data", "DataController");
        Router apiRoute = apiDirector.getRouter();
        System.out.println("API Route: " + apiRoute);

        userDirector.buildRoute("/profile", "ProfileController");
        Router userRoute = userDirector.getRouter();
        System.out.println("User Route: " + userRoute);
    }
}`;
