import { shallowMount, mount } from '@vue/test-utils'
import SignIn from '@/components/SignIn.vue'

let wrapper

beforeEach(() => {
  wrapper = shallowMount(SignIn, {
    propsData: {},
    mocks: {},
    stubs: {},
    methods: {}
  })
})

afterEach(() => {
  wrapper.destroy()
})

describe('SignIn', () => {
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy()
  })

  test('has 2 input-field classes', () => {
    expect(wrapper.findAll('.input-field').length).toBe(2)
  })

  test('clicking sign up triggers toggle function', () => {
    wrapper.vm.toggleSignUp = jest.fn()
    const signUpLink = '#sign-up-link'
    wrapper.find(signUpLink).trigger('click')
    expect(wrapper.vm.toggleSignUp).toBeCalled()
  })

  test('renders correctly', () => {
    const fullRender = mount(SignIn)
    expect(fullRender.element).toMatchSnapshot()
  })
})
