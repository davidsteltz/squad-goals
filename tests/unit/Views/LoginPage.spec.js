import { shallowMount } from '@vue/test-utils';
import Login from '@/views/LoginPage.vue';

describe('LoginPage', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(Login);
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  test('should render signIn when it is selected', () => {
    const wrapper = shallowMount(Login, {
      data: () => { return { hasAccount: true }; }
    });

    expect(wrapper.findAll({ name: 'SignInComponent' }).length).toBe(1);
    expect(wrapper.findAll({ name: 'SignUpComponent' }).length).toBe(0);
  });

  test('should render signUp when it is selected', () => {
    const wrapper = shallowMount(Login, {
      data: () => { return { hasAccount: false }; }
    });

    expect(wrapper.findAll({ name: 'SignInComponent' }).length).toBe(0);
    expect(wrapper.findAll({ name: 'SignUpComponent' }).length).toBe(1);
  });

  test('renders correctly', () => {
    // shallowMount because this is a large view and we don't want to initialize all of its components
    // Instead we just check that they are present
    const fullRender = shallowMount(Login);
    expect(fullRender.element).toMatchSnapshot();
  });
});
