export class Faker {
  public static object(objectId?: string): object {
    let obj = {
      name: Math.random()
        .toString(36)
        .substring(2, 15),
      age: Math.floor(Math.random() * Math.floor(100)),
    };

    if (objectId !== undefined) {
      obj = Object.assign(obj, { objectID: objectId });
    }

    return obj;
  }

  public static objects(number: number): object[] {
    const objects = [];

    for (let index = 1; index <= number; index++) {
      objects.push(Faker.object(index.toString()));
    }

    return objects;
  }
}