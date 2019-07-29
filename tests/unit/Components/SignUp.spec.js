import { mount, shallowMount } from '@vue/test-utils';
import SignUp from '@/components/SignUp.vue';

let wrapper;

beforeEach(() => {
  wrapper = shallowMount(SignUp, {
    propsData: {},
    mocks: {},
    stubs: {},
    methods: {}
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe('SignUp', () => {
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  test('has 5 input-field classes', () => {
    expect(wrapper.findAll('.input-field').length).toBe(5);
  });

  test('clicking sign in triggers toggle function', () => {
    wrapper.vm.toggleSignUp = jest.fn();
    const signInLink = '#sign-in-link';
    wrapper.find(signInLink).trigger('click');
    expect(wrapper.vm.toggleSignUp).toBeCalled();
  });

  test('renders correctly', () => {
    const fullRender = mount(SignUp);
    expect(fullRender.element).toMatchSnapshot();
  });
});

describe('SignUp', () => {
  it('toggles sign in link', () => {
    const wrapper = shallowMount(SignUp);
    const signUpLink = wrapper.find('#sign-in-link');
    signUpLink.trigger('click');
    // const title = wrapper.find('title')
    // expect(wrapper.text()).toMatch('Sign Up For Activise')
  });
});
