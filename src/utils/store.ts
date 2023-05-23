import EventBus from "./eventBus";
import { set } from "./utils";

export enum StoreEvents {
  Updated = "updated",
}

type Indexed<T = any> = {
  [key in string]: T;
};

class Store extends EventBus {
  private state: Indexed = {};

  public getState() {
    return this.state;
  }

  public set(path: string, value: any) {
    set(this.state, path, value);
    this.emit(StoreEvents.Updated);
  }
}

const store = new Store();
export default store;
