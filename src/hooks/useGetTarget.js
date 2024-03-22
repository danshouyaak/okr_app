import {ref, reactive} from "vue";
import {reqGetTargetList} from "@/api/index";
// useGetTarget
let inp1 = ref("");
let state = reactive({
    resAdd: [],
    keyResultList: [], // useKeyRes
});
// useKeyRes
const newResultValue = ref("");
export const useGetTarget = () => {
    // 获取目标列表
    async function getTargetList() {
        await reqGetTargetList().then((res) => {
            state.resAdd = res.data;
        });
    }

    return {
        inp1,
        state,
        getTargetList,
    };
};
export const useKeyRes = () => {
    return {
        newResultValue,
        state,
    };
};
