export interface Classification {
  name: string;
}

const creationalPatterns: Classification[] = [
  {
    name: "Factory",
  },
  {
    name: "Abstract Factory",
  },
  {
    name: "Builder",
  },
  {
    name: "Prototype",
  },
  {
    name: "Singleton",
  },
];

const structuralPatterns: Classification[] = [
  {
    name: "Adaptor",
  },
  {
    name: "Bridge",
  },
  {
    name: "Composite",
  },
  {
    name: "Decorator",
  },
  {
    name: "Facade",
  },
  {
    name: "Flyweight",
  },
  {
    name: "Proxy",
  },
];

const behavioralPatterns: Classification[] = [
  {
    name: "Chain of Responsibility",
  },
  {
    name: "Command",
  },
  {
    name: "Iterator",
  },
  {
    name: "Mediator",
  },
  {
    name: "Memento",
  },
  {
    name: "Observer",
  },
  {
    name: "State",
  },
  {
    name: "Strategy",
  },
  {
    name: "Template Method",
  },
  {
    name: "Visitor",
  },
];

interface AllPatterns {
  creational: Classification[];
  structural: Classification[];
  behavioral: Classification[];
}

export const patterns: AllPatterns = {
  creational: creationalPatterns,
  structural: structuralPatterns,
  behavioral: behavioralPatterns,
};
