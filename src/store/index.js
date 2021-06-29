import Actions from "./actions";
import Mutations from "./mutations";
import Getters from "./getters";

import LocationModules from "./modules/location";

const store = {
    state: () =>({}),
    getters: Getters,
    actions: Actions,
    mutations: Mutations,
    modules: {
        location: LocationModules
    }
}
export default store;