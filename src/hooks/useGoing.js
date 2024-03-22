import {reactive} from "vue";
import {reqGoingList} from "@/api/index.js";

const state = reactive({
    goingList: [],
    leftTempRes: [],
});
export const useGoing = () => {
    async function getGoingTargetList() {
        state.goingList = await reqGoingList();
        state.leftTempRes = state.goingList[0];
    }

    return {
        getGoingTargetList,
        state,
    };
};
