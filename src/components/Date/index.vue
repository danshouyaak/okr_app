<template>
  <div class="demo-date-picker">
    <el-date-picker
      v-model="value"
      type="date"
      placeholder="Pick a day"
      format="YYYY/MM/DD"
      value-format="YYYY-MM-DD"
    >
      <template #default="cell">
        <div class="cell" :class="{ current: cell.isCurrent }">
          <span class="text">{{ cell.text }}</span>
          <span v-if="isHoliday(cell)" class="holiday" />
        </div>
      </template>
    </el-date-picker>
  </div>
</template>

<script setup>
import {ref, reactive, onBeforeMount, defineEmits, watch} from "vue";

let curDate1 = ref("");
function getCurrentDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // padStart(获取字符串的最小长度，不够长度补充)
  const day = String(date.getDate()).padStart(2, "0");
  curDate1.value = `${year}-${month}-${day}`;
}

onBeforeMount(() => {
  getCurrentDate();
  startTime();
  endTime();
});
// 监听日期改变
watch(curDate1, (newValue, oldValue) => {
  startTime();
  endTime();
});
const emit = defineEmits(["startTime", "endTime"]);
const startTime = () => {
  emit("startTime", curDate1);
};
const endTime = () => {
  emit("endTime", curDate1);
};

const value = ref(curDate1);
const holidays = [
  "2021-10-01",
  "2021-10-02",
  "2021-10-03",
  "2021-10-04",
  "2021-10-05",
  "2021-10-06",
  "2021-10-07",
];

const isHoliday = ({ dayjs }) => {
  return holidays.includes(dayjs.format("YYYY-MM-DD"));
};
defineExpose({curDate1});
</script>

<style lang="scss" scoped>
.cell {
  height: 30px;
  padding: 3px 0;
  box-sizing: border-box;
}
.cell .text {
  width: 24px;
  height: 24px;
  display: block;
  margin: 0 auto;
  line-height: 24px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
}
.cell.current .text {
  background: #626aef;
  color: #fff;
}
.cell .holiday {
  position: absolute;
  width: 6px;
  height: 6px;
  background: var(--el-color-danger);
  border-radius: 50%;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
