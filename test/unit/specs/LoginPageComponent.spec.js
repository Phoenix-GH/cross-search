import Vue from 'vue';
// import LoginPageComponent from '@/components/organisms/LoginPageComponent';
const LoginPageComponent = null;

describe('LoginPageComponent.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(LoginPageComponent);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('h1').textContent)
      .to.equal('Login Form');
  });
});
