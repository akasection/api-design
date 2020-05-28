/* eslint-disable @typescript-eslint/ban-types */
const limiter: Record<string, boolean> = {};

function RequestLimit(lane: string) {
  return function (target: object, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const method = descriptor.value;
    limiter[lane] = false;
    descriptor.value = async function (...args: unknown[]) {
      if(limiter[lane]) return;
      limiter[lane] = true;
      await method.apply(this, args);
      limiter[lane] = false;

    }
    return descriptor;
  }
};

export default RequestLimit;
