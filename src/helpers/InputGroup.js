// import Checkbox from '@/components/atoms/Checkbox';
// import Radio from '@/components/atoms/Radio';

const Checkbox = null;
const Radio = null;

export default {
  props: ['data', 'onChange', 'type'],
  components: {
    Checkbox,
    Radio,
  },
  data() {
    return {
      value: {},
    };
  },
  methods: {
    updateState(name, checked) {
      const filterName = name;
      this.value[filterName] = checked;
    },
    handleMounted(name, checked) {
      this.updateState(name, checked);
    },
    handleToggle(e) {
      if (this.isInput('radio')) {
        Object.entries(this.value).forEach(([name]) => {
          document.querySelector(`[name=${name}]`).checked = false;
          this.updateState(name, false);
        });
        e.target.checked = true;
      }
      const { name, checked } = e.target;
      this.updateState(name, checked);
      this.onChange(this.value);
    },
    isInput(name) {
      return this.type === name;
    },
  },
};
