/* eslint-disable @typescript-eslint/ban-types */
function RequiresToken(target: object, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
  // Preparing decorator
  const method = descriptor.value;
  descriptor.value = async function (...args: unknown[]) {
    // TODO: Execute extend token
    // await axios.get("/api/auth/token", {...})

    // Continue execute the function
    const result = await method.apply(this, args);

    // TODO: post-action transform
    const finalResult = result;
    // Closing the function decorator
    return finalResult;
  }
  return descriptor;
};

export default RequiresToken;
