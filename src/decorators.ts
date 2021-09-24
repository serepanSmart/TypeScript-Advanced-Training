// Task 08.01. Class Decorators (sealed)

export function sealed(p: string) {
  return function (target: Function): void {
    console.log(`Sealed decorator is called with param ${p}`);
    console.log(target);
    Object.seal(target);
    Object.seal(target.prototype);
  };
};

export function logger<TFunction extends Function>(target: TFunction) {
  const newConstructor: Function = function () {
    console.log(`Creating new instance of ${target}`);
    console.log(target);

    this.age = 30;
  };

  newConstructor.prototype = Object.create(target.prototype);

  newConstructor.prototype.printLibrarian = function () {
    console.log(`Librarian name:  ${this.name}, Librarian age: ${this.age}`);
  };
  return newConstructor as TFunction;
}

// Task 08.03. Method Decorator (writable)

export function writable(iswritable: boolean) {
  return function (target: object, methodName: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    console.log('decorator writable is called');
    descriptor.writable = iswritable;
    return descriptor;
  };
};

// Task 08.04. Method Decorator (timeout)

export function timeout(ms: number = 0) {
  return function (target: object, methodName: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      if (window.confirm('Are you sure')) {
        setTimeout(() => {
          originalMethod.apply(this, args);
        }, ms);
      }
    };
    return descriptor;
  };
};

// Task 08.05. Parameter Decorator (logParameter)

export function logParameter(target: object, methodName: string, index: number): void {
  const key = `${methodName} decor params indexes`;

  if (Array.isArray(target[key])) {
    target[key].push(index);
  } else {
    target[key] = [index];
  }
}

export function logMethod(target: object, methodName: string, descriptor: PropertyDescriptor): PropertyDescriptor {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    const key = `${methodName} decor params indexes`;
    const indexes = target[key];
    if (Array.isArray(indexes)) {
      args.forEach((arg, index) => {
        if (indexes.includes(index)) {
          console.log(`Method ${methodName} ParamIndex: ${index} `);
        }
      });
    }
    return originalMethod.apply(this, args);
  };
  return descriptor;
};

// Task 08.06. Property Decorator

function makeProperty<T>(
  prototype: any,
  propertyName: string,
  getTransformer: (value: any) => T,
  setTransformer: (value: any) => T
) {
  const values = new Map<any, T>();

  Object.defineProperty(prototype, propertyName, {
    set(firstValue: any) {
      Object.defineProperty(this, propertyName, {
        get() {
          if (getTransformer) {
            return getTransformer(values.get(this));
          } else {
            values.get(this);
          }
        },
        set(value: any) {
          if (setTransformer) {
            values.set(this, setTransformer(value));
          } else {
            values.set(this, value);
          }
        },
        enumerable: true
      });
      this[propertyName] = firstValue;
    },
    enumerable: true,
    configurable: true
  });
}

export function format(pref: string = 'Mr./Mrs') {
  return function (target: object, propertyName: string): void {
    makeProperty(target, propertyName, value => `${pref} ${value}`, value => value);
  };
}

// Task 08.07. Accessor Decorator

export function positiveInteger(target: object, propertyName: string, descriptor: PropertyDescriptor): PropertyDescriptor {
  const originalSet = descriptor.set;
  descriptor.set = function (value: number) {
    if (value < 1 || Number.isInteger(value)) {
      throw new Error(`Invalid value ${value}`);
    }

    originalSet.call(this, value);
  };

  return descriptor;
}

