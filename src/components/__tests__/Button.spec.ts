import { mount } from '@vue/test-utils';
import Button from '@/components/Button.vue';

describe('Button.vue', () => {
  it('renders slot content', () => {
    const wrapper = mount(Button, {
      slots: {
        default: 'Click me',
      },
    });
    expect(wrapper.text()).toBe('Click me');
  });

  it('applies the correct variant class', () => {
    const wrapper = mount(Button, {
      props: {
        variant: 'primary',
      },
    });
    expect(wrapper.classes()).toContain('btn--primary');
  });

  it('is disabled when prop is passed', () => {
    const wrapper = mount(Button, {
      props: { disabled: true },
    });
    expect(wrapper.attributes('disabled')).toBeDefined();
    expect(wrapper.classes()).toContain('btn--disabled');
  });

  it('emits a click event when clicked', async () => {
    const wrapper = mount(Button);
    await wrapper.trigger('click');
    expect(wrapper.emitted()).toHaveProperty('click');
  });
});
