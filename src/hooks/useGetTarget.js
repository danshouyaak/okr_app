import {ref, reactive} from "vue";
import {reqGetTargetList} from "@/api/index";
// useGetTarget
let inp1 = ref("");
let sTime = ref(""); // 开始时间
let eTime = ref(""); // 结束时间
let state = reactive({
    resAdd: [],
    keyResultList: [], // useKeyRes
});
let memo = ref(""); // 备忘
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
        memo,
        sTime,
        eTime,
    };
};
export const useKeyRes = () => {
    return {
        newResultValue,
        state,
    };
};
